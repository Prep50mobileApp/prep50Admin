import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/store/subcriber')
axios.defaults.baseURL = 'https://prep50.herokuapp.com'

store.dispatch('auth/attempt', localStorage.getItem('access')).then(() => {
createApp(App).use(store).use(router).mount("#app")
})


