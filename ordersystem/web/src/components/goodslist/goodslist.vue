<template>
	<div>
		<div class="form-group">
		    <input type="text" class="form-control" id="search" placeholder="搜索">
		    <button type="button" class="btn btn-info">搜索</button>
		 </div>
		<div class="form-group">
		    <button type="button" class="btn btn-success">添加菜品</button>
		 </div>
		<datagrid api="getgoods" cols=""></datagrid>
		<fenye api="getAll"></fenye>
		<div>
	      <el-button>默认按钮</el-button>
	      <el-button type="primary">主要按钮</el-button>
	      <el-button type="success">成功按钮</el-button>
	      <el-button type="info">信息按钮</el-button>
	      <el-button type="warning">警告按钮</el-button>
	      <el-button type="danger">危险按钮</el-button>
    	</div>//test element ui  success
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
	import fenye from '../fenye/fenye.vue'

	export default {
		components: {
			datagrid,
			fenye
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