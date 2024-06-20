import { createSSRApp } from 'vue'
import uvUI from '@climblee/uv-ui'
import App from './App.vue'
import { setupStore } from './store'
import { request } from './service/request'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uvUI)
  request(app)
  setupStore(app)
  return {
    app,
  }
}
