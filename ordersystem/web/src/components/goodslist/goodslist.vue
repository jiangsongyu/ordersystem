<template>
	<div>
		<div class="form-group">
		    <input type="text" class="form-control" id="search" placeholder="搜索" v-model="names" @keyup.13="search('search')">
		    <button type="button" class="btn btn-info" @click.self="search('search')" >搜索</button>
		 </div>
		<div class="form-group">
		    <button type="button" class="btn btn-success" @click="dialogFormVisible = true">添加菜品</button>
		    <el-dialog title="添加菜品" :visible.sync="dialogFormVisible">
		      <el-form :model="form">
		        <el-form-item label="菜品类型" :label-width="formLabelWidth">
		          <el-input v-model="form.type" auto-complete="off"></el-input>
		        </el-form-item>
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
		<datagrid api="getgoods" apii="shanchu" apiii="xiugai" cols="id,title,price,imgurl,type"></datagrid>
		<fenye api="getAll" apii="fenye"></fenye>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
	import fenye from '../fenye/fenye.vue'
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
		          imgurl: '',
		          type: ''
		        },
		        formLabelWidth: '120px',
		        names:''
		    };
		},
		methods:{
			additem:function(){console.log(6660)	
				var self = this;console.log(self.form.title);
				$.get('http://localhost:88/additem',{'type':self.form.type,'title':self.form.title, 'price':self.form.price, 'imgurl':self.form.imgurl},function(res){
					self.form.title='';
					self.form.price='';
					self.form.imgurl='';
					self.form.type='';
					alert('添加成功！');
					$.get('http://localhost:88/getgoods', function(data) {
						console.log(data)
					});
				})
			},
			search:function(sh){
				var self = this;
				console.log(self.$children[1].dataset)
				$.get('http://localhost:88/'+sh,{'names':self.names}, function(data) {
					console.log(data)
					self.$children[1].dataset = data;
					self.names = '';
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