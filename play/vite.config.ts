import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import { epRoot, pkgRoot, projRoot } from '../build/utils/paths'
import './vite.init'
import { DejavuUiResolver } from './resolver/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 4000 },
  resolve: {
    // 将resolver输出的npm路径转为本地路径
    alias: [
      // 转换全局导入入口
      {
        find: /^dejavu-ui(\/(es))?$/,
        replacement: path.resolve(epRoot, 'index.ts'),
      },
      // 转换按需导入入口
      {
        find: /^dejavu-ui\/(es)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
    ],
  },
  plugins: [
    vue(),
    Components({
      // dts: true,
      // dirs: ['../packages/components'],
      include: `${__dirname}/**`,
      resolvers: [
        DejavuUiResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    Inspect(),
  ],
})
