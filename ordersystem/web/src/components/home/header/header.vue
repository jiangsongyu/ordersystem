<template>
	<div class="lyy-header">
		<ul>
			<li><router-link to="/">点餐后台管理系统</router-link></li>
		</ul>
		<ul>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					Adminstrator
				</router-link>
			</li>						
		</ul>		
	</div>	
</template>

<script type="text/javascript">
	import './header.scss'
	// import $ from 'jquery'

	export default {
		// methods:{
		// 	nav(event){
		// 		let self = $(event.target);
		// 		if(!self.is('.dk-nav-item')){
		// 			self = self.closest('.dk-nav-item');
		// 		}
		// 		self.toggleClass('active');
		// 	}
		// }
	}
</script>