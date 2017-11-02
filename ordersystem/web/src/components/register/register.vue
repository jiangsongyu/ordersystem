<template>
	<div>
		<div class="login-box">
			<div class="col-sm-12 b-r">
				<h3 class="m-t-none m-b">注册</h3>
				<form role="form-horizontal">
				    <div class="form-group">
				        <input type="text" v-model="username" name="username" placeholder="请输入用户名" class="form-control required">
				    </div>
				    <div class="form-group">
				        <input type="password" v-model="password" name="password" placeholder="请输入密码" class="form-control required">
				    </div>
				    <div class="form-group">
				    	<input type="button" class="btn btn-primary pull-right m-t-n-xs" value="注册" @click="registerHandler">
				    </div>
				</form>
			</div>
		</div>
		<loading v-show="loadingShow"></loading>
	</div>
</template>

<script type="text/javascript">
	import loading from '../loading/loading.vue'
	import http from '../../utils/httpClient.js'
	import router from '../../router/'
	import $ from 'jquery'

	export default {
		data(){
			return {
				username: '',
				password: '',
				loadingShow: false
			}
		},
		methods: {
			registerHandler: function(){
				$.post('http://localhost:88/register', {username: this.username, password: this.password}, function(res){	
					console.log(res)
					if(res.status === false){
						alert('该用户已被注册！')

					}else if(res.status === true){
						alert('注册成功，请登录！')
						router.push({name: 'login'});
					}
				})
			}
		},
		components: {
			loading
		}
	}
</script>

<style lang="scss">
	.login-box{
		width: 270px;
		height: 220px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -80%);
		background: #FFFFFF;
	    border-radius: 5px;
	    box-shadow: -30px 30px 50px rgba(0, 0, 0, 0.32);
	    padding: 15px;
		border-top: solid 1px #efefef;
		border-right: solid 1px #efefef;
		overflow: hidden;
		h3{text-align: center;margin-top: 0;}
		.form-group{
			width: 200px;float: left;
			&:nth-child(2){
				width: 214px;
				float: left;
			}
		}
	}
</style>