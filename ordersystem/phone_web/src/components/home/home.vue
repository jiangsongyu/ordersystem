<template>
	<main  classs="bg-success">
		<nav class="bg-info">
		    <ul>
		        <li>分类</li>
		        <li class="greensName">主食</li>
		    </ul>
		</nav>
		<div class="home-menu">
			<aside>
				<ul>
					<li><router-link to="/goodslist">主食</router-link></li>
					<li><router-link to="/goodsform">套餐</router-link></li>
					<li><router-link to="/goodslist">小食</router-link></li>
					<li><router-link to="/goodslist">早餐</router-link></li>
					<li><router-link to="/goodslist">饮料</router-link></li>
					<li><router-link to="/goodslist">汤粥</router-link></li>
					<li><router-link to="/goodslist">其他</router-link></li>
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
			generateToolBar: function(obj){
				//动态生成按钮
			},
			addCar: function(){
				
			}
		}
	}
</script>