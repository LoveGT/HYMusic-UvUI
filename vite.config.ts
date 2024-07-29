import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// import UnoCSS from 'unocss/vite'
// import { defaultAttributes, defaultIgnoreNonValuedAttributes, presetAttributifyWechat } from 'unplugin-unocss-attributify-wechat/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  //   UnoCSS(),
  //   presetAttributifyWechat({
  //   attributes: [...defaultAttributes],
  //   ignoreNonValuedAttributes: [...defaultIgnoreNonValuedAttributes],
  // })
  ],
})
