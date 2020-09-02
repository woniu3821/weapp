/* eslint-disable */
/**
 * 本文件由工具自动生成，请勿随意改动！！！
 * @name WEC DEVOPS K8S APP API
 * @description SaaS云管理平台 - 智校云 - K8S平台部署接口
 * @tutorial api.yaml
 */
import api from './api'

import { awaitWrap } from '@/common/tools'

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F

const apis={}

const install = (Vue, vm) => {
	/**
	 * 查看
	 * @param { Object } params 请求参数
	 * @param { String } params['name'] 名称
	 * @param { String } params['version'] 版本号
	 */
	const  serviceHome = async (params={}) => {
	    // send request
	    return awaitWrap(vm.$u.post(api.k8sservice_servicehome, params))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.serviceHome=serviceHome
	/**
	 * 查看详情
	 * @param { Object } params 请求参数
	 * @param { String } params['name'] 名称
	 * @param { String } params['version'] 版本号
	 * @param { String } params['uuid'] 同一版本的标识，多个使用,分割
	 * @param { String } params['platform'] 平台（1：为web、2：dubbo）
	 * @param { String } params['enableOuterAccessFlag'] 集群外是否可访问（0：非、1：是）
	 */
	const  serviceDetail = async (params={}) => {
	    // send request
	    return awaitWrap(vm.$u.post(api.k8sservice_servicedetail, params))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.serviceDetail=serviceDetail
	/**
	 * 编辑服务
	 * @param { Object } params 请求参数
	 * @param { String } params['name'] 名称
	 * @param { String } params['version'] 版本号
	 * @param { String } params['uuid'] 同一版本的标识，多个使用,分割
	 * @param { Integer } params['num'] 节点数
	 * @param { String } params['image'] 镜像地址
	 * @param { String } params['log'] 日志目录
	 * @param { String } params['requestsCPU'] 运行必须CPU
	 * @param { String } params['requestsMemory'] 运行必须内存
	 * @param { String } params['platform'] 平台（1：为web、2：dubbo）
	 * @param { String } params['enableOuterAccessFlag'] 集群外是否可访问（0：非、1：是）
	 * @param { String } params['operFlag'] 操作标识（1：新增、2：修改）
	 */
	const  edit = async (params={}) => {
	    // send request
	    return awaitWrap(vm.$u.post(api.k8sservice_servicecreateoredit, params))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.edit=edit
	/**
	 * 
	 * @param { Object } params 请求参数
	 * @param { String } params['name'] 名称
	 * @param { String } params['version'] 版本号
	 * @param { String } params['uuid'] 同一版本的标识，多个使用,分割
	 */
	const  del = async (params={}) => {
	    // send request
	    return awaitWrap(vm.$u.post(api.k8sservice_servicedelete, params))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.del=del
	/**
	 * 
	 * @param { Object } params 请求参数
	 * @param { Array } params['wids'] 多个wid
	 */
	const  delPod = async (params={}) => {
	    // send request
	    return awaitWrap(vm.$u.post(api.k8sservice_poddelete, params))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.delPod=delPod
	
	vm.$u.api =apis
}

export default {
	install
}





