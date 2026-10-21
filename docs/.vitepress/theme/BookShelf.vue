<script setup lang="ts">
import { withBase } from 'vitepress'

interface Book {
  key: string
  title: string
  sub: string
  en: string
  desc: string
  meta: string[]
  href: string
  internal: boolean
  status: string
  fresh: boolean
}

const books: Book[] = [
  {
    key: 'cod',
    title: '使命召唤',
    sub: '剧情全书',
    en: 'CALL OF DUTY',
    desc: '2003 年至 2026 年全系列战役逐任务讲解：二战、现代战争原三部曲、黑色行动、独立宇宙、2019 重启宇宙，加上僵尸模式的以太、混沌、暗以太三条故事线。附人物志、统一时间线和全作索引。',
    meta: ['七卷 + 附录 · 44 章', '约 37 万字', '两个宇宙人物对照', '僵尸独立成卷'],
    href: '/cod/',
    internal: true,
    status: '新版 · 深度长文',
    fresh: true
  },
  {
    key: 're',
    title: '生化危机',
    sub: '剧情全书',
    en: 'RESIDENT EVIL',
    desc: '从 1998 年阿克雷山的洋馆到 2026 年重返浣熊市：十部正传、两部《启示录》、外传与五部正史 CG 影视逐章讲解，附人物志、病毒谱系、组织档案、统一时间线和全作索引。',
    meta: ['八卷 + 附录 · 36 章', '约 36 万字', '病毒谱系与组织档案', 'CG 影视独立成卷'],
    href: '/re/',
    internal: true,
    status: '新版 · 深度长文',
    fresh: true
  },
  {
    key: 'ac',
    title: '刺客信条',
    sub: '剧情全书',
    en: "ASSASSIN'S CREED",
    desc: '2007 年至 2026 年全系列逐个记忆序列讲解：戴斯蒙德传奇、肯威家族、大革命与工业时代、神话三部曲、幻景与影，以及外传与《黑旗 Resynced》。现代线、伊述设定、人物志与两大组织史各自成卷。',
    meta: ['十卷 + 附录 · 43 章', '约 50 万字', '历史线 + 现代线', '伊述设定成卷'],
    href: '/ac/',
    internal: true,
    status: '新版 · 深度长文',
    fresh: true
  }
]
</script>

<template>
  <div class="shelf">
    <header class="shelf-head">
      <p class="shelf-kicker">GAME LORE BOOKS</p>
      <h1>游戏剧情书架</h1>
      <p class="shelf-lede">把一个系列的故事从头讲到尾。每本书都按故事线组织，可以当小说读，也可以当资料查。</p>
    </header>

    <div class="shelf-grid">
      <a
        v-for="b in books"
        :key="b.key"
        class="book"
        :class="['book--' + b.key, { 'book--old': !b.fresh }]"
        :href="withBase(b.href)"
        :target="b.internal ? undefined : '_self'"
      >
        <div class="cover" aria-hidden="true">
          <span class="cover-en">{{ b.en }}</span>
          <span class="cover-title">{{ b.title }}</span>
          <span class="cover-sub">{{ b.sub }}</span>
          <span class="cover-mark"></span>
        </div>
        <div class="book-body">
          <span class="book-status" :class="{ fresh: b.fresh }">{{ b.status }}</span>
          <h2>{{ b.title }}<small>{{ b.sub }}</small></h2>
          <p>{{ b.desc }}</p>
          <ul>
            <li v-for="m in b.meta" :key="m">{{ m }}</li>
          </ul>
          <span class="book-go">{{ b.fresh ? '开始阅读' : '打开旧版' }} →</span>
        </div>
      </a>
    </div>

    <p class="shelf-note">非官方粉丝作品，资料截至 2026 年 10 月。</p>
  </div>
</template>

<style scoped>
.shelf {
  max-width: 1120px;
  margin: 0 auto;
  padding: 56px 24px 72px;
}
.shelf-head { margin-bottom: 40px; }
.shelf-kicker {
  margin: 0 0 10px;
  font-size: 12px;
  letter-spacing: 0.32em;
  color: var(--vp-c-text-3);
}
.shelf-head h1 {
  margin: 0;
  font-size: clamp(32px, 6vw, 52px);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: 0.04em;
}
.shelf-lede {
  max-width: 620px;
  margin: 14px 0 0;
  font-size: 16px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}
.shelf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 22px;
}
.book {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  color: inherit;
  text-decoration: none !important;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.book:hover {
  transform: translateY(-3px);
  border-color: var(--book-accent);
  box-shadow: 0 14px 34px -18px rgba(0, 0, 0, 0.55);
}
.book:focus-visible { outline: 2px solid var(--book-accent); outline-offset: 3px; }

/* 封面：纯 CSS，不用图片 */
.cover {
  position: relative;
  height: 200px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #f3efe6;
  background: var(--book-cover);
  overflow: hidden;
}
.cover::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 10px;
  background: rgba(0, 0, 0, 0.28);
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.08);
}
.cover-en {
  position: absolute;
  top: 20px;
  left: 26px;
  font-size: 11px;
  letter-spacing: 0.34em;
  opacity: 0.72;
}
.cover-title {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.1;
}
.cover-sub {
  margin-top: 6px;
  font-size: 14px;
  letter-spacing: 0.3em;
  opacity: 0.85;
}
.cover-mark {
  position: absolute;
  right: -30px;
  top: -30px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 18px solid rgba(255, 255, 255, 0.07);
}
.book--cod {
  --book-accent: #c9a24a;
  --book-cover:
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.025) 0 2px, transparent 2px 9px),
    linear-gradient(160deg, #4b4a2f 0%, #2a2b1d 55%, #15160f 100%);
}
.book--cod .cover-mark { border-color: rgba(201, 162, 74, 0.22); }
.book--re {
  --book-accent: #c8102e;
  --book-cover: linear-gradient(160deg, #5a0b16 0%, #2b0509 60%, #120204 100%);
}
.book--ac {
  --book-accent: #e0b354;
  --book-cover: linear-gradient(160deg, #3a3f4a 0%, #1d2027 60%, #0d0f13 100%);
}

.book-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 18px 22px 22px;
}
.book-status {
  align-self: flex-start;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.book-status.fresh {
  border-color: var(--book-accent);
  color: var(--book-accent);
}
.book-body h2 {
  margin: 12px 0 6px;
  padding: 0;
  border: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.book-body h2 small {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.book-body p {
  margin: 0;
  font-size: 14px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}
.book-body ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}
.book-body li {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}
.book-go {
  margin-top: auto;
  padding-top: 16px;
  font-weight: 600;
  font-size: 14px;
  color: var(--book-accent);
}
.book--old .cover { filter: saturate(0.8); }
.shelf-note {
  margin-top: 36px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--vp-c-text-3);
}
@media (max-width: 640px) {
  .shelf { padding: 36px 16px 56px; }
  .shelf-grid { grid-template-columns: 1fr; }
  .cover { height: 168px; }
}
</style>
