# HIV 预防与养生科普平台 - 项目规范

## 1. 项目概述

**项目名称**: HIV 预防与养生科普平台  
**项目类型**: 健康科普网站  
**核心功能**: 提供 HIV 预防、中西医治疗、养生长寿等健康知识的科普教育平台  
**目标用户**: 普通大众、患者及家属、健康教育工作者

## 2. 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

## 3. 页面结构

### 3.1 路由结构

```
/                    - 首页
/prevention          - HIV 预防知识
/western-medicine    - 西医治疗
/traditional-chinese  - 中医治疗
/health-longevity    - 养生长寿
/faq                 - 科普问答
```

### 3.2 页面说明

- **首页**: 平台概览、快速导航入口、核心科普内容展示
- **HIV 预防**: 传播途径、预防措施、检测知识、安全性行为指导
- **西医治疗**: 抗逆转录病毒治疗（ART）、药物种类、副作用管理、治疗指南
- **中医治疗**: 中医药在 HIV 治疗中的应用、调理方法、中药知识
- **养生长寿**: 营养饮食、运动健身、心理健康、生活方式指导
- **科普问答**: 常见问题解答、互动问答、健康自测

## 4. 设计规范

### 4.1 色彩方案

- **主色调**: 医疗健康主题的青绿色 (#0D9488) - 代表健康、希望
- **辅助色**: 温暖的橙黄色 (#F59E0B) - 代表关怀、活力
- **背景色**: 浅灰白色 (#F8FAFC) - 干净、专业
- **文字色**: 深灰黑色 (#1E293B) - 易读、清晰

### 4.2 字体规范

- **标题**: Inter, system-ui - 清晰、现代
- **正文**: Inter, system-ui - 易读、专业

### 4.3 组件使用

- 卡片式布局展示科普内容
- 手风琴组件展示 FAQ
- 标签页切换不同板块内容
- 进度条展示信息完整度

## 5. 开发规范

### 5.1 编码规范

- TypeScript strict 模式
- 禁止隐式 any
- 函数参数和返回值必须有明确类型
- 使用 shadcn/ui 组件库
- 响应式设计，适配移动端和桌面端

### 5.2 Hydration 防范

- 动态内容使用 'use client' + useEffect + useState
- 禁止在 JSX 中直接使用 Date.now()、Math.random() 等

### 5.3 SEO 优化

- 使用 Next.js Metadata API
- 每页设置独立的 title 和 description
- 使用语义化 HTML 标签

## 6. 目录结构

```
src/
├── app/
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式
│   ├── prevention/         # HIV 预防页面
│   ├── western-medicine/   # 西医治疗页面
│   ├── traditional-chinese/# 中医治疗页面
│   ├── health-longevity/   # 养生长寿页面
│   └── faq/                # 科普问答页面
├── components/
│   ├── layout/             # 布局组件
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   └── shared/            # 共享组件
│       ├── content-card.tsx
│       ├── info-section.tsx
│       └── nav-link.tsx
└── lib/
    └── utils.ts            # 工具函数
```

## 7. 内容规范

### 7.1 科普内容原则

- **准确性**: 所有医疗信息必须基于权威来源
- **通俗性**: 用大众能理解的语言解释专业知识
- **中立性**: 客观呈现中西医不同观点
- **及时性**: 更新最新的治疗方法和研究成果

### 7.2 免责声明

每个页面底部必须包含健康免责声明

## 8. 测试验证

- [x] TypeScript 类型检查通过
- [x] ESLint 代码规范检查通过
- [x] 服务启动成功（5000 端口）
- [x] 响应式布局测试通过
- [x] 页面导航测试通过

## 9. 部署信息

- **开发端口**: 5000
- **生产构建**: pnpm build
- **生产启动**: pnpm start
- **GitHub Pages**: https://fredsun3.github.io/ihealth/

## 10. GitHub Pages 部署

项目已配置自动部署到 GitHub Pages，每次推送到 main 分支会自动触发部署流程。

### 部署配置
- 静态导出: `output: 'export'`
- 基础路径: `basePath: '/ihealth'`
- Workflow: `.github/workflows/deploy.yml`

### 手动部署触发
在 GitHub 仓库的 Actions 页面可以手动触发部署。
