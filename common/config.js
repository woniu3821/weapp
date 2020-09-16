
const isDev=process.env.NODE_ENV === 'development'

export default {
	baseUrl:!isDev?'http://172.31.16.244:8080':'https://noninpk.com'
}