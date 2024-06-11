import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { setupWorker } from 'msw/browser'
import { handlers } from './mocks/handlers'
export const worker = setupWorker(...handlers)
await worker.start()

createApp(App).mount('#app')
