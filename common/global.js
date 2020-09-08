import Vue from 'vue'

/**
 * 注册全局组件
 */
const contexts = require.context('../components/global', false, /\.vue$/)
contexts.keys().forEach(component => {
	const componentEntity = contexts(component).default
	// 使用内置的组件名称 进行全局组件注册
	Vue.component(componentEntity.name, componentEntity)
})



Vue.mixin({
	methods: {
		toast(title, config = {}) {
			uni.showToast(Object.assign({}, {
				title
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
		async request(url,obj) {
			
			const defaltPath = 'http://172.31.16.244:8080/heter-web-api'
			
			obj.url = defaltPath + url

			let params = Object.assign({}, {
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded',
					deviceId: this.$u.guid(20)
				}
			}, obj)

			return uni.request(params)
		},
		async post(url,params={},header){
			return this.$u.post(url,params,header)
		},
		async get(){
			return this.$u.get(url,params={},header)
		}
	}
})
