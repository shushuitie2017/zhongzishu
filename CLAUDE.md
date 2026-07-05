# 种子树（zhongzishu）— 项目说明

面向 Web 的**程序化树木/植物生成器**，基于 Three.js（WebGPU）。是开源项目 **SeedThree**（SkyeShark，MIT）的**中文版改造**：UI + 物种名中文化、移除原项目的外部链接/推广，保留 MIT 版权归属。

> 目录用拉丁名 `zhongzishu`（防 npm/vite/git 在中文路径出问题），品牌名「种子树」在应用内部。

## 运行

```bash
pnpm install
pnpm dev        # http://localhost:5390 （vite.config 里设了 5390）
pnpm build      # → dist/
pnpm preview
```

需 **WebGPU 浏览器**（Chrome/Edge 113+），有 WebGL2 自动回退。实测 WebGPU 后端 60fps 正常渲染。

## 架构（沿用 SeedThree）

```
src/
  main.js            主循环 + 场景/生态 + 加载覆盖层 + HUD + 导出
  core/              生成器(weber-penn / dichotomous L 系统)、meshing、LOD、cards、impostor、wind、terrain、grass、rocks、clouds、environment
  species/           每物种一份预设（name/latin/controls/foliage/params）；index.js 注册；broadleaf-controls.js 共享阔叶控件
  ui/                controls.js（lil-gui 控制面板）+ theme.css + panel-fx.js
  audio/             环境音（风声底噪 + 鸟鸣调度）
scripts/texture,audio/  纹理/音频生成工具链（sharp 等，仅离线用）
assets/             随仓库附带的纹理/音频（开箱即用）
```

## 中文化 / delink 记录（改造要点）

- **品牌**：`种子树`。index.html 标题/loader 文字化（弃用英文 wordmark 图，已删 `assets/ui/wordmark.png`）；`src/ui/controls.js` 面板头改用文字 wordmark + 保留 `logo.png`（纯种子发芽符号，无英文）。package.json name=`zhongzishu`、去掉 `homepage`/`repository`。
- **UI 中文化**：`src/ui/controls.js`（~40 标签 + 文件夹 + 下拉键 + 高级逐层参数 + 预设格式 `zhongzishu-preset/1` / `.zhongzishu.json`）、`src/species/broadleaf-controls.js`、`src/main.js` 加载文案/HUD（`种子/后端/枝/叶`）。**只改显示文本，不动 key/值/逻辑。**
- **物种**：10 个 `name` → 中文常用名（白栎/红花槭/北美鹅掌楸/北美枫香/美国水青冈/西黄松/火炬松/花旗松/短叶丝兰/巨人柱），**`latin` 学名保留**（HUD 显示「中文名 · 拉丁名」）。
- **移除链接**：README + package.json 的 GitHub 主页/仓库、Live demo、学术参考等外链全部移除；应用内部本就无社交/GitHub 链接。
- **许可（红线）**：MIT 要求保留版权声明 → `LICENSE` 保持 `Copyright (c) 2026 SkyeShark`，README 留一句「基于 SeedThree（MIT）改造」的最小归属。**不可删 LICENSE 版权行。**

## 加新物种

投一份预设 `src/species/<名>.js`（复制 white-oak.js / pine.js / saguaro.js 之一）+ 注册进 index.js + 生成对应纹理（`scripts/texture/`）。详见 README「添加一个物种」与 `docs/dichotomous-generator.md`。

## 待办（可选）

- 未 git init / 未推 GitHub / 未部署（按需再做）。
- `docs/*.md` 仍为英文开发规格（面向开发者，未中文化）。
- `white_oak_single_dry/dryest` 季节变体贴图缺失是原项目既有的 benign 警告（非改造引入）。
