import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.config.globalProperties.$axios = axios // 将axios导入为全局配置，通过this.$axios进行使用

app.use(Antd)
app.mount('#app')
