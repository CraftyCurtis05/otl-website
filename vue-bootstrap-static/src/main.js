import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createMetaManager } from 'vue-meta';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Create and mount the app
createApp(App)
  .use(router)
  .use(createMetaManager())
  .mount('#app');