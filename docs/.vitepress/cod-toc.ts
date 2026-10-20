// 使命召唤书的目录：侧边栏和书首页共用这一份
export const codSidebar = [
  {
    text: '导读',
    items: [
      { text: '前言：这本书怎么读', link: '/cod/intro/preface' },
      { text: '系列总览：几个宇宙，怎么连起来', link: '/cod/intro/universes' }
    ]
  },
  {
    text: '卷一 · 二战篇',
    collapsed: false,
    items: [
      { text: '使命召唤 & 联合进攻（2003–04）', link: '/cod/ww2/cod1' },
      { text: '使命召唤2 & 大红一师（2005）', link: '/cod/ww2/cod2' },
      { text: '使命召唤3（2006）', link: '/cod/ww2/cod3' },
      { text: '战争世界（2008）', link: '/cod/ww2/waw' },
      { text: '二战（2017）', link: '/cod/ww2/wwii' },
      { text: '先锋（2021）', link: '/cod/ww2/vanguard' }
    ]
  },
  {
    text: '卷二 · 现代战争原三部曲',
    collapsed: false,
    items: [
      { text: '现代战争（2007）', link: '/cod/mw/cod4' },
      { text: '现代战争2（2009）', link: '/cod/mw/mw2' },
      { text: '现代战争3（2011）', link: '/cod/mw/mw3' },
      { text: '三部曲回顾与遗产', link: '/cod/mw/legacy' }
    ]
  },
  {
    text: '卷三 · 黑色行动',
    collapsed: false,
    items: [
      { text: '黑色行动（2010）', link: '/cod/bo/bo1' },
      { text: '黑色行动2（2012）', link: '/cod/bo/bo2' },
      { text: '黑色行动：冷战（2020）', link: '/cod/bo/bocw' },
      { text: '黑色行动6（2024）', link: '/cod/bo/bo6' },
      { text: '黑色行动7（2025）', link: '/cod/bo/bo7' },
      { text: '远未来支线：黑色行动3 & 4', link: '/cod/bo/bo3-bo4' }
    ]
  },
  {
    text: '卷四 · 独立宇宙',
    collapsed: false,
    items: [
      { text: '幽灵（2013）', link: '/cod/future/ghosts' },
      { text: '高级战争（2014）', link: '/cod/future/aw' },
      { text: '无限战争（2016）', link: '/cod/future/iw' }
    ]
  },
  {
    text: '卷五 · 现代战争重启宇宙',
    collapsed: false,
    items: [
      { text: '现代战争（2019）', link: '/cod/mwr/mw2019' },
      { text: '现代战争II（2022）', link: '/cod/mwr/mwii' },
      { text: '现代战争III（2023）', link: '/cod/mwr/mwiii' },
      { text: '战区与赛季剧情（2020–2026）', link: '/cod/mwr/seasons' },
      { text: '现代战争4（2026）', link: '/cod/mwr/mw4' }
    ]
  },
  {
    text: '卷六 · 僵尸篇',
    collapsed: false,
    items: [
      { text: '僵尸宇宙总览', link: '/cod/zombies/overview' },
      { text: '以太（一）起源：战争世界与黑色行动', link: '/cod/zombies/aether-1' },
      { text: '以太（二）维克提斯与起源', link: '/cod/zombies/aether-2' },
      { text: '以太（三）原初组的远征', link: '/cod/zombies/aether-3' },
      { text: '以太（四）终局', link: '/cod/zombies/aether-4' },
      { text: '混沌：BO4 的第二条线', link: '/cod/zombies/chaos' },
      { text: '暗以太（一）冷战', link: '/cod/zombies/dark-aether-1' },
      { text: '暗以太（二）先锋与 MWZ', link: '/cod/zombies/dark-aether-2' },
      { text: '暗以太（三）黑色行动6', link: '/cod/zombies/dark-aether-3' },
      { text: '暗以太（四）黑色行动7与终章', link: '/cod/zombies/dark-aether-4' },
      { text: '外传僵尸与合作剧情', link: '/cod/zombies/others' }
    ]
  },
  {
    text: '卷七 · 人物志',
    collapsed: false,
    items: [
      { text: '现代战争（两个宇宙对照）', link: '/cod/people/mw' },
      { text: '黑色行动', link: '/cod/people/bo' },
      { text: '二战与独立宇宙', link: '/cod/people/others' },
      { text: '僵尸', link: '/cod/people/zombies' }
    ]
  },
  {
    text: '附录',
    collapsed: false,
    items: [
      { text: 'A · 统一剧情时间线', link: '/cod/appendix/timeline' },
      { text: 'B · 全作发售索引', link: '/cod/appendix/release' },
      { text: 'C · 术语与译名对照', link: '/cod/appendix/glossary' },
      { text: 'D · 存疑汇总', link: '/cod/appendix/uncertain' }
    ]
  }
]
