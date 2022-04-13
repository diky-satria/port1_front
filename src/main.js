import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './styles/style.css'
import './styles/container.css'
import axios from 'axios'
import CKEditor from '@ckeditor/ckeditor5-vue'
// import $ from 'jquery'
require('@/store/subscriber')

// jika mau menggunakan fontawesome, masukan file css fontawesome ke styles, kemudian import file tersebut di quasar-user-options,js

axios.interceptors.request.use(function (config) {
    config.baseURL = 'http://localhost:8000/'
    config.withCredentials = true
    return config; 
})

store.dispatch('auth/me', localStorage.getItem('token')).then(() => {
    createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).use(CKEditor).mount('#app')
})
