import { defineConfig } from "vite";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;
// https://blog.csdn.net/cjhzzx/article/details/139688828


// https://vite.dev/config/
export default defineConfig(async () => ({

  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver(),// Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),],
    }),
    Components({
      resolvers: [ElementPlusResolver(),

              // Auto register icon components
              // 自动注册图标组件
              IconsResolver({
                enabledCollections: ['ep'],
              }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),],
  base: "/vue-layouts/",

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
    // Env variables starting with the item of `envPrefix` will be exposed in tauri's source code through `import.meta.env`.
    envPrefix: ['VITE_', 'TAURI_ENV_*'],
  },
  // Env variables starting with the item of `envPrefix` will be exposed in tauri's source code through `import.meta.env`.
  envPrefix: ['VITE_', 'TAURI_ENV_*'],

}));
