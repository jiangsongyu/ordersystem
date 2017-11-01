<template>
	<div :class="['lyy-nav-content', navOpen ? '' : 'toggle']" ref="lyynav">
		<ul class="lyy-nav">
			<!-- <li class="lyy-nav-item nav-toggle">
				<a class="btn btn-primary" href="javascript:" @click="toggleNav">
					<i class="fa fa-bars"></i> 
				</a>
			</li> -->
			<li class="lyy-nav-item" >
				<a href="javascript:">
					<router-link to="/menu">菜单管理</router-link>
				</a>
			</li>
			<li class="lyy-nav-item" >
				<a href="javascript:">
					<router-link to="/order">订单管理</router-link>
				</a>
			</li>	
			<li class="lyy-nav-item" >
				<a href="javascript:">
					<router-link to="/menu">历史订单</router-link>
				</a>
			</li>				
		</ul>
	</div>	
</template>

<script type="text/javascript">
	import './nav.scss'
	import $ from 'jquery'

	export default {
		data(){
			return {
				navOpen: true
			}
		},
		methods:{
			
			toggleNav(event){
				this.navOpen = !this.navOpen;
				$('.lyy-nav-item').removeClass('active');
			}
		}
	}
</script>