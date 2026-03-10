// ===== 个人信息 =====
export const profile = {
  name: "吕默",
  title: "计算传播硕士",
  tagline: "AI 产品 · 新媒体运营 · 数据驱动增长",
  avatar: "/images/avatar.jpg",
  email: "oliver_work2001@163.com",
  phone: "19877130546",
  location: "北京市海淀区",
  wechatQR: "/images/wechat-qr.jpg",
  socials: [
    { label: "GitHub", url: "https://github.com/yourname", icon: "github" },
    { label: "知乎", url: "https://zhihu.com/people/yourname", icon: "zhihu" },
  ],
  skills: [
    "SPSS", "Excel（VLOOKUP/透视表）", "Vibe Coding",
    "Photoshop", "Premiere", "剪映",
    "ChatGPT", "Midjourney", "AIGC",
    "英语（听读写）",
  ],
};

// ===== 导航 =====
export const navItems = [
  { label: "首页", href: "#hero" },
  { label: "实习经历", href: "#experience" },
  { label: "项目经历", href: "#projects" },
  { label: "个人作品", href: "#portfolio" },
  { label: "获奖证书", href: "#awards" },
  { label: "联系我", href: "#contact" },
];

// ===== 教育背景 =====
export const education = [
  {
    school: "北京师范大学",
    degree: "硕士",
    major: "计算传播",
    period: "2025.09 - 至今",
    description: "主修：计算传播、数据挖掘、社会网络分析",
  },
  {
    school: "中央民族大学",
    degree: "本科",
    major: "广告学",
    period: "2021.09 - 2024.06",
    description: "主修：市场营销、广告策划与创意",
  },
];

// ===== 实习经历 =====
export const experience = [
  {
    company: "元空智能",
    position: "海外用户增长实习生（运营部）",
    period: "2026.01 - 2026.02",
    description: [
      "SEO 内容营销：针对海外市场进行「AI+产品」类核心关键词的挖掘与趋势调研，结合 AIGC 工具进行本地化创作，保持每日至少 2 篇高质量 SEO 长文的产出频率",
      "竞品深度调研：全面追踪并拆解海外市场主流同类 AI Agent 产品，从功能矩阵、交互体验及商业化定价等维度进行对比分析，定期输出深度竞品分析报告",
      "商业案例包装：深度结合产品核心功能与海外应用场景，主导制作标准化前端落地案例，独立负责前期数据清洗与处理、业务逻辑梳理及最终商业化 PPT 的视觉排版设计",
    ],
  },
  {
    company: "北大青鸟",
    position: "新媒体运营实习生（AI项目组）",
    period: "2024.12 - 2025.02",
    description: [
      "AI 内容生产：利用 ChatGPT、Midjourney 等工具辅助生成图文与短视频内容，提升内容产出效率",
      "选题策划：结合行业热点与用户画像，策划系列选题方向，参与内容日历制定",
      "数据复盘：跟踪各平台内容数据表现，输出周报与优化建议，助力运营策略迭代",
    ],
  },
  {
    company: "百度",
    position: "内容运营实习生（信息流业务部）",
    period: "2023.01 - 2023.03",
    description: [
      "内容风控：参与信息流内容审核与风控策略优化，处理日均万级内容样本",
      "竞品调研：对标主流信息流产品，输出竞品分析报告，为产品迭代提供依据",
      "产品迭代：协助产品经理梳理需求文档，跟进内容分发策略的 A/B 测试与效果评估",
    ],
  },
];

// ===== 项目经历 =====
export const projects = [
  {
    title: "大学生广告艺术大赛",
    slug: "daguangsai",
    tags: ["全案策划", "创意执行", "省部级三等奖"],
    description:
      "讯飞星火命题参赛作品——通过 SWOT 分析洞察品牌需求，以日常生活场景切入，将 AI 以手影的创意形式趣味化地植入受众心智。",
    image: "/images/project-daguangsai.jpg",
  },
  {
    title: "大学生创新创业大赛",
    slug: "dachuang",
    tags: ["数据分析", "学术产出", "国家级结项"],
    description:
      "以大爱清尘公益组织为研究对象，抓取其微信公众号全量数据并结合线下访谈，运用 SPSS 分析叙事策略对公众认知的影响。",
    image: "/images/project-dachuang.jpg",
  },
  {
    title: "TGA 游戏大奖：主角形象分析",
    slug: "tga",
    tags: ["内容分析", "SPSS", "编码研究"],
    description:
      "抓取历年 TGA 获奖游戏主角形象数据，设计编码表进行系统编码，通过 SPSS 量化分析主角性别、行为特征与获奖趋势的关联。",
    image: "/images/project-tga.jpg",
  },
];

// ===== 获奖证书 =====
export const awards = [
  {
    title: "大学生广告艺术大赛 省部级三等奖",
    date: "",
    issuer: "全案策划与执行",
    image: "/images/award1.jpg",
  },
  {
    title: "大学生创新创业大赛 国家级结项",
    date: "",
    issuer: "核心研究员",
    image: "/images/award2.jpg",
  },
];

// ===== 作品集 =====
export type PortfolioCategory = "全部" | "产品开发" | "设计作品" | "视频作品" | "内容运营";
export const portfolioCategories: PortfolioCategory[] = [
  "全部",
  "产品开发",
  "设计作品",
  "视频作品",
  "内容运营",
];

export const portfolioItems: {
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  link?: string;
  demoUrl?: string;
  bilibiliId?: string;
}[] = [
  {
    title: "知愈 - 健康状态追踪 PWA",
    category: "产品开发",
    description: "个人健康数据记录与可视化分析应用，支持多维度健康指标追踪、趋势分析与数据导出。采用 PWA 技术，可离线使用并安装到桌面。",
    image: "/images/zhiyu-cover.jpg",
    demoUrl: "/portfolio/zhiyu",
  },
];
