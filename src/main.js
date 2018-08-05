// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import DialogCommon from '../Index.vue'

// Vue.config.productionTip = false
const Components = {
  DialogCommon
}
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
// const Components = {
//   TopBar
// }

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components


