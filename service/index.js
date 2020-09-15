/* eslint-disable */
/**
 * 本文件由工具自动生成，请勿随意改动！！！
 * @name 自动生成api
 * @description 在下方手动添加接口可自动生成
 * @tutorial api.yaml
 */
import api from './api'

import { awaitWrap } from '@/common/tools'

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F

const apis={}

const install = (Vue, vm) => {
	/**
	 * 获取施肥记录
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFertilizerrecordQueryfertilizerrecordspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.fertilizerrecord_queryfertilizerrecordspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFertilizerrecordQueryfertilizerrecordspage=postFertilizerrecordQueryfertilizerrecordspage
	/**
	 * 新增施肥
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFertilizerrecordAddfertilizerrecord = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.fertilizerrecord_addfertilizerrecord+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFertilizerrecordAddfertilizerrecord=postFertilizerrecordAddfertilizerrecord
	/**
	 * 更新施肥
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFertilizerrecordUpdatefertilizerrecord = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.fertilizerrecord_updatefertilizerrecord+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFertilizerrecordUpdatefertilizerrecord=postFertilizerrecordUpdatefertilizerrecord
	/**
	 * 删除施肥
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFertilizerrecordDeletefertilizerrecord = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.fertilizerrecord_deletefertilizerrecord+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFertilizerrecordDeletefertilizerrecord=postFertilizerrecordDeletefertilizerrecord
	/**
	 * 退出登录
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAuthLogout = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.auth_logout+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAuthLogout=postAuthLogout
	/**
	 * 获取用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUserGetuserinfo = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.user_getuserinfo+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUserGetuserinfo=postUserGetuserinfo
	/**
	 * 检查登录状态
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postOauthCheckToken = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.oauth_check_token+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postOauthCheckToken=postOauthCheckToken
	/**
	 * 获取中心点坐标
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandGetmapcenter = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_getmapcenter+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandGetmapcenter=postFarmlandGetmapcenter
	/**
	 * 计算区域面积
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandComputesignedarea = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_computesignedarea+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandComputesignedarea=postFarmlandComputesignedarea
	/**
	 * 添加公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementAddannouncement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_addannouncement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementAddannouncement=postAnnouncementAddannouncement
	/**
	 * 删除公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementDeleteannouncement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_deleteannouncement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementDeleteannouncement=postAnnouncementDeleteannouncement
	/**
	 * 获取公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementGetannouncement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_getannouncement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementGetannouncement=postAnnouncementGetannouncement
	/**
	 * 列表公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementListannouncement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_listannouncement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementListannouncement=postAnnouncementListannouncement
	/**
	 * 获取未读列表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementListreadannouncement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_listreadannouncement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementListreadannouncement=postAnnouncementListreadannouncement
	/**
	 * 查询公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementQueryannouncementspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_queryannouncementspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementQueryannouncementspage=postAnnouncementQueryannouncementspage
	/**
	 * 获取未读列表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementReadannouncement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_readannouncement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementReadannouncement=postAnnouncementReadannouncement
	/**
	 * 更新公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postAnnouncementUpdateannouncement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.announcement_updateannouncement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postAnnouncementUpdateannouncement=postAnnouncementUpdateannouncement
	/**
	 * 校验验证码
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  getAuthCode = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.get(`${api.auth_code+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.getAuthCode=getAuthCode
	/**
	 * 添加地址库信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postChinaareaAddchinaarea = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.chinaarea_addchinaarea+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postChinaareaAddchinaarea=postChinaareaAddchinaarea
	/**
	 * 删除地址库信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postChinaareaDeletechinaarea = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.chinaarea_deletechinaarea+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postChinaareaDeletechinaarea=postChinaareaDeletechinaarea
	/**
	 * 获取地址库信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postChinaareaGetchinaarea = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.chinaarea_getchinaarea+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postChinaareaGetchinaarea=postChinaareaGetchinaarea
	/**
	 * 列表地址库信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postChinaareaListchinaarea = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.chinaarea_listchinaarea+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postChinaareaListchinaarea=postChinaareaListchinaarea
	/**
	 * 查询地址库树
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postChinaareaListchinaareatree = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.chinaarea_listchinaareatree+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postChinaareaListchinaareatree=postChinaareaListchinaareatree
	/**
	 * 查询地址库信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postChinaareaQuerychinaareaspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.chinaarea_querychinaareaspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postChinaareaQuerychinaareaspage=postChinaareaQuerychinaareaspage
	/**
	 * 更新地址库信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postChinaareaUpdatechinaarea = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.chinaarea_updatechinaarea+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postChinaareaUpdatechinaarea=postChinaareaUpdatechinaarea
	/**
	 * 添加我的农田
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandAddfarmland = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_addfarmland+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandAddfarmland=postFarmlandAddfarmland
	/**
	 * 删除我的农田
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandDeletefarmland = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_deletefarmland+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandDeletefarmland=postFarmlandDeletefarmland
	/**
	 * 获取行政信息(经度+纬度)
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandGetcroplist = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_getcroplist+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandGetcroplist=postFarmlandGetcroplist
	/**
	 * 获取我的农田
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandGetfarmland = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_getfarmland+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandGetfarmland=postFarmlandGetfarmland
	/**
	 * 获取行政信息(经度+纬度)
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandGetfertilizerdata3 = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_getfertilizerdata3+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandGetfertilizerdata3=postFarmlandGetfertilizerdata3
	/**
	 * 获取耕地资源管理单元图数据(系统代码+行政代码+OID)(耕地资源管理单元图+耕地资源管理单元属性数据表(主))
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandGetmanagementunitdata = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_getmanagementunitdata+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandGetmanagementunitdata=postFarmlandGetmanagementunitdata
	/**
	 * 获取行政信息(经度+纬度)
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandGetregioninfobylocation = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_getregioninfobylocation+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandGetregioninfobylocation=postFarmlandGetregioninfobylocation
	/**
	 * 列表我的农田
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandListfarmland = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_listfarmland+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandListfarmland=postFarmlandListfarmland
	/**
	 * 查询我的农田
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandQueryfarmlandspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_queryfarmlandspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandQueryfarmlandspage=postFarmlandQueryfarmlandspage
	/**
	 * 更新我的农田
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFarmlandUpdatefarmland = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.farmland_updatefarmland+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFarmlandUpdatefarmland=postFarmlandUpdatefarmland
	/**
	 * 证照上传
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFileFileupload = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.file_fileupload+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFileFileupload=postFileFileupload
	/**
	 * 获取文件绝对地址
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFileGetfilepath = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.file_getfilepath+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFileGetfilepath=postFileGetfilepath
	/**
	 * 读取图片流
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postFileRemovefile = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.file_removefile+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postFileRemovefile=postFileRemovefile
	/**
	 * 添加用户接收公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postReceiverAddreceiver = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.receiver_addreceiver+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postReceiverAddreceiver=postReceiverAddreceiver
	/**
	 * 删除用户接收公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postReceiverDeletereceiver = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.receiver_deletereceiver+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postReceiverDeletereceiver=postReceiverDeletereceiver
	/**
	 * 获取用户接收公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postReceiverGetreceiver = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.receiver_getreceiver+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postReceiverGetreceiver=postReceiverGetreceiver
	/**
	 * 列表用户接收公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postReceiverListreceiver = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.receiver_listreceiver+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postReceiverListreceiver=postReceiverListreceiver
	/**
	 * 查询用户接收公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postReceiverQueryreceiverspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.receiver_queryreceiverspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postReceiverQueryreceiverspage=postReceiverQueryreceiverspage
	/**
	 * 更新用户接收公告信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postReceiverUpdatereceiver = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.receiver_updatereceiver+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postReceiverUpdatereceiver=postReceiverUpdatereceiver
	/**
	 * 添加页面元素
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcElementAddelement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_element_addelement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcElementAddelement=postUcElementAddelement
	/**
	 * 删除页面元素
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcElementDeleteelement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_element_deleteelement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcElementDeleteelement=postUcElementDeleteelement
	/**
	 * 获取页面元素
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcElementGetelement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_element_getelement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcElementGetelement=postUcElementGetelement
	/**
	 * 列表页面元素
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcElementListelement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_element_listelement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcElementListelement=postUcElementListelement
	/**
	 * 查询页面元素
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcElementQueryelementspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_element_queryelementspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcElementQueryelementspage=postUcElementQueryelementspage
	/**
	 * 更新页面元素
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcElementUpdateelement = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_element_updateelement+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcElementUpdateelement=postUcElementUpdateelement
	/**
	 * 添加邀请记录表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcInviteAddinvite = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_invite_addinvite+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcInviteAddinvite=postUcInviteAddinvite
	/**
	 * 删除邀请记录表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcInviteDeleteinvite = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_invite_deleteinvite+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcInviteDeleteinvite=postUcInviteDeleteinvite
	/**
	 * 获取邀请记录表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcInviteGetinvite = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_invite_getinvite+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcInviteGetinvite=postUcInviteGetinvite
	/**
	 * 列表邀请记录表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcInviteListinvite = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_invite_listinvite+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcInviteListinvite=postUcInviteListinvite
	/**
	 * 查询邀请记录表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcInviteQueryinvitespage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_invite_queryinvitespage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcInviteQueryinvitespage=postUcInviteQueryinvitespage
	/**
	 * 更新邀请记录表
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcInviteUpdateinvite = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_invite_updateinvite+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcInviteUpdateinvite=postUcInviteUpdateinvite
	/**
	 * 添加菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuAddmenu = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_addmenu+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuAddmenu=postUcMenuAddmenu
	/**
	 * 删除菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuDeletemenu = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_deletemenu+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuDeletemenu=postUcMenuDeletemenu
	/**
	 * 获取菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuGetmenu = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_getmenu+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuGetmenu=postUcMenuGetmenu
	/**
	 * 列表菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuListmenu = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_listmenu+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuListmenu=postUcMenuListmenu
	/**
	 * 查询菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuListmenutree = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_listmenutree+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuListmenutree=postUcMenuListmenutree
	/**
	 * 查询菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuQuerymenuspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_querymenuspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuQuerymenuspage=postUcMenuQuerymenuspage
	/**
	 * 排序菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuSortmenu = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_sortmenu+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuSortmenu=postUcMenuSortmenu
	/**
	 * 更新菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcMenuUpdatemenu = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_menu_updatemenu+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcMenuUpdatemenu=postUcMenuUpdatemenu
	/**
	 * 添加权限
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcPermissionAddpermission = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_permission_addpermission+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcPermissionAddpermission=postUcPermissionAddpermission
	/**
	 * 删除权限
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcPermissionDeletepermission = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_permission_deletepermission+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcPermissionDeletepermission=postUcPermissionDeletepermission
	/**
	 * 获取权限
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcPermissionGetpermission = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_permission_getpermission+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcPermissionGetpermission=postUcPermissionGetpermission
	/**
	 * 列表权限
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcPermissionListpermission = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_permission_listpermission+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcPermissionListpermission=postUcPermissionListpermission
	/**
	 * 查询权限
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcPermissionQuerypermissionspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_permission_querypermissionspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcPermissionQuerypermissionspage=postUcPermissionQuerypermissionspage
	/**
	 * 更新权限
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcPermissionUpdatepermission = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_permission_updatepermission+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcPermissionUpdatepermission=postUcPermissionUpdatepermission
	/**
	 * 添加角色信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcRoleAddrole = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_role_addrole+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcRoleAddrole=postUcRoleAddrole
	/**
	 * 删除角色信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcRoleDeleterole = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_role_deleterole+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcRoleDeleterole=postUcRoleDeleterole
	/**
	 * 获取角色信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcRoleGetrole = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_role_getrole+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcRoleGetrole=postUcRoleGetrole
	/**
	 * 列表角色信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcRoleListrole = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_role_listrole+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcRoleListrole=postUcRoleListrole
	/**
	 * 查询角色信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcRoleQueryrolespage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_role_queryrolespage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcRoleQueryrolespage=postUcRoleQueryrolespage
	/**
	 * 修改角色菜单
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcRoleSaverolemenu = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_role_saverolemenu+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcRoleSaverolemenu=postUcRoleSaverolemenu
	/**
	 * 更新角色信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcRoleUpdaterole = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_role_updaterole+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcRoleUpdaterole=postUcRoleUpdaterole
	/**
	 * 添加用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserAdduser = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_adduser+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserAdduser=postUcUserAdduser
	/**
	 * 删除用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserDeleteuser = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_deleteuser+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserDeleteuser=postUcUserDeleteuser
	/**
	 * 获取用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserGetuser = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_getuser+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserGetuser=postUcUserGetuser
	/**
	 * 获取用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserGetuserbasicinfo = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_getuserbasicinfo+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserGetuserbasicinfo=postUcUserGetuserbasicinfo
	/**
	 * 查询用户
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserGetusertree = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_getusertree+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserGetusertree=postUcUserGetusertree
	/**
	 * 列表用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserListuser = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_listuser+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserListuser=postUcUserListuser
	/**
	 * 查询邀请用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserQueryinviteuserspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_queryinviteuserspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserQueryinviteuserspage=postUcUserQueryinviteuserspage
	/**
	 * 获取用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserQueryusertype = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_queryusertype+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserQueryusertype=postUcUserQueryusertype
	/**
	 * 查询用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserQueryuserspage = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_queryuserspage+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserQueryuserspage=postUcUserQueryuserspage
	/**
	 * 添加用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserRegister = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_register+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserRegister=postUcUserRegister
	/**
	 * 重置用户
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserResetusertpassword = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_resetusertpassword+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserResetusertpassword=postUcUserResetusertpassword
	/**
	 * 修改用户角色
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserSaveuserrole = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_saveuserrole+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserSaveuserrole=postUcUserSaveuserrole
	/**
	 * 更新用户信息
	 * @param { Object } params 请求参数
	 * @param {  } params[''] 
	 */
	const  postUcUserUpdateuser = async (params={},id='',header={auth:true}) => {
	    // send request
	    return awaitWrap(vm.$u.post(`${api.uc_user_updateuser+id}`, params, header))
	}
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	apis.postUcUserUpdateuser=postUcUserUpdateuser
	
	vm.$u.api =apis
}

export default {
	install
}





