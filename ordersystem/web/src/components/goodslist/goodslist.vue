<template>
	<div>
		<div class="form-group">
		    <input type="text" class="form-control" id="search" placeholder="搜索">
		    <button type="button" class="btn btn-info">搜索</button>
		 </div>
		<div class="form-group">
		    <button type="button" class="btn btn-success">添加菜品</button>
		 </div>
		<datagrid api="getgoods" cols="id,saleprice,price,title"></datagrid>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
	//generate three buttons
	//$prent
	export default {
		components: {
			datagrid
		}
	}
</script>

<style lang="scss">
	.form-group{overflow: hidden;	
		input{float: left;width: 200px;}
		button{float: left;}
		&:first-child{float: left;}
		&:nth-child(2){width: 150px;float: right;}
	}
</style>