/* eslint-disable */
/**
 * 本文件由工具自动生成，请勿随意改动！！！
 * @name WEC DEVOPS K8S APP API
 * @description SaaS云管理平台 - 智校云 - K8S平台部署接口
 * @tutorial api.yaml
 */
const DEV_MODE = process.env.NODE_ENV === 'development'

const API_BASE = DEV_MODE ? '' : ''

const _basePath = (url) => {
    return `${API_BASE}${url}`
}

export default {
    k8sservice_servicehome: _basePath('/k8sService/serviceHome'), // 查看
    k8sservice_servicedetail: _basePath('/k8sService/serviceDetail'), // 查看详情
    k8sservice_servicecreateoredit: _basePath('/k8sService/serviceCreateOrEdit'), // 编辑服务
    k8sservice_servicedelete: _basePath('/k8sService/serviceDelete'), // 
    k8sservice_poddelete: _basePath('/k8sService/podDelete'), // 
}
