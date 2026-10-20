// 扫描全书的 `::: warning 存疑` 提示框，生成「附录 D · 存疑汇总」
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs', 'cod')
const out = join(root, 'appendix', 'uncertain.md')

// 与侧边栏顺序一致
const { codSidebar } = await import('../docs/.vitepress/cod-toc.ts').catch(() => ({ codSidebar: null }))
const order = []
if (codSidebar) for (const v of codSidebar) for (const it of v.items) order.push({ vol: v.text, link: it.link, text: it.text })

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : []
  })
}

const files = walk(root).filter((p) => p !== out && !p.endsWith('index.md'))
const byLink = new Map()
for (const file of files) {
  const rel = relative(root, file).replace(/\\/g, '/').replace(/\.md$/, '')
  const src = readFileSync(file, 'utf8')
  const title = (src.match(/^#\s+(.+)$/m)?.[1] ?? rel).trim()
  const lines = src.split('\n')
  const items = []
  let heading = ''
  for (let i = 0; i < lines.length; i++) {
    const h = lines[i].match(/^#{2,4}\s+(.+)$/)
    if (h) heading = h[1].trim()
    if (/^:::\s*warning\s+存疑\s*$/.test(lines[i].trim())) {
      const body = []
      let j = i + 1
      for (; j < lines.length && lines[j].trim() !== ':::'; j++) body.push(lines[j])
      i = j
      // 框里的站内相对链接是相对原章节写的，搬到附录要改成相对附录目录
      const text = body
        .join('\n')
        .trim()
        .replace(/\]\((?!https?:|#|mailto:)([^)\s]+)\)/g, (_, href) => {
          const [p, hash] = href.split('#')
          const abs = join(dirname(file), p)
          const rel = relative(dirname(out), abs).replace(/\\/g, '/')
          return `](${rel}${hash ? '#' + hash : ''})`
        })
      if (text) items.push({ heading, text })
    }
  }
  if (items.length) byLink.set('/cod/' + rel, { rel, title, items })
}

const known = order.filter((o) => byLink.has(o.link))
const rest = [...byLink.keys()].filter((k) => !order.some((o) => o.link === k)).sort()

let md = `---
search: false
---

# 附录 D · 存疑汇总

> 本页由构建脚本自动生成：收集全书正文里所有标为「存疑」的提示框。它们是官方没有明确、各来源说法不一、或者只来自泄露与玩家推测的内容。

共 ${[...byLink.values()].reduce((n, c) => n + c.items.length, 0)} 处，分布在 ${byLink.size} 章。点章节标题可以跳回原文。

`
let curVol = ''
const emit = (link) => {
  const c = byLink.get(link)
  md += `### [${c.title}](../${c.rel}.md)\n\n`
  for (const it of c.items) {
    const where = it.heading ? `**${it.heading}**：` : ''
    const quoted = it.text.split('\n').map((l) => (l.trim() ? '> ' + l : '>')).join('\n')
    md += `${where}\n\n${quoted}\n\n`
  }
}
for (const o of known) {
  if (o.vol !== curVol) { md += `## ${o.vol}\n\n`; curVol = o.vol }
  emit(o.link)
}
if (rest.length) { md += `## 其他\n\n`; rest.forEach(emit) }
if (!byLink.size) md += '目前还没有存疑标注。\n'

writeFileSync(out, md)
console.log(`uncertain.md: ${byLink.size} chapters`)
