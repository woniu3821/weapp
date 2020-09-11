import Vue from 'vue'

/**
 * 注册全局组件
 */
// const contexts = require.context('../components/global', false, /\.vue$/)
// contexts.keys().forEach(component => {
// 	const componentEntity = contexts(component).default
// 	// 使用内置的组件名称 进行全局组件注册
// 	Vue.component(componentEntity.name, componentEntity)
// })



Vue.mixin({
	methods: {
		success(title, config = {}) {
			uni.showToast(Object.assign({}, {
				title
			}, config))
		},
		fail(title,config={}){
			uni.showToast(Object.assign({}, {
				title,
				icon:'none'
			}, config))
		},
		load(title) {
			uni.showLoading({
				title
			});
		},
		hide() {
			uni.hideLoading()
		},
		post(url,params={},header){
			return this.$u.post(url,params,header)
		},
		get(){
			return this.$u.get(url,params={},header)
		}
	}
})
