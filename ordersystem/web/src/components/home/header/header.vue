<template>
	<div class="lyy-header">
		<ul>
			<li><router-link to="/">点餐后台管理系统</router-link></li>
		</ul>
		<ul>
			<li>
				<!-- <router-link   @click.self="logout" to="login">退出</router-link> -->
				<a @click.self="logout">退出</a>
			</li>
			<li>
				<router-link  to="register">注册</router-link>
			</li>
			<li>
				<router-link  to="/">Adminstrator</router-link>
			</li>							
		</ul>		
	</div>	
</template>

<script type="text/javascript">
	import './header.scss'
	import router from '../../../router/'

	export default {
		methods: {
			logout: function(){
				var cookie = document.cookie;
				var cookie1 = cookie.split('=');
				if(cookie1[0] = 'token'){
					var date = new Date();  
					date.setDate(date.getDate() -15);
					document.cookie = "token="+"res.token"+";expires=" +date.toUTCString()+"path=/";
					router.push({name: 'login'});
				}
			}
		}
	}
</script>