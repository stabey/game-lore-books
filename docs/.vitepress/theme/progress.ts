// 记住每本书最后读到的章节（只存在本机浏览器里，读不到也不影响页面）
const KEY = 'glb:last-chapter'

export interface LastChapter {
  path: string
  title: string
}

function bookOf(path: string): string | null {
  const m = path.match(/\/(cod|ac)\/(.+)/)
  return m && m[2] && m[2] !== 'index' && m[2] !== 'index.html' ? m[1] : null
}

export function rememberChapter(path: string) {
  const book = bookOf(path)
  if (!book) return
  // 等标题更新后再读
  setTimeout(() => {
    try {
      const h1 = document.querySelector('.vp-doc h1')
      const title = (h1?.textContent || document.title).replace(/\s*[#​]\s*$/, '').trim()
      const all = JSON.parse(localStorage.getItem(KEY) || '{}')
      all[book] = { path, title }
      localStorage.setItem(KEY, JSON.stringify(all))
    } catch {}
  }, 60)
}

export function lastChapter(book: string): LastChapter | null {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}')
    return all[book] ?? null
  } catch {
    return null
  }
}
