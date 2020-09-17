<template>
	<view class="wrap">
		<view class="bg">
			<image src="../../static/img/bg.png" mode="widthFix"></image>
		</view>
		<view class="content">
			<u-form :model="form" ref="uForm" label-width="150">
				<u-form-item label="邀请码" prop="inviteInfo">
					<u-input v-model="form.inviteInfo" />
				</u-form-item>
				<u-form-item label="昵称" prop="nickname">
					<u-input v-model="form.nickname" />
				</u-form-item>
				<u-form-item label="手机号" prop="mobile">
					<u-input placeholder="请输入手机号" v-model="form.mobile" type="number"></u-input>
				</u-form-item>
				<u-form-item label="密码" prop="password">
					<u-input :password-icon="true" type="password" v-model="form.password" placeholder="请输入密码"></u-input>
				</u-form-item>
				<u-form-item label="确认密码" prop="checkPassword">
					<u-input type="password" v-model="form.checkPassword" placeholder="请确认密码"></u-input>
				</u-form-item>
				<u-form-item label="所在地区" prop="countyCode">
					<u-input type="select" :select-open="pickerShow" :value="area" placeholder="请选择地区" @click="pickerShow = true"></u-input>
				</u-form-item>
				<u-form-item label-position="top" label="详细地址" prop="address">
					<u-input type="textarea" placeholder="请输入详细地址" v-model="form.address" />
				</u-form-item>
			</u-form>
			<view class="open-to">
				<u-button type="success" @click="submit">注册</u-button>
			</view>
			<u-select v-model="pickerShow" mode="mutil-column-auto" :list="list" @confirm="regionConfirm"></u-select>
		</view>
	</view>
</template>

<script>
	import config from '@/common/config.js'
	export default {
		data() {
			return {
				form: {
					inviteInfo: '',
					nickname: '',
					password: '',
					mobile: '',
					checkPassword: '',
					provinceCode: '',
					cityCode: '',
					countyCode: '',
					address: ''
				},
				selectList: [],
				pickerShow: false,
				list: [],
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}],
					mobile: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur'
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							// 正则不能含有两边的引号
							pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
							message: '需同时含有字母和数字，长度在6-12之间',
							trigger: 'blur'
						}
					],
					checkPassword: [{
							required: true,
							message: '请重新输入密码',
							trigger: 'blur'
						},
						{
							validator: (rule, value, callback) => {
								return value === this.form.password;
							},
							message: '两次输入的密码不相等',
							trigger: 'blur'
						}
					],
					countyCode: [{
						required: true,
						message: '请选择地区',
						type: 'number',
						trigger: ['change', 'blur']
					}],
					address: [{
						required: true,
						message: '请填写详细地址',
						trigger: 'blur'
					}]
				}
			};
		},
		computed: {
			area() {
				return this.selectList.map(it => it.label).join('-');
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.postUcRoleAddrole();
					}
				});
			},
			// 选择地区回调
			regionConfirm(list) {
				this.selectList = list;
				this.form = Object.assign({}, this.form, {
					provinceCode: list[0].value,
					cityCode: list[1].value,
					countyCode: list[2].value
				});
			},
			async getRegin() {
				const [err, res] = await this.$u.api.postChinaareaListchinaareatree({}, '', {
					auth: false
				});
				if (err) {
					this.fail(err);
					return;
				}
				this.list = trasRegion(res);
			},
			async postUcRoleAddrole() {
				this.load();

				const [err, res] = await uni.request({
					url: config.baseUrl + '/zeus-web-api/uc/user/register',
					method: 'POST',
					data: {
						...this.form,
						inviteInfo: {
							inviteCode: this.form.inviteInfo
						}
					},
					header: {
						'Content-Type': 'application/json;charset=UTF-8'
					}
				})
				this.hide();
				if (err||res.data.code!==200) {
					this.fail(err||res.data.message);
					return;
				}
				this.load('注册成功跳转中');
				setTimeout(() => {
					this.$u.route({
						type: 'redirect',
						url: '/pages/login/index'
					})
				}, 1500);
			}

			// postUcRoleAddrole
		},
		onShow() {
			this.getRegin();
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};

	function trasRegion(data) {
		if (!data || !data.length) {
			return [];
		}
		return data.map(it => {
			const obj = {
				value: it.value,
				label: it.name
			};
			if (it.children && it.children.length) {
				obj.children = trasRegion(it.children);
			}
			return obj;
		});
	}
</script>

<style lang="scss" scoped>
	@import './login.scss';
</style>
