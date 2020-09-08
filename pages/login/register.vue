<template>
	<view class="wrap">
		<view class="title">注册</view>
		<view class="content">
			<u-form :model="form" ref="uForm">
				<u-form-item label="邀请码" prop="inviteCode"><u-input v-model="form.inviteCode" /></u-form-item>
				<u-form-item label="昵称" prop="nickname"><u-input v-model="form.nickname" /></u-form-item>
				<u-form-item label="手机号" prop="mobile" label-width="150"><u-input placeholder="请输入手机号" v-model="form.mobile" type="number"></u-input></u-form-item>
				<u-form-item label="密码" prop="password"><u-input :password-icon="true" type="password" v-model="form.password" placeholder="请输入密码"></u-input></u-form-item>
				<u-form-item label="确认密码" prop="checkPassword"><u-input type="password" v-model="form.checkPassword" placeholder="请确认密码"></u-input></u-form-item>
				<u-form-item label="所在地区" prop="region" label-width="150">
					<u-input type="select" :select-open="pickerShow" v-model="form.region" placeholder="请选择地区" @click="pickerShow = true"></u-input>
				</u-form-item>
				<u-form-item label="地址" prop="address"><u-input type="textarea" placeholder="请输入地址" v-model="form.address" /></u-form-item>
			</u-form>
			<u-button @click="submit">提交</u-button>
			<u-select v-model="pickerShow" mode="mutil-column-auto" :list="list" @confirm="regionConfirm"></u-select>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				inviteCode:'',
				nickname: '',
				password:'',
				checkPassword:'',
				provinceCode:'',
				cityCode:'',
				countyCode:'',
				address:'',
				password:'',
			},
			pickerShow: false,
			list: [
				{
					value: 1,
					label: '中国',
					children: [
						{
							value: 2,
							label: '广东',
							children: [
								{
									value: 3,
									label: '深圳'
								},
								{
									value: 4,
									label: '广州'
								}
							]
						},
						{
							value: 5,
							label: '广西',
							children: [
								{
									value: 6,
									label: '南宁'
								},
								{
									value: 7,
									label: '桂林'
								}
							]
						}
					]
				},
				{
					value: 8,
					label: '美国',
					children: [
						{
							value: 9,
							label: '纽约',
							children: [
								{
									value: 10,
									label: '皇后街区'
								}
							]
						}
					]
				}
			],
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				],
				intro: [
					{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}
				],
				phone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change', 'blur']
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur']
					},
					{
						// 正则不能含有两边的引号
						pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
						message: '需同时含有字母和数字，长度在6-12之间',
						trigger: ['change', 'blur']
					}
				],
				rePassword: [
					{
						required: true,
						message: '请重新输入密码',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							return value === this.form.password;
						},
						message: '两次输入的密码不相等',
						trigger: ['change', 'blur']
					}
				],
				region: [
					{
						required: true,
						message: '请选择地区',
						trigger: 'change'
					}
				],
				intro: [
					{
						required: true,
						message: '请填写简介'
					},
					{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					},
					// 正则校验示例，此处用正则校验是否中文，此处仅为示例，因为uView有this.$u.test.chinese可以判断是否中文
					{
						pattern: /^[\u4e00-\u9fa5]+$/gi,
						message: '简介只能为中文',
						trigger: 'change'
					}
				]
			}
		};
	},
	methods: {
		submit() {
			// uni.showLoading({
			// 	title: '登录',
			// 	mask: true
			// })
			// uni.hideLoading();
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.$u.toast('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		},
		// 选择地区回调
		regionConfirm(e) {
			this.form.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};
</script>

<style lang="scss" scoped></style>
