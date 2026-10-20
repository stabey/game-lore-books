# 写作规范（所有书通用，COD 卷为基准）

这份文档是给写作者（包括 AI 写作代理）看的，不发布到网站。每章动笔前请完整读一遍。

## 1. 这本书要解决什么问题

读者反馈旧版图鉴的四个问题：**太浅（每作一张卡片）、不像书、人物讲得不够、手机阅读体验差**。所以：

- 写成**能从头读到尾的长文**，不是资料卡。用叙述性的中文段落讲故事，标题、表格、提示框只用来帮助导航，不要把正文写成要点清单。
- 战役要**逐幕、逐任务**讲清楚：谁、在哪、为什么、发生了什么、结果如何。读者没玩过也能看懂前因后果。
- 人物要有**动机和弧光**：他从哪来、想要什么、经历了什么、最后怎样。
- 每章开头先给一个「一句话概括 / 本章要点」，让赶时间的读者也能拿走主干。

## 2. 语言与口吻

- 简体中文，书面但不呆板，像一本认真写的游戏剧情读本。可以有评点（例如「这是系列第一次……」），但事实与评论要分清。
- **全剧透**。不需要剧透警告（书首页已统一说明）。
- 不要大段照搬维基或任何来源的原文，全部用自己的话重述。台词引用只引最有名的短句，每次不超过一两句，附英文原文与中文翻译，例如：
  > "Remember Reznov."（「记住雷兹诺夫。」）
- 年份、日期用阿拉伯数字；任务名首次出现写「中文译名（英文原名）」，如「全员潜伏（All Ghillied Up）」。
- 人名、组织名、术语首次出现写「中文（English）」，之后只用中文。统一使用下方「译名表」；表里没有的，用中文社区最通行的译法，并在章末「译名补充」小节列出，便于统一。

## 3. 准确性（最重要）

- 资料截至 **2026 年 10 月**。凡是 2025 年之后的内容（《黑色行动7》战役与僵尸、《现代战争4》、2025–2026 赛季剧情），**必须用网络检索核实**，不能凭记忆写。
- 首选来源：英文维基百科、Call of Duty Wiki（callofduty.fandom.com）、动视官方博客（callofduty.com/blog）、Xbox Wire / PlayStation Blog、主流游戏媒体（IGN、GameSpot、Polygon、Eurogamer、PC Gamer、Game Rant 等）。低质量 SEO 站只能作佐证。
- 官方未明说、粉丝推测、各来源说法不一、或你没能核实的内容，用「存疑」提示框标出，并说明分歧在哪：

  ```md
  ::: warning 存疑
  官方从未明确 X；Call of Duty Wiki 认为……，但游戏内文件显示……
  :::
  ```

  构建脚本会自动把全书所有「存疑」框汇总到附录，所以请保持标题**恰好是「存疑」**。
- 发售日期、开发商、任务数量、地图发布赛季这类硬事实要核对，不确定就写「约」并标存疑。
- 每章末尾必须有「资料来源」小节，列出实际用到的链接（3–10 条）。

## 4. 章节模板（战役章）

```md
# 使命召唤4：现代战争（2007）

> 一句话概括：……（1–3 句）

| 项目 | 内容 |
| --- | --- |
| 英文名 | Call of Duty 4: Modern Warfare |
| 发售 | 2007 年 11 月 5 日 |
| 开发 | Infinity Ward |
| 剧情年代 | 2011 年（另有 1996 年回忆关卡） |
| 主要地点 | …… |
| 可操控角色 | …… |
| 所属故事线 | 现代战争原三部曲 |

## 本章要点
（4–6 条，读者 1 分钟看完能知道这作讲了什么）

## 时代背景
## 登场阵营
## 剧情详解
### 第一幕：……
#### 任务名（English）
（逐任务叙述，重要任务可以多写，过场/过渡任务可以合并）
## 结局
## 主要人物
（每个重要角色一个小节或一个人物档案框：身份、动机、本作经历、结局、在系列中的后续）
## 细节、彩蛋与幕后
## 与系列其他作品的连接
## 资料来源
```

可以根据作品调整（例如《黑色行动2》多结局要单独一节讲分支条件；《战争世界》两条线并行要分开讲），但「一句话概括 / 信息表 / 本章要点 / 剧情详解 / 主要人物 / 连接 / 资料来源」必须有。

## 5. 章节模板（僵尸章）

- 开头同样是「一句话概括 + 本章要点」。
- 每张地图一个二级标题：`## 地图名（English Name）`，下面先放信息表（首发作品与时间、是否 DLC/赛季、地点与年代、可操控角色组），再写：
  - **地图上发生了什么**：剧情背景与主线彩蛋（Main Easter Egg）的过程和结局，讲清楚角色们为什么来、做成了什么、留下了什么伏笔。
  - **关键人物与实体**。
  - **故事线上的意义**（这张图在整条线里推进了什么）。
- 只讲剧情相关的部分，不写打法攻略、武器数据、彩蛋步骤细节（彩蛋只讲剧情含义）。
- 僵尸剧情大量来自无线电、录音、文件、彩蛋过场，写到这类「碎片化来源」时注明出处类型（例如「据地图中的无线电录音……」）。

## 6. 排版约定（VitePress Markdown）

- 每个文件只有一个一级标题 `#`。二级 `##` 是章内大节，会进入右侧目录。
- 提示框只用这几种：
  - `::: warning 存疑` —— 存疑内容（固定标题）
  - `::: tip 连接` —— 跨作品的联系、伏笔回收
  - `::: info 人物档案 · 名字` —— 人物小档案
  - `::: details 展开：……` —— 可折叠的补充（任务列表、长背景）
- 表格用于信息表、任务列表、地图列表；不要用表格写剧情。
- 不使用图片（第一版纯文字）。不使用 HTML 标签。
- 站内链接用相对路径，例如 `[《现代战争2》](../mw/mw2.md)`。

## 7. 译名表（统一使用）

### 现代战争原三部曲 / 重启宇宙
| English | 中文 |
| --- | --- |
| John Price | 约翰·普莱斯（普莱斯上尉） |
| John "Soap" MacTavish | 约翰·“肥皂”·麦克塔维什 |
| Simon "Ghost" Riley | 西蒙·“幽灵”·莱利 |
| Kyle "Gaz" Garrick（重启） / Gaz（原版） | 凯尔·“加兹”·加里克 / 加兹 |
| Gary "Roach" Sanderson | 加里·“小强”·桑德森 |
| Paul Jackson | 保罗·杰克逊 |
| Griggs | 格里格斯 |
| Yuri | 尤里 |
| Derek "Frost" Westbrook | 德里克·“弗罗斯特”·韦斯特布鲁克 |
| Sandman | 桑德曼 |
| Nikolai | 尼古拉 |
| Kamarov | 卡马洛夫 |
| Imran Zakhaev | 伊姆兰·扎卡耶夫 |
| Victor Zakhaev | 维克托·扎卡耶夫 |
| Khaled Al-Asad | 哈立德·阿萨德 |
| Vladimir Makarov | 弗拉基米尔·马卡洛夫 |
| General Shepherd | 谢菲尔德将军 |
| Ultranationalists | 极端民族主义派 |
| Task Force 141 | 141 特遣队 |
| Farah Karim | 法拉·卡里姆 |
| Hadir Karim | 哈迪尔·卡里姆 |
| Kate Laswell | 凯特·拉斯韦尔 |
| Alex（MW2019） | 亚历克斯 |
| Roman Barkov | 罗曼·巴尔科夫 |
| Omar "The Wolf" Sulaman | 奥马尔·“狼”·苏莱曼 |
| Al-Qatala | 卡塔拉（Al-Qatala） |
| Urzikstan | 乌兹克斯坦 |
| Phillip Graves | 菲利普·格雷夫斯 |
| Shadow Company | 暗影公司 |
| Alejandro Vargas | 亚历杭德罗·巴尔加斯 |
| Rodolfo Parra | 鲁道夫·帕拉 |
| Valeria Garza | 瓦莱里娅·加尔萨 |
| Las Almas Cartel | 拉斯阿尔马斯集团 |
| Konni Group | 康尼集团 |

### 黑色行动
| English | 中文 |
| --- | --- |
| Alex Mason | 亚历克斯·梅森 |
| David Mason | 大卫·梅森 |
| Frank Woods | 弗兰克·伍兹 |
| Jason Hudson | 杰森·哈德森 |
| Viktor Reznov | 维克托·雷兹诺夫 |
| Dimitri Petrenko | 德米特里·彼得连科 |
| Nikita Dragovich | 尼基塔·德拉戈维奇 |
| Lev Kravchenko | 列夫·克拉夫琴科 |
| Friedrich Steiner | 弗里德里希·施泰纳 |
| Joseph Bowman | 约瑟夫·鲍曼 |
| Grigori Weaver | 格里戈里·韦弗 |
| Nova 6 | 诺瓦 6 号 |
| Raul Menendez | 劳尔·梅内德斯 |
| Mike Harper | 迈克·哈珀 |
| Javier Salazar | 哈维尔·萨拉查 |
| Farid | 法里德 |
| Tommy Briggs | 汤米·布里格斯 |
| Chloe "Karma" Lynch | 克洛伊·“卡玛”·林奇 |
| Cordis Die | 科迪斯·迪（Cordis Die） |
| Russell Adler | 拉塞尔·阿德勒 |
| Perseus | 珀尔修斯 |
| Bell | 贝尔 |
| Helen Park | 海伦·帕克 |
| Lazar | 拉扎尔 |
| Sims | 西姆斯 |
| Troy Marshall | 特洛伊·马歇尔 |
| Case（全名以官方为准） | 凯斯 |
| "Sev"（全名以官方为准） | 塞芙 |
| Felix Neumann | 费利克斯·诺伊曼 |
| Jane Harrow | 简·哈罗 |
| Pantheon | 万神殿 |
| The Guild | 公会（The Guild） |
| Emma Kagan | 艾玛·卡根 |

### 其他宇宙
| English | 中文 |
| --- | --- |
| Logan Walker / Hesh Walker / Elias Walker | 洛根·沃克 / 赫什·沃克 / 伊莱亚斯·沃克 |
| Gabriel Rorke | 加布里埃尔·罗克 |
| Federation | 联邦（南美联邦） |
| Jack Mitchell | 杰克·米切尔 |
| Jonathan Irons | 乔纳森·艾恩斯 |
| Atlas | 阿特拉斯公司 |
| KVA | KVA |
| Nick Reyes | 尼克·雷耶斯 |
| Salen Kotch | 萨伦·科奇 |
| SDF (Settlement Defense Front) | 殖民地防卫阵线（SDF） |
| Arthur Kingsley | 亚瑟·金斯利 |
| Polina Petrova | 波琳娜·彼得罗娃 |
| Lucas Riggs | 卢卡斯·里格斯 |
| Wade Jackson | 韦德·杰克逊 |
| Ronald "Red" Daniels（《二战》） | 罗纳德·“红仔”·丹尼尔斯 |

### 僵尸
| English | 中文 |
| --- | --- |
| Edward Richtofen | 爱德华·里希托芬 |
| "Tank" Dempsey | “坦克”·邓普西 |
| Nikolai Belinski | 尼古拉·别林斯基 |
| Takeo Masaki | 正木武雄 |
| Samantha Maxis | 萨曼莎·马克西斯 |
| Ludvig Maxis | 路德维希·马克西斯 |
| Group 935 | 935 小组 |
| Element 115 | 115 元素 |
| Aether | 以太 |
| Dark Aether | 暗以太 |
| Primis / Ultimis | Primis（原初组）/ Ultimis（终末组） |
| Victis | Victis（遇难者组） |
| Apothicons | 阿波西康（Apothicons） |
| Keepers | 守护者（Keepers） |
| Shadowman | 影子人 |
| Monty | 蒙蒂 |
| Requiem | 安魂曲（Requiem） |
| Omega Group | 欧米伽组（Omega Group） |
| Dark Aether Entities | 暗以太实体 |
| Project Janus | 雅努斯计划（Project Janus） |

（表外译名：用最通行译法，首次出现附英文，并在章末「译名补充」列出。）

## 8. 交付要求（写作代理）

- 只写分配给你的文件路径，不要改动其他文件、配置或目录。
- 写完自查：标题层级、信息表完整、提示框语法闭合（`:::` 成对）、资料来源存在。
- 最后回报：写了哪些文件、各约多少字、哪些地方存疑、表外新增了哪些译名。
