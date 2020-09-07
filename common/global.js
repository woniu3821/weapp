/**
 * 注册全局组件
 */
const contexts = require.context('../components/global', false, /\.vue$/)
contexts.keys().forEach(component => {
  const componentEntity = contexts(component).default
  // 使用内置的组件名称 进行全局组件注册
  Vue.component(componentEntity.name, componentEntity)
})
