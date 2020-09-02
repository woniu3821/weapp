module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			disableHostCheck: true,
			port: '8080', // 代理断就
			proxy: {
				'/wec-devops-k8s': {
					target: 'http://iwecloud12:31559/', // 目标代理接口地址
					// target: 'http://iwecloud18:31185/', // 目标代理接口地址
					secure: false,
					// onProxyReq: cookie,
					changeOrigin: true // 开启代理，在本地创建一个虚拟服务端
				}
			}
		}
	},

	//productionSourceMap: false
}
