import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import sass from 'sass'

export default defineConfig({
  chainWebpack: (config) => {
    config.module
        .rule('vue')
        .use('vue-loader')
        .tap((options) => {
          options.compilerOptions = {
            ...options.compilerOptions,
            isCustomElement: (tag) => tag === 'modal'
          }
          return options
        })
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  }
})
