import { createApp } from 'vue'
import App from './App.vue'

import { setupWorker } from 'msw/browser'
import { handlers } from './mocks/handlers'
export const worker = setupWorker(...handlers)
await worker.start()

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import router from './router.ts';
import store from './store.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStar);

const app = createApp(App);

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.mount('#app')
