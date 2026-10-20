# 游戏剧情书架 · game-lore-books

中文游戏剧情电子书合集，一个入口进入三本书：

| 书 | 状态 | 路径 |
| --- | --- | --- |
| 使命召唤剧情全书 | 新版：章节式深度长文（七卷 + 附录） | `docs/cod/` |
| 生化危机剧情全书 | 新版：章节式深度长文（八卷 + 附录） | `docs/re/` |
| 刺客信条 历史年代图鉴 | 旧版互动图鉴，原样迁入，待按新格式重写 | `docs/public/ac/` |

站点用 [VitePress](https://vitepress.dev/) 构建，推送到 `main` 后由 GitHub Actions 自动部署到 GitHub Pages。

## 本地预览

```bash
npm install
npm run dev
```

打开终端里显示的地址（默认带 `/game-lore-books/` 前缀）。

## 目录结构

```
docs/
  index.md                书架首页（BookShelf 组件）
  cod/                    使命召唤
    index.md              书首页（BookHome 组件，目录来自 cod-toc.ts）
    intro/ ww2/ mw/ bo/ future/ mwr/ zombies/ people/ appendix/
  re/                     生化危机
    index.md              书首页（ReHome 组件，目录来自 re-toc.ts）
    intro/ raccoon/ umbrella/ bsaa/ spinoff/ modern/ film/ people/ lore/ appendix/
  public/ac/              旧版刺客信条，静态文件原样发布
  .vitepress/
    config.mts            站点配置（导航、搜索、中文分词）
    cod-toc.ts            使命召唤目录：侧边栏与书首页共用
    re-toc.ts             生化危机目录：侧边栏与书首页共用
    theme/                书架、书首页组件与阅读排版样式
scripts/gen-uncertain.mjs 构建前扫描全书「存疑」框，生成附录 D
STYLE.md                  写作规范、章节模板与统一译名表
```

## 加一章

1. 按 `STYLE.md` 的模板写 Markdown，放进对应卷的目录。
2. 在 `docs/.vitepress/cod-toc.ts` 里加一行目录项。
3. 官方没说清楚的内容用 `::: warning 存疑` 框标出，构建时会自动汇总进附录 D。

## 声明

非官方粉丝作品，与 Activision、Capcom、Ubisoft 无关联。游戏名称、角色与相关素材版权归各自所有者。
