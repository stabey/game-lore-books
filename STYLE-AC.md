# 写作规范 · 刺客信条卷补充

这份文档是 [STYLE.md](./STYLE.md) 的补充，只适用于 `docs/ac/`。动笔前请先完整读 STYLE.md（口吻、准确性、存疑框、排版约定全部照旧），再读这一份。两份冲突时，以这一份为准。

## 1. 这本书和《使命召唤》有什么不同

- 《刺客信条》有**两条时间线**：历史线（玩家在 Animus 里重温祖先的记忆）和现代线（使用 Animus 的人和刺客、圣殿骑士在当代的斗争）。每部作品的章节都要把两条线都讲清楚；现代线很薄的作品（例如《幻景》《影》）也要交代「这一作的现代线是什么、为什么几乎没有」。
- 系列是**历史虚构**：大量真实人物和事件被改写进刺客与圣殿骑士的暗战。写到关键处要分清「历史上……」和「游戏里……」，简短一句即可，不要写成历史论文。
- 伊述（先行者）与伊甸碎片是贯穿全系列的设定。每章都要有「伊述与伊甸碎片」一节，说明本作出现了哪些先行者遗物、讯息、神殿，以及它们和全系列伊述主线的关系。
- 老作品（初代到《枭雄》）按**记忆序列**（Sequence）组织；RPG 作品（《起源》起）按**主线故事弧**或**地区篇章**组织。都要逐段讲清楚：谁、在哪、为什么、发生了什么、结果如何。

## 2. 章节模板（正传与外传通用）

```md
# 刺客信条II（2009）

> 一句话概括：……（1–3 句）

| 项目 | 内容 |
| --- | --- |
| 英文名 | Assassin's Creed II |
| 发售 | 2009 年 11 月 17 日（北美主机版；PC 版 2010 年 3 月） |
| 平台 | …… |
| 开发 | Ubisoft Montreal |
| 历史年代 | 1476–1499 年 |
| 主要地点 | 佛罗伦萨、托斯卡纳、弗利、威尼斯、罗马 |
| 可操控角色 | 艾吉奥·奥迪托雷（历史线）；戴斯蒙德·迈尔斯（现代线） |
| 现代线 | 2012 年，刺客藏身处与 Animus 2.0 |
| 所属故事线 | 戴斯蒙德传奇 · 艾吉奥三部曲之一 |

## 本章要点
（4–6 条，读者 1 分钟看完能知道这作讲了什么）

## 时代背景
（真实历史的局面 + 系列设定里此时刺客与圣殿骑士的态势）

## 登场阵营

## 剧情详解
### 记忆序列 1：……（RPG 作品改为「第一幕：……」或「埃及篇：……」）
#### 记忆名（English）
（逐记忆叙述；重要的多写，过渡性的合并。支线只写影响主线理解或塑造人物的那些）

## 现代线
（这一作的现代剧情：谁在用 Animus、为什么、发生了什么；没有就说明）

## 结局

## 主要人物
（`::: info 人物档案 · 名字` 框 + 叙述。身份、动机、本作经历、结局、在系列中的后续）

## 伊述与伊甸碎片

## 细节、彩蛋与幕后

## 与系列其他作品的连接

## 资料来源

## 译名补充
```

DLC 章、外传章、设定章、人物章可以调整结构，但「一句话概括 / 本章要点 / 主要正文 / 连接 / 资料来源」必须有；作品章必须有信息表。

## 3. 篇幅与深度

- 正传主线章：约 1.2–1.6 万汉字（文件约 35–50 KB）。DLC、外传、设定章：约 0.6–1 万汉字。人物志、组织史：可以更长。
- 宁可把剧情讲透，也不要堆砌数据。每个重要人物都要有动机和弧光。
- 参考 `docs/cod/ww2/waw.md`、`docs/cod/people/mw.md` 的深度和口吻。

## 4. 资料来源

- 首选：英文维基百科、Access the Animus 维基（assassinscreedwiki.accesstheanimus.com）、Assassin's Creed Wiki（assassinscreed.fandom.com，目前常返回 HTTP 402 打不开，打不开就别再试）、育碧官方新闻（news.ubisoft.com）、PlayStation Blog / Xbox Wire、主流游戏媒体（IGN、GameSpot、Polygon、Eurogamer、PC Gamer、GamesRadar、Game Rant 等）。
- 中文社区资料（萌娘百科、游民星空、3DM、机核）只用来核对译名，不作为剧情事实的唯一来源。
- 资料截至 **2026 年 10 月**。2025 年之后的内容（《影》及其 DLC 与终章更新、《幻景》DLC「记忆之谷」、《黑旗 Resynced》、Hexe / Jade / Invictus、Netflix 剧集等）**必须联网核实**；只来自泄露、内部人士或玩家推测的内容一律放进「存疑」框。
- 发起网络请求时不要设置任何自定义请求头，不要在 URL 或请求里放入任何个人信息。

## 5. 译名表（统一使用，写作者不要自行改换）

首次出现写「中文（English）」，之后只用中文。表外的名字用中文社区最通行的译法，并在章末「译名补充」列出。

### 设定与术语
| English | 中文 |
| --- | --- |
| Assassin Brotherhood / Assassins | 刺客兄弟会 / 刺客 |
| The Hidden Ones | 无形者 |
| Templar Order / Templars | 圣殿骑士团 / 圣殿骑士 |
| Order of the Ancients | 上古维序者 |
| Cult of Kosmos | 秩序神教 |
| Abstergo Industries | 阿布斯泰戈工业（Abstergo Industries） |
| Abstergo Entertainment | 阿布斯泰戈娱乐 |
| Animus | Animus（不译；首次可写「Animus 记忆回溯装置」） |
| Animus Hub | Animus Hub（不译） |
| Helix | Helix（不译） |
| Isu / Those Who Came Before | 伊述 / 先行者 |
| Pieces of Eden | 伊甸碎片 |
| Apple of Eden | 伊甸苹果 |
| Staff of Eden / Sword of Eden / Shroud of Eden | 伊甸权杖 / 伊甸之剑 / 伊甸裹尸布 |
| Staff of Hermes Trismegistus | 赫耳墨斯权杖 |
| Spear of Leonidas | 列奥尼达之矛 |
| Precursor Box | 先驱者之盒 |
| Crystal Skull | 水晶头骨 |
| Grand Temple | 大神殿 |
| Toba Catastrophe | 托巴灾难 |
| Sage | 贤者 |
| Bleeding Effect | 渗透效应 |
| Leap of Faith | 信仰之跃 |
| Hidden Blade | 袖剑 |
| Eagle Vision / Eagle Sense | 鹰眼视觉 / 鹰之感知 |
| Mentor | 导师 |
| Sequence / Memory | 记忆序列 / 记忆 |
| Desynchronization | 失去同步 |
| The Creed: "Nothing is true, everything is permitted." | 信条：「万物皆虚，万事皆允。」 |
| Initiates | 启蒙者（Initiates） |
| Instruments of the First Will | 第一意志之器 |

### 现代线
| English | 中文 |
| --- | --- |
| Desmond Miles | 戴斯蒙德·迈尔斯 |
| Lucy Stillman | 露西·斯蒂尔曼 |
| Shaun Hastings | 肖恩·黑斯廷斯 |
| Rebecca Crane | 丽贝卡·克兰 |
| William Miles | 威廉·迈尔斯 |
| Warren Vidic | 沃伦·维迪克 |
| Clay Kaczmarek（Subject 16） | 克莱·卡兹马雷克（16 号实验对象） |
| Daniel Cross | 丹尼尔·克罗斯 |
| Alan Rikkin | 艾伦·里金 |
| Juhani Otso Berg | 尤哈尼·奥索·伯格 |
| Violet da Costa | 维奥莱特·达·科斯塔 |
| Álvaro Gramática | 阿尔瓦罗·格拉马蒂卡 |
| Layla Hassan | 蕾拉·哈桑 |
| Victoria Bibeau | 维多利亚·比博 |
| Deanna Geary | 迪安娜·吉尔里 |
| Kiyoshi Takakura | 高仓清 |
| Galina Voronina | 加琳娜·沃罗尼娜 |
| Charlotte de la Cruz | 夏洛特·德·拉·克鲁兹 |
| Callum Lynch（电影） | 卡勒姆·林奇 |

### 伊述
| English | 中文 |
| --- | --- |
| Juno | 朱诺 |
| Minerva | 密涅瓦 |
| Jupiter | 朱庇特 |
| Tinia | 提尼亚 |
| Aita | 艾塔 |
| Aletheia | 阿莱西娅 |
| Consus | 康苏斯 |
| Odin / Loki / Tyr / Thor（《英灵殿》中的伊述） | 奥丁 / 洛基 / 提尔 / 托尔 |
| Adam / Eve | 亚当 / 夏娃 |

### 历史线主角
| English | 中文 |
| --- | --- |
| Altaïr Ibn-La'Ahad | 阿泰尔·伊本-拉阿哈德 |
| Ezio Auditore da Firenze | 艾吉奥·奥迪托雷·达·佛罗伦萨 |
| Ratonhnhaké:ton / Connor | 拉顿哈给顿 / 康纳 |
| Haytham Kenway | 海尔森·肯威 |
| Edward Kenway | 爱德华·肯威 |
| Adéwalé | 阿德瓦勒 |
| Aveline de Grandpré | 艾芙琳·德·格兰普雷 |
| Shay Patrick Cormac | 谢伊·帕特里克·寇马克 |
| Arno Dorian | 亚诺·多里安 |
| Jacob Frye / Evie Frye | 雅各布·弗莱 / 伊薇·弗莱 |
| Bayek of Siwa | 锡瓦的巴耶克 |
| Aya / Amunet | 阿雅 / 阿穆奈特 |
| Kassandra / Alexios | 卡珊德拉 / 阿历克西欧斯 |
| Eivor Varinsdottir / Varinsson | 艾沃尔 |
| Basim Ibn Ishaq | 巴辛·伊本·伊斯哈格 |
| Fujibayashi Naoe | 藤林奈绪江（奈绪江） |
| Yasuke | 弥助 |
| Shao Jun | 邵君 |
| Arbaaz Mir | 阿尔巴兹·米尔 |
| Nikolai Orelov | 尼古拉·奥雷洛夫 |
| Darius | 大流士 |

### 历史线配角与反派（常用）
| English | 中文 |
| --- | --- |
| Al Mualim | 阿尔·穆阿林 |
| Malik Al-Sayf | 马利克·阿尔-赛义夫 |
| Robert de Sablé | 罗伯特·德·萨布雷 |
| Maria Thorpe | 玛丽亚·索普 |
| Masyaf | 马西亚夫 |
| Giovanni / Federico / Petruccio / Claudia / Maria Auditore | 乔瓦尼 / 费德里科 / 彼得鲁乔 / 克劳迪娅 / 玛丽亚·奥迪托雷 |
| Mario Auditore | 马里奥·奥迪托雷 |
| Monteriggioni | 蒙特里吉奥尼 |
| Leonardo da Vinci | 列奥纳多·达·芬奇 |
| Niccolò Machiavelli | 尼科洛·马基雅维利 |
| Caterina Sforza | 卡特琳娜·斯福尔扎 |
| Rodrigo Borgia / Cesare Borgia / Lucrezia Borgia | 罗德里戈·波吉亚 / 切萨雷·波吉亚 / 卢克雷齐娅·波吉亚 |
| Sofia Sartor | 索菲亚·萨尔托 |
| Yusuf Tazim | 尤素福·塔济姆 |
| Achilles Davenport | 阿基里斯·达文波特 |
| Charles Lee | 查尔斯·李 |
| Ziio / Kaniehtí:io | 姬欧（卡妮蒂欧） |
| Edward Thatch（Blackbeard） | 爱德华·萨奇（黑胡子） |
| Mary Read（James Kidd） | 玛丽·里德（詹姆斯·基德） |
| Bartholomew Roberts | 巴塞洛缪·罗伯茨 |
| Laureano de Torres y Ayala | 劳雷亚诺·德·托雷斯 |
| Jackdaw / Morrigan | 寒鸦号 / 莫瑞根号 |
| Élise de la Serre | 艾莉斯·德·拉·塞尔 |
| François-Thomas Germain | 弗朗索瓦-托马·热尔曼 |
| Crawford Starrick | 克劳福德·斯塔瑞克 |
| Flavius Metellus | 弗拉维乌斯·梅特卢斯 |
| Deimos | 得摩斯 |
| Myrrine | 米瑞恩 |
| Pythagoras | 毕达哥拉斯 |
| Aspasia | 阿斯帕西娅 |
| Sigurd Styrbjornsson | 西格德 |
| Ivarr the Boneless | 无骨者伊瓦尔 |
| Alfred the Great | 阿尔弗雷德大帝 |
| Roshan | 罗珊 |
| Oda Nobunaga / Akechi Mitsuhide / Tokugawa Ieyasu | 织田信长 / 明智光秀 / 德川家康 |
| Shinbakufu | 神幕府 |

### 作品名（易混的几部）
| English | 中文 |
| --- | --- |
| Assassin's Creed: Bloodlines（PSP，2009） | 《血统》 |
| Assassin's Creed: Lineage（真人短片，2009） | 《世系》 |
| Assassin's Creed: Ascendance（动画短片，2010） | 《优势》 |
| Assassin's Creed: Embers（动画短片，2011） | 《余烬》 |
| Altaïr's Chronicles / Discovery | 《阿泰尔编年史》 / 《发现》 |
| The Tyranny of King Washington | 《华盛顿暴政》 |

## 6. 全书文件清单（冻结）

站内链接**只能**指向下面这些文件，用相对路径并带 `.md` 后缀（例如在 `docs/ac/desmond/ac2.md` 里写 `[《兄弟会》](./brotherhood.md)`、`[伊甸碎片全录](../isu/pieces-of-eden.md)`）。不在清单里的路径会导致构建失败。可以链接到章内小节（`../isu/sages.md#xxx`），但锚点难以预测，尽量只链接到整章。

| 路径（docs/ac/ 下） | 章节 |
| --- | --- |
| intro/preface.md | 前言：这本书怎么读 |
| intro/overview.md | 系列总览：两条时间线与一场万年战争 |
| desmond/ac1.md | 刺客信条（2007） |
| desmond/ac2.md | 刺客信条II（2009） |
| desmond/brotherhood.md | 刺客信条：兄弟会（2010） |
| desmond/revelations.md | 刺客信条：启示录（2011，含短片《余烬》） |
| desmond/ac3.md | 刺客信条III（2012，含 DLC《华盛顿暴政》、戴斯蒙德的结局） |
| kenway/black-flag.md | 刺客信条4：黑旗（2013） |
| kenway/resynced.md | 黑旗 Resynced（2026 重制版） |
| kenway/freedom-cry-liberation.md | 自由呐喊（2013）& 解放（2012） |
| kenway/rogue.md | 刺客信条：叛变（2014） |
| revolution/unity.md | 刺客信条：大革命（2014，含《亡者之王》） |
| revolution/syndicate.md | 刺客信条：枭雄（2015，含《开膛手杰克》《最后的大君》） |
| myth/origins.md | 刺客信条：起源（2017） |
| myth/origins-dlc.md | 起源 DLC：无形者 & 法老的诅咒 |
| myth/odyssey.md | 刺客信条：奥德赛（2018） |
| myth/odyssey-dlc.md | 奥德赛 DLC：第一把袖剑的传承 & 亚特兰蒂斯的命运 |
| myth/valhalla.md | 刺客信条：英灵殿（2020） |
| myth/valhalla-dlc.md | 英灵殿 DLC：德鲁伊之怒、巴黎围城、诸神黄昏与后续更新 |
| recent/mirage.md | 刺客信条：幻景（2023，含 DLC「记忆之谷」） |
| recent/shadows.md | 刺客信条：影（2025） |
| recent/shadows-dlc.md | 影：淡路之爪与终章更新（2025–2026） |
| spinoffs/handheld.md | 掌机三作：阿泰尔编年史、血统、发现 |
| spinoffs/chronicles.md | 编年史三部曲：中国、印度、俄罗斯 |
| spinoffs/beyond.md | 手游、VR 与在研项目（海盗、身份、叛乱、Nexus VR、Jade、Hexe、Invictus） |
| spinoffs/transmedia.md | 电影、剧集、小说与漫画 |
| modern/desmond-era.md | 现代线（一）戴斯蒙德时代（至 2012） |
| modern/abstergo-ent.md | 现代线（二）阿布斯泰戈娱乐时代（2013–2016） |
| modern/layla.md | 现代线（三）蕾拉·哈桑（2017–2020） |
| modern/hub.md | 现代线（四）巴辛、Animus Hub 与之后（2020–2026） |
| isu/civilization.md | 伊述文明与托巴灾难 |
| isu/pieces-of-eden.md | 伊甸碎片全录 |
| isu/juno-minerva.md | 朱诺、密涅瓦与伊述诸神 |
| isu/sages.md | 贤者与转世 |
| people/assassins.md | 人物志 · 刺客主角群像 |
| people/templars.md | 人物志 · 圣殿骑士与反派 |
| people/allies.md | 人物志 · 战友、家族与历史名人 |
| orders/assassins.md | 组织史 · 刺客：从无形者到兄弟会 |
| orders/templars.md | 组织史 · 圣殿骑士：从维序者到阿布斯泰戈 |
| appendix/timeline.md | 附录 A · 统一时间线 |
| appendix/release.md | 附录 B · 全作发售索引 |
| appendix/glossary.md | 附录 C · 术语与译名对照 |
| appendix/uncertain.md | 附录 D · 存疑汇总（脚本生成，不要手写） |

## 7. 交付要求（写作代理）

- 只写分配给你的文件。每个文件现在是一个占位稿：先用 Read 读一下，再用 Write 整篇写入。**写完一章、确认文件已保存，再开始下一章**。
- 不要改动其他文件、配置或目录，不要运行构建，不要提交 git。
- 写完自查：只有一个 `#`；信息表完整；`:::` 成对闭合；存疑框标题恰好是 `::: warning 存疑`；站内链接都在上面的清单里；有「资料来源」（3–10 条实际用到的链接）和「译名补充」。
- 最后回报：写了哪些文件、各约多少字、主要存疑点、表外新增了哪些译名。
