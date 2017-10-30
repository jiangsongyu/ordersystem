<template>
	<div>
		<lyy-header></lyy-header>
		<div class="lyy-body">
			<lyy-nav></lyy-nav>
			<div class="lyy-content">
				<div class="lyy-toolbar" style="background: #fff;">
					<a href="javascript:" class="btn btn-primary btn-sm" :class="value.class" v-if="toolList" v-for="(value,key) in toolList" @click="click(value)">{{value.text ? value.text : key}}</a>
				</div>
				<router-view class="lyy-viewer"></router-view>
			</div>
		</div>
		<!-- <div class="lyy-footer">@dk</div> -->
		<!-- <div class="toolbar">
			
			<input type="button" value="添加商品">
			
			<input type="button" value="添加商品">s
			<input type="button" value="添加商品">
			
		</div> -->
		<div>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	
	import nav from './nav/nav.vue'
	import header from './header/header.vue'
	export default {
		components: {
			'lyy-nav':nav,
			'lyy-header':header
		},
		data(){
			return {
				toolList: null
			}
		},
		methods: {
			addTool(arg){
				this.toolList = arg
			},
			click(arg){
				if(arg.event){
					arg.event()
				}
			}
		},
		methods: {
			generateToolBar: function(obj){
				//动态生成按钮
			}
		}
	}
</script>