// 生化危机书的目录：侧边栏和书首页共用这一份
export const reSidebar = [
  {
    text: '导读',
    items: [
      { text: '前言：这本书怎么读', link: '/re/intro/preface' },
      { text: '系列总览：正史、重制与几条故事线', link: '/re/intro/overview' }
    ]
  },
  {
    text: '卷一 · 浣熊市（1998）',
    collapsed: false,
    items: [
      { text: '生化危机0（2002）', link: '/re/raccoon/re0' },
      { text: '生化危机（1996 / 2002 重制）', link: '/re/raccoon/re1' },
      { text: '生化危机2（1998 / 2019 重制）', link: '/re/raccoon/re2' },
      { text: '生化危机3（1999 / 2020 重制）', link: '/re/raccoon/re3' },
      { text: '浣熊市群像：爆发', link: '/re/raccoon/outbreak' }
    ]
  },
  {
    text: '卷二 · 伞公司的黄昏',
    collapsed: false,
    items: [
      { text: '维罗妮卡（2000）', link: '/re/umbrella/cv' },
      { text: '伞公司的终结：生存者、死亡瞄准与两部编年史', link: '/re/umbrella/chronicles' }
    ]
  },
  {
    text: '卷三 · 反生化恐怖时代',
    collapsed: false,
    items: [
      { text: '生化危机4（2005 / 2023 重制）', link: '/re/bsaa/re4' },
      { text: '生化危机5（2009）', link: '/re/bsaa/re5' },
      { text: '生化危机6（2012）', link: '/re/bsaa/re6' }
    ]
  },
  {
    text: '卷四 · 启示录与衍生作品',
    collapsed: false,
    items: [
      { text: '启示录（2012）', link: '/re/spinoff/rev1' },
      { text: '启示录2（2015）', link: '/re/spinoff/rev2' },
      { text: '其他衍生作品与非正史游戏', link: '/re/spinoff/others' }
    ]
  },
  {
    text: '卷五 · 新时代：7、村庄与安魂曲',
    collapsed: false,
    items: [
      { text: '生化危机7（2017）', link: '/re/modern/re7' },
      { text: '生化危机：村庄（2021）', link: '/re/modern/re8' },
      { text: '生化危机：安魂曲（2026）', link: '/re/modern/re9' }
    ]
  },
  {
    text: '卷六 · CG 电影与影视',
    collapsed: false,
    items: [
      { text: '恶化（2008）与无尽黑暗（2021）', link: '/re/film/degeneration' },
      { text: '诅咒（2012）', link: '/re/film/damnation' },
      { text: '复仇（2017）与死亡岛（2023）', link: '/re/film/vendetta' },
      { text: '真人电影与剧集（非正史）', link: '/re/film/live-action' }
    ]
  },
  {
    text: '卷七 · 人物志',
    collapsed: false,
    items: [
      { text: '里昂·S·肯尼迪', link: '/re/people/leon' },
      { text: '雷德菲尔德兄妹：克里斯与克莱尔', link: '/re/people/redfield' },
      { text: '吉尔与 S.T.A.R.S.', link: '/re/people/stars' },
      { text: '艾达·王', link: '/re/people/ada' },
      { text: '威斯克家族与伞公司的人', link: '/re/people/wesker' },
      { text: '同伴与新一代', link: '/re/people/allies' },
      { text: '温特斯一家与菌根', link: '/re/people/winters' }
    ]
  },
  {
    text: '卷八 · 设定志',
    collapsed: false,
    items: [
      { text: '伞公司兴衰史', link: '/re/lore/umbrella' },
      { text: '病毒与寄生体谱系', link: '/re/lore/viruses' },
      { text: '组织与势力', link: '/re/lore/organizations' }
    ]
  },
  {
    text: '附录',
    collapsed: false,
    items: [
      { text: 'A · 统一剧情时间线', link: '/re/appendix/timeline' },
      { text: 'B · 全作发售索引', link: '/re/appendix/release' },
      { text: 'C · 术语与译名对照', link: '/re/appendix/glossary' },
      { text: 'D · 存疑汇总', link: '/re/appendix/uncertain' }
    ]
  }
]
