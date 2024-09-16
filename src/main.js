import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/router.js'
import axios from "axios";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import * as ElementPlusIcons from '@element-plus/icons-vue'
import '../src/assets/font/font.css'
import * as Icons from "@ant-design/icons-vue"
import './style.css'
import ECharts from 'vue-echarts'
import 'echarts'
const app=createApp(App)
// createApp(App).use(ElementPlus).use(router).mount('#app')
app.use(ElementPlus)
app.use(router)
app.config.globalProperties.$axios=axios
app.use(Antd)
for (let iconName in ElementPlusIcons){
    app.component(iconName,ElementPlusIcons[iconName])
}
app.mount('#app')
