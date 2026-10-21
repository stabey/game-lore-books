import { defineConfig } from 'vitepress'
import { codSidebar } from './cod-toc'
import { reSidebar } from './re-toc'
import { acSidebar } from './ac-toc'

// GitHub Pages 项目页部署在 /game-lore-books/ 下；本地开发或自定义域名时用 BASE=/ 覆盖
const base = process.env.BASE ?? '/game-lore-books/'


export default defineConfig({
  lang: 'zh-CN',
  title: '游戏剧情书架',
  description: '使命召唤、生化危机、刺客信条：中文剧情电子书合集',
  base,
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['**/README.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#0f1012' }],
    ['link', { rel: 'icon', href: `${base}favicon.svg` }]
  ],
  markdown: {
    lineNumbers: false,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '游戏剧情书架',
    nav: [
      { text: '书架', link: '/' },
      { text: '使命召唤', link: '/cod/', activeMatch: '^/cod/' },
      { text: '生化危机', link: '/re/', activeMatch: '^/re/' },
      { text: '刺客信条', link: '/ac/', activeMatch: '^/ac/' }
    ],
    sidebar: {
      '/cod/': codSidebar,
      '/re/': reSidebar,
      '/ac/': acSidebar
    },
    outline: { level: [2, 3], label: '本章目录' },
    docFooter: { prev: '上一章', next: '下一章' },
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'medium' } },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    langMenuLabel: '语言',
    notFound: {
      title: '这一页不存在',
      quote: '也许它还在写，也许链接拼错了。',
      linkText: '回到书架'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索全书', buttonAriaLabel: '搜索全书' },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        },
        // 中文没有空格分词：按相邻两字切分建索引；单字查询靠前缀匹配命中
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const tokens: string[] = []
              for (const part of text.toLowerCase().split(/[\s\p{P}\p{S}]+/u)) {
                if (!part) continue
                if (/^[\x00-\x7f]+$/.test(part)) { tokens.push(part); continue }
                const chars = Array.from(part)
                if (chars.length === 1) { tokens.push(chars[0]); continue }
                for (let i = 0; i + 1 < chars.length; i++) tokens.push(chars[i] + chars[i + 1])
              }
              return tokens
            }
          },
          searchOptions: {
            combineWith: 'AND',
            fuzzy: false,
            prefix: true,
            tokenize: (text: string) => {
              const tokens: string[] = []
              for (const part of text.toLowerCase().split(/[\s\p{P}\p{S}]+/u)) {
                if (!part) continue
                if (/^[\x00-\x7f]+$/.test(part)) { tokens.push(part); continue }
                const chars = Array.from(part)
                if (chars.length === 1) { tokens.push(chars[0]); continue }
                for (let i = 0; i + 1 < chars.length; i++) tokens.push(chars[i] + chars[i + 1])
              }
              return tokens
            }
          }
        }
      }
    },
    footer: {
      message: '非官方粉丝作品，与 Activision、Capcom、Ubisoft 无关联。游戏名称与角色版权归各自所有者。',
      copyright: '资料截至 2026 年 10 月'
    }
  }
})
