<template>
	<main  classs="bg-success">
		<div class="home-menu">
			<aside>
				<ul>
					<li><router-link to="/login">登录</router-link></li>
					<li><router-link to="/goodslist">主菜</router-link></li>
					<li><router-link to="/goodsform">小吃</router-link></li>
					<li><router-link to="/sweetsgoods">甜品</router-link></li>
					<li><router-link to="/drink">饮料</router-link></li>
				</ul>		
			</aside>
			<article>
				<router-view></router-view>
			</article>
		</div>		
	</main>
</template>

<script type="text/javascript">
	//$children
	import './home.scss'
	export default {
		methods: {
			
		}
	}
</script>