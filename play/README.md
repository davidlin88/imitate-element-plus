# Dejavu-ui/play

本地开发模块，用于调试组件

启动:

```bash
pnpm dev
```

## 结构

├── README.md
├── app.example.vue # 默认调试带代码
├── index.html
├── main.ts
├── package.json
├── public
│ └── favicon.ico
├── resolver # 组件按需加载器，参考 https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/element-plus.ts
│ ├── resolver.ts
│ ├── types.ts
│ └── utils.ts
├── src
│ └── App.vue
├── vite.config.ts
└── vite.init.ts # 无调试代码时生成 App.vue
