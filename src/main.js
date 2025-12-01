import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
createApp(App).use(router).mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');