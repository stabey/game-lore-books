<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { codSidebar } from '../cod-toc'
import { lastChapter, type LastChapter } from './progress'

const blurbs: Record<string, string> = {
  '导读': '先花五分钟弄清楚：系列分成哪几个宇宙，哪些作品是一条线，应该按什么顺序读。',
  '卷一 · 二战篇': '从 2003 年的初代到 2021 年的《先锋》。多数作品各自独立，唯有《战争世界》直接通向黑色行动。',
  '卷二 · 现代战争原三部曲': '普莱斯、肥皂、幽灵与马卡洛夫。一场核爆、一次背叛和一场世界大战。',
  '卷三 · 黑色行动': '梅森父子、伍兹、雷兹诺夫和梅内德斯，从冷战一路讲到 2035 年，再到远未来的分支。',
  '卷四 · 独立宇宙': '《幽灵》《高级战争》《无限战争》：各自成一个世界，没有续作，故事在本作内讲完。',
  '卷五 · 现代战争重启宇宙': '2019 年重新开始的 141 特遣队，经 MWII、MWIII 和赛季剧情，来到 2026 年的朝鲜半岛。',
  '卷六 · 僵尸篇': '以太、混沌、暗以太三条故事线，从纳粹地堡里的隐藏模式讲到暗以太的终章。',
  '卷七 · 人物志': '按人物而不是按作品来读。现代战争的同名人物在两个宇宙里并排对照。',
  '附录': '统一剧情时间线、全作发售索引、译名对照，以及全书所有「存疑」标注的汇总。'
}

const volumes = codSidebar.map((v) => ({
  title: v.text,
  blurb: blurbs[v.text] ?? '',
  items: v.items
}))

const last = ref<LastChapter | null>(null)
onMounted(() => {
  last.value = lastChapter('cod')
})
</script>

<template>
  <div class="bh">
    <section class="bh-hero">
      <div class="bh-cover" aria-hidden="true">
        <span class="en">CALL OF DUTY</span>
        <span class="t">使命召唤</span>
        <span class="s">剧情全书</span>
        <span class="y">2003 — 2026</span>
      </div>
      <div class="bh-intro">
        <p class="kicker">游戏剧情书架 · 第一册</p>
        <h1>使命召唤剧情全书</h1>
        <p class="lede">
          二十多年、二十余部战役、好几个时而独立时而交织的宇宙，外加一条越讲越大的僵尸故事线。这本书按故事线把它们重新排好，逐任务讲清楚发生了什么、人物为什么这样做，以及作品之间埋下和回收了哪些伏笔。
        </p>
        <p class="spoiler">全书含完整剧透。资料截至 2026 年 10 月；官方没有说清楚或各方说法不一的地方都标了「存疑」。</p>
        <div class="actions">
          <a class="btn primary" :href="withBase('/cod/intro/preface')">从导读开始</a>
          <a class="btn" :href="withBase('/cod/intro/universes')">先看系列总览</a>
          <a v-if="last" class="btn ghost" :href="last.path">继续阅读：{{ last.title }}</a>
        </div>
      </div>
    </section>

    <section class="bh-ways">
      <div class="way">
        <h3>按故事线读</h3>
        <p>沿目录顺序，一卷一条线。推荐第一次读这样走。</p>
      </div>
      <div class="way">
        <h3>按发售顺序读</h3>
        <p>想体验当年玩家的视角，看<a :href="withBase('/cod/appendix/release')">全作发售索引</a>。</p>
      </div>
      <div class="way">
        <h3>只看僵尸</h3>
        <p>僵尸篇可以独立阅读，从<a :href="withBase('/cod/zombies/overview')">僵尸宇宙总览</a>开始。</p>
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
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 24px 80px;
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
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.025) 0 2px, transparent 2px 9px),
    linear-gradient(160deg, #4b4a2f 0%, #2a2b1d 55%, #15160f 100%);
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
  border: 20px solid rgba(201, 162, 74, 0.22);
}
.bh-cover .en { position: absolute; top: 22px; left: 30px; font-size: 11px; letter-spacing: 0.34em; opacity: 0.72; }
.bh-cover .t { font-size: 36px; font-weight: 800; letter-spacing: 0.14em; line-height: 1.1; padding-left: 6px; }
.bh-cover .s { margin-top: 8px; font-size: 15px; letter-spacing: 0.32em; opacity: 0.88; padding-left: 6px; }
.bh-cover .y { margin-top: 18px; font-size: 12px; letter-spacing: 0.2em; color: #c9a24a; padding-left: 6px; }

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
.btn:hover { border-color: var(--vp-c-brand-1); }
.btn.primary { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); color: var(--vp-c-white); }
.btn.primary:hover { background: var(--vp-c-brand-2); }
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
.way a { color: var(--vp-c-brand-1); }

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
.vol .num { font-size: 12px; font-weight: 700; color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.vol h3 { margin: 0; font-size: 17px; font-weight: 700; }
.blurb { margin: 6px 0 10px; font-size: 13px; line-height: 1.7; color: var(--vp-c-text-2); }
.vol ol { margin: 0; padding: 0 0 0 1.4em; }
.vol li { font-size: 14px; line-height: 1.6; margin: 4px 0; color: var(--vp-c-text-3); }
.vol li a { color: var(--vp-c-text-1); text-decoration: none; }
.vol li a:hover { color: var(--vp-c-brand-1); }

@media (max-width: 760px) {
  .bh { padding: 28px 16px 56px; }
  .bh-hero { grid-template-columns: 1fr; gap: 24px; }
  .bh-cover { width: 180px; }
  .bh-ways { grid-template-columns: 1fr; }
  .vols { grid-template-columns: 1fr; }
}
</style>
