// 核心插件挂载到vue原型
import RightToolbar from '@/components/RightToolbar'
import util from '@/utils/tools'
import tableHeight from '@/utils/tableHeight.js' // 计算表格自适应高度
import '@/plugins/element-ui'
import '@/assets/styles/index.scss'
import '@/assets/icons' // icon
import '@/utils/delConfirm'

export default {
  async install(Vue) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示。
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 使用帮助类
    Vue.prototype.$utils = util
    // 计算表格自动高度
    Vue.prototype.$tableHeight = tableHeight
    // 全局组件挂载
    Vue.component('RightToolbar', RightToolbar)
  }
}