<template>
	<main  classs="bg-success">
		<div class="home-menu">
			<aside>
				<ul>
					<li><router-link to="/login"><span><i class="glyphicon glyphicon-heart-empty"></i>登录</span></router-link></li>
					<li><router-link to="/goodslist"><span><i class="glyphicon glyphicon-hand-right"></i>主菜</span></router-link></li>
					<li><router-link to="/goodsform"><span><i class="glyphicon glyphicon-hand-right"></i>小吃</span></router-link></li>
					<li><router-link to="/sweetsgoods"><span><i class="glyphicon glyphicon-hand-right"></i>甜品</span></router-link></li>
					<li><router-link to="/drink"><span><i class="glyphicon glyphicon-hand-right"></i>饮料</span></router-link></li>
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