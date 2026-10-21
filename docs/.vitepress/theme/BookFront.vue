<script setup lang="ts">
// 通用书首页：封面与导语来自页面 frontmatter 的 `book` 字段，目录来自 themeConfig.sidebar[book.prefix]。
// 新书只要写一个 index.md，不用改这个组件。
import { computed, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { lastChapter, type LastChapter } from './progress'

interface Link { text: string; link: string; primary?: boolean }
interface Way { title: string; text: string; link?: string; linkText?: string; after?: string }
interface BookFrontmatter {
  key: string
  prefix: string
  cover: { en: string; title: string; sub: string; years: string; background: string; accent: string }
  kicker: string
  heading: string
  lede: string
  spoiler: string
  actions: Link[]
  ways: Way[]
  blurbs: Record<string, string>
}
interface SidebarGroup { text: string; items: { text: string; link: string }[] }

const { frontmatter, theme } = useData()
const book = computed(() => frontmatter.value.book as BookFrontmatter)

const volumes = computed(() => {
  const groups = (theme.value.sidebar?.[book.value.prefix] ?? []) as SidebarGroup[]
  return groups.map((v) => ({ title: v.text, blurb: book.value.blurbs?.[v.text] ?? '', items: v.items }))
})

const coverStyle = computed(() => ({
  '--cover-bg': book.value.cover.background,
  '--cover-accent': book.value.cover.accent
}))

const last = ref<LastChapter | null>(null)
onMounted(() => {
  last.value = lastChapter(book.value.key)
})
</script>

<template>
  <div class="bf" :style="coverStyle">
    <section class="bf-hero">
      <div class="bf-cover" aria-hidden="true">
        <span class="en">{{ book.cover.en }}</span>
        <span class="t">{{ book.cover.title }}</span>
        <span class="s">{{ book.cover.sub }}</span>
        <span class="y">{{ book.cover.years }}</span>
      </div>
      <div class="bf-intro">
        <p class="kicker">{{ book.kicker }}</p>
        <h1>{{ book.heading }}</h1>
        <p class="lede">{{ book.lede }}</p>
        <p class="spoiler">{{ book.spoiler }}</p>
        <div class="actions">
          <a
            v-for="a in book.actions"
            :key="a.link"
            class="btn"
            :class="{ primary: a.primary }"
            :href="withBase(a.link)"
          >{{ a.text }}</a>
          <a v-if="last" class="btn ghost" :href="last.path">继续阅读：{{ last.title }}</a>
        </div>
      </div>
    </section>

    <section class="bf-ways">
      <div v-for="w in book.ways" :key="w.title" class="way">
        <h3>{{ w.title }}</h3>
        <p>
          {{ w.text }}<a v-if="w.link" :href="withBase(w.link)">{{ w.linkText }}</a>{{ w.after }}
        </p>
      </div>
    </section>

    <section class="bf-toc">
      <h2>目录</h2>
      <div class="vols">
        <article v-for="(v, i) in volumes" :key="v.title" class="vol">
          <header>
            <span class="num">{{ String(i).padStart(2, '0') }}</span>
            <h3>{{ v.title }}</h3>
          </header>
          <p v-if="v.blurb" class="blurb">{{ v.blurb }}</p>
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
.bf {
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}
.bf-hero {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 40px;
  align-items: center;
}
.bf-cover {
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: 6px 14px 14px 6px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #f3efe6;
  background: var(--cover-bg);
  box-shadow: 0 22px 40px -22px rgba(0, 0, 0, 0.7), inset 10px 0 0 rgba(0, 0, 0, 0.28);
  overflow: hidden;
}
.bf-cover::after {
  content: '';
  position: absolute;
  right: -40px;
  top: -40px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 20px solid color-mix(in srgb, var(--cover-accent) 22%, transparent);
}
.bf-cover .en { position: absolute; top: 22px; left: 30px; font-size: 11px; letter-spacing: 0.34em; opacity: 0.72; }
.bf-cover .t { font-size: 36px; font-weight: 800; letter-spacing: 0.14em; line-height: 1.1; padding-left: 6px; }
.bf-cover .s { margin-top: 8px; font-size: 15px; letter-spacing: 0.32em; opacity: 0.88; padding-left: 6px; }
.bf-cover .y { margin-top: 18px; font-size: 12px; letter-spacing: 0.2em; color: var(--cover-accent); padding-left: 6px; }

.kicker { margin: 0 0 8px; font-size: 13px; letter-spacing: 0.2em; color: var(--vp-c-text-3); }
.bf-intro h1 { margin: 0; font-size: clamp(30px, 5vw, 44px); line-height: 1.2; font-weight: 800; letter-spacing: 0.03em; }
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

.bf-ways {
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

.bf-toc { margin-top: 56px; }
.bf-toc > h2 { margin: 0 0 18px; font-size: 24px; font-weight: 700; border: 0; padding: 0; }
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
  .bf { padding: 28px 16px 56px; }
  .bf-hero { grid-template-columns: 1fr; gap: 24px; }
  .bf-cover { width: 180px; }
  .bf-cover .en { font-size: 10px; letter-spacing: 0.2em; right: 20px; }
  .bf-cover .t { font-size: 28px; letter-spacing: 0.08em; }
  .bf-ways { grid-template-columns: 1fr; }
  .vols { grid-template-columns: 1fr; }
}
</style>
