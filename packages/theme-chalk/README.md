# dejavu-theme-chalk

> dejavu-ui 组件样式包.

## 结构

```
├── theme-chalk                 # 样式模块
│   ├── gulpfile.ts             # 样式打包配置
│   ├── package.json
│   └── src
│       ├── base.scss           # 基础样式
│       ├── common              # 公共样式目录
│       │   ├── transition.scss # 公共动画
│       │   └── var.scss        # 公共变量
│       ├── hello-world.scss    # 组件样式
│       ├── index.scss          # 总导出
│       ├── mixins              # 混合目录
│       │   ├── _var.scss       # 私有：定义了生成css变量的方法
│       │   ├── config.scss     # Sass配置
│       │   ├── function.scss   # Sass函数
│       │   ├── mixins.scss     # Sass混合函数
│       │   └── utils.scss      # Sass工具
│       ├── reset.scss          # 重置浏览器默认样式
│       └── var.scss            # Css变量
```
