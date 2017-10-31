<template>
	<div>
		<div class="form-group">
		    <input type="text" class="form-control" id="search" placeholder="搜索" v-model="names">
		    <button type="button" class="btn btn-info" @click.self="search">搜索</button>
		 </div>
		<div class="form-group">
		    <button type="button" class="btn btn-success" @click="dialogFormVisible = true">添加菜品</button>
		    <el-dialog title="添加菜品" :visible.sync="dialogFormVisible">
		      <el-form :model="form">
		        <el-form-item label="菜品名称" :label-width="formLabelWidth">
		          <el-input v-model="form.title" auto-complete="off"></el-input>
		        </el-form-item>
		        <el-form-item label="菜品价格" :label-width="formLabelWidth">
		          <el-input v-model="form.price" auto-complete="off"></el-input>
		        </el-form-item>
		        <el-form-item label="菜品图片" :label-width="formLabelWidth">
		          <el-input v-model="form.imgurl" auto-complete="off"></el-input>
		        </el-form-item>
		      </el-form>
		      <div slot="footer" class="dialog-footer">
		        <el-button @click="dialogFormVisible = false">取 消</el-button>
		        <el-button type="primary" @click.self="additem"  >确 定</el-button>
		      </div>
		    </el-dialog>
		 </div>
<<<<<<< HEAD
		<datagrid api="getgoods" apii="shanchu" cols="id,title,price,imgurl,type"></datagrid>
=======
		<datagrid api="getgoods" apii="shanchu" cols=""></datagrid>
>>>>>>> bc2e77b1f1b2501180b9bc3b9a61eac8c19bd059
		<fenye api="getAll"></fenye>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
	import fenye from '../fenye/fenye.vue'
	// $(function(){
	// 	console.log($('.btn-success'))
	// 	console.log($('#delbtn'))
	// 	$('#delbtn').on('click',function(e){
	// 		console.log(e.target)
	// 		console.log(666)
	// 	})
	// })
<<<<<<< HEAD
	
=======
>>>>>>> bc2e77b1f1b2501180b9bc3b9a61eac8c19bd059
	import Vue from 'vue'
	import $ from 'jquery'
	export default {
		components: {
			datagrid,
			fenye,
			
		},
		data() {
		    return {
		       	dialogTableVisible: false,
		        dialogFormVisible: false,
		        form: {
		          title: '',
		          price: '',
		          imgurl: '' 
		        },
		        formLabelWidth: '120px',
		        names:''
		    };
		},
		methods:{
			additem:function(){console.log(6660)	
				var self = this;console.log(self.form.title);
				$.get('http://localhost:88/additem',{'title':self.form.title, 'price':self.form.price, 'imgurl':self.form.imgurl},function(res){
					self.form.title='';
					self.form.price='';
					self.form.imgurl='';
					alert('添加成功！');
					// $.get('http://localhost:88/getgoods', function(data) {
					// 	console.log(data)
					// });
				})
			},
			search:function(){
				var self = this;
				$.get('http://localhost:88/search',{'names':self.names}, function(data) {
					console.log(data)
				});
			}
		}
  		
	}
</script>

<style lang="scss">
	.form-group{overflow: hidden;	
		input{float: left;width: 200px;}
		/*button{float: left;}*/
		&:first-child{float: left;}
		&:nth-child(2){width: 150px;float: right;}
	}
</style>