<script setup lang="ts">
// 生化危机书首页：结构同 BookHome.vue，目录来自 re-toc.ts
import { onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { reSidebar } from '../re-toc'
import { lastChapter, type LastChapter } from './progress'

const blurbs: Record<string, string> = {
  '导读': '先弄清楚：哪些作品算正史，重制版和原版怎么取舍，系列可以分成哪几条故事线。',
  '卷一 · 浣熊市（1998）': '1998 年夏秋，从阿克雷山的洋馆到整座城市被导弹抹去。系列的原点，也是此后近三十年反复回望的地方。',
  '卷二 · 伞公司的黄昏': '浣熊市之后，克莱尔追到洛克福特岛和南极，伞公司在丑闻和诉讼中一步步走向解体。',
  '卷三 · 反生化恐怖时代': '伞公司倒了，生化武器却流进了黑市。里昂救总统女儿，克里斯在非洲了结威斯克，2013 年的全球 C 病毒危机把所有人卷到一起。',
  '卷四 · 启示录与衍生作品': '夹在正传之间的两部《启示录》补上了 BSAA 和 TerraSave 的故事；其他衍生作品与非正史游戏在这里一并交代。',
  '卷五 · 新时代：7、村庄与安魂曲': '第一人称的温特斯一家与菌根的秘密，再到 2026 年格蕾丝和里昂重返浣熊市废墟。',
  '卷六 · CG 电影与影视': '五部正史 CG 影视补全了里昂与克里斯在正传之间的经历；真人电影与剧集是另一个世界，单独说明。',
  '卷七 · 人物志': '按人物而不是按作品来读：里昂、克里斯与克莱尔、吉尔、艾达、威斯克，以及他们身边的人。',
  '卷八 · 设定志': '伞公司从创立到覆灭的全过程，从始祖病毒到菌根的谱系，以及书里出现的每一个组织。',
  '附录': '统一剧情时间线、全作发售索引、译名对照，以及全书所有「存疑」标注的汇总。'
}

const volumes = reSidebar.map((v) => ({
  title: v.text,
  blurb: blurbs[v.text] ?? '',
  items: v.items
}))

const last = ref<LastChapter | null>(null)
onMounted(() => {
  last.value = lastChapter('re')
})
</script>

<template>
  <div class="bh">
    <section class="bh-hero">
      <div class="bh-cover" aria-hidden="true">
        <span class="en">RESIDENT EVIL</span>
        <span class="t">生化危机</span>
        <span class="s">剧情全书</span>
        <span class="y">1996 — 2026</span>
      </div>
      <div class="bh-intro">
        <p class="kicker">游戏剧情书架 · 第二册</p>
        <h1>生化危机剧情全书</h1>
        <p class="lede">
          从 1998 年阿克雷山的一座洋馆开始，到 2026 年重返浣熊市的废墟。十部正传、两部《启示录》、一批外传和五部正史 CG 影视，这本书按故事线把它们重新排好，逐章讲清楚每一场生化灾难的来龙去脉、每个人物为什么走到今天，以及伞公司留下的东西怎样一次次卷土重来。
        </p>
        <p class="spoiler">全书含完整剧透。资料截至 2026 年 10 月；官方没有说清楚或各方说法不一的地方都标了「存疑」。</p>
        <div class="actions">
          <a class="btn primary" :href="withBase('/re/intro/preface')">从导读开始</a>
          <a class="btn" :href="withBase('/re/intro/overview')">先看系列总览</a>
          <a v-if="last" class="btn ghost" :href="last.path">继续阅读：{{ last.title }}</a>
        </div>
      </div>
    </section>

    <section class="bh-ways">
      <div class="way">
        <h3>按故事线读</h3>
        <p>沿目录顺序，从浣熊市读到安魂曲。推荐第一次读这样走。</p>
      </div>
      <div class="way">
        <h3>按发售顺序读</h3>
        <p>想体验当年玩家的视角，看<a :href="withBase('/re/appendix/release')">全作发售索引</a>。</p>
      </div>
      <div class="way">
        <h3>只看某个人</h3>
        <p>从<a :href="withBase('/re/people/leon')">人物志</a>进入，每篇都链接到对应作品的章节。</p>
      </div>
    </section>

    <section class="bh-toc">
      <h2>目录</h2>
      <div class="vols">
        <article v-for="(v, i) in volumes" :key="v.title" class="vol">
          <header>
            <span class="num">{{ String(i).padStart(2, '0') }}</span>
            <h3>{{ v.title }}</h3>
          </header>
          <p class="blurb">{{ v.blurb }}</p>
          <ol>
            <li v-for="it in v.items" :key="it.link">
              <a :href="withBase(it.link)">{{ it.text }}</a>
            </li>
          </ol>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bh {
  --re-accent: #a3192b;
  --re-accent-2: #8a1222;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}
.dark .bh {
  --re-accent: #e0566a;
  --re-accent-2: #ec7383;
}
.bh-hero {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 40px;
  align-items: center;
}
.bh-cover {
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: 6px 14px 14px 6px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #f3efe6;
  background:
    radial-gradient(circle at 78% 22%, rgba(200, 16, 46, 0.35) 0, transparent 46%),
    linear-gradient(160deg, #5a0b16 0%, #2b0509 60%, #120204 100%);
  box-shadow: 0 22px 40px -22px rgba(0, 0, 0, 0.7), inset 10px 0 0 rgba(0, 0, 0, 0.28);
  overflow: hidden;
}
.bh-cover::after {
  content: '';
  position: absolute;
  right: -40px;
  top: -40px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 20px solid rgba(255, 255, 255, 0.07);
}
.bh-cover .en { position: absolute; top: 22px; left: 30px; font-size: 11px; letter-spacing: 0.34em; opacity: 0.72; }
.bh-cover .t { font-size: 36px; font-weight: 800; letter-spacing: 0.14em; line-height: 1.1; padding-left: 6px; }
.bh-cover .s { margin-top: 8px; font-size: 15px; letter-spacing: 0.32em; opacity: 0.88; padding-left: 6px; }
.bh-cover .y { margin-top: 18px; font-size: 12px; letter-spacing: 0.2em; color: #e8697a; padding-left: 6px; }

.kicker { margin: 0 0 8px; font-size: 13px; letter-spacing: 0.2em; color: var(--vp-c-text-3); }
.bh-intro h1 { margin: 0; font-size: clamp(30px, 5vw, 44px); line-height: 1.2; font-weight: 800; letter-spacing: 0.03em; }
.lede { margin: 16px 0 0; font-size: 16px; line-height: 1.9; color: var(--vp-c-text-1); max-width: 640px; }
.spoiler { margin: 12px 0 0; font-size: 13px; line-height: 1.7; color: var(--vp-c-text-2); max-width: 640px; }
.actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.btn {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none !important;
  transition: border-color 0.15s, background 0.15s;
}
.btn:hover { border-color: var(--re-accent); }
.btn.primary { background: var(--re-accent); border-color: var(--re-accent); color: #fff; }
.btn.primary:hover { background: var(--re-accent-2); border-color: var(--re-accent-2); }
.btn.ghost { border-style: dashed; color: var(--vp-c-text-2); max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.bh-ways {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 48px 0 0;
}
.way {
  padding: 16px 18px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.way h3 { margin: 0 0 4px; font-size: 15px; font-weight: 700; }
.way p { margin: 0; font-size: 13.5px; line-height: 1.7; color: var(--vp-c-text-2); }
.way a { color: var(--re-accent); }

.bh-toc { margin-top: 56px; }
.bh-toc > h2 { margin: 0 0 18px; font-size: 24px; font-weight: 700; border: 0; padding: 0; }
.vols { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
.vol {
  padding: 18px 20px 14px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}
.vol header { display: flex; align-items: baseline; gap: 10px; }
.vol .num { font-size: 12px; font-weight: 700; color: var(--re-accent); font-variant-numeric: tabular-nums; }
.vol h3 { margin: 0; font-size: 17px; font-weight: 700; }
.blurb { margin: 6px 0 10px; font-size: 13px; line-height: 1.7; color: var(--vp-c-text-2); }
.vol ol { margin: 0; padding: 0 0 0 1.4em; }
.vol li { font-size: 14px; line-height: 1.6; margin: 4px 0; color: var(--vp-c-text-3); }
.vol li a { color: var(--vp-c-text-1); text-decoration: none; }
.vol li a:hover { color: var(--re-accent); }

@media (max-width: 760px) {
  .bh { padding: 28px 16px 56px; }
  .bh-hero { grid-template-columns: 1fr; gap: 24px; }
  .bh-cover { width: 180px; }
  .bh-ways { grid-template-columns: 1fr; }
  .vols { grid-template-columns: 1fr; }
}
</style>
