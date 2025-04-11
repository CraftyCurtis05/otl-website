import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App)
  .use(router)
  .use(createMetaManager())
  .mount('#app');