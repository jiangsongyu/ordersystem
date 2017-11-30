<template>
	<div>
		<table class="table table-striped">
			<thead>
				<tr>
					<th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
					<th>图片</th>
					<th>candel</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(obj, index) in dataset">
					<td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</td>
					<td><img :src="obj.imgurl" height="100" width="100"/></td>
					<td>
						<button type="button" id="updabtn" class="btn btn-success btn-xs upt" @click.self="up($event)">修改</button>
						<el-dialog title="修改菜品" :visible.sync="dialogFormVisible">
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
						  </el-form>
						  <div slot="footer" class="dialog-footer">
						    <el-button @click="dialogFormVisible = false">取 消</el-button>
						    <el-button type="primary" @click.self="comfir" >确 定</el-button>
						  </div>
						</el-dialog>
						<button type="button" id="delbtn" class="btn btn-danger btn-xs" @click.self="sm">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
		<loading v-show="loadingShow"></loading>
	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import loading from '../loading/loading.vue'
	import $ from 'jquery'
	// import jQuery from 'jquery'
	// import '../../assets/bootstrap/js/bootstrap.min.js'
	import Vue from 'vue'
	export default {
		data: function(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			return {
				dataset: [],
				loadingShow: false,
				colsArray,
				dialogFormVisible: false,
				dialogVisible:false,
				form: {
				   title: '',
				   price: '',
				   imgurl: '',
				   id: '',
				   type:''
				},
				formLabelWidth: '120px'
			}
		},
		methods:{
			
			sm:function(e){
				var se = this;
				// console.log(e.target)
				var target = e.target;
				var gd = target.parentNode.parentNode;
				var id = ($(gd).find('td').eq(0).text())*1;
				// console.log(id);
				
				
				$(gd).remove();
				$.get('http://localhost:88/'+se.apii,{'id':id}, function(data) {
					console.log(data)
				});
			},
			
			up:function(event){
				this.dialogFormVisible = true;
				var parent = $(event.target).parent().parent().children();
				console.log(parent.eq(0).text(),parent.eq(1).text(),parent.eq(2).text(),parent.eq(3).text(),parent.eq(4).text())
				var id = parent.eq(0).text();
				var title = parent.eq(1).text();
				var price = parent.eq(3).text();
				// var imgurl = parent.eq(3).text();
				var type = parent.eq(4).text();
				this.form.id = id;
				this.form.title = title;
				this.form.price = price;
				// this.form.imgurl = imgurl;
				this.form.type = type;
				console.log(this.form.id,this.form.title,this.form.price,this.form.type)	
			}
			,
			comfir:function(){
				this.dialogFormVisible = false;
				var self = this;
				console.log(self.form.title, self.form.price, self.form.imgurl, self.form.type, self.form.id);
				$.get('http://localhost:88/' +self.apiii,{'title':self.form.title, 'price':self.form.price,'type':self.form.type, 'id': self.form.id}, function(data) {
					// console.log(data);//此处写发请求刷新页面
					$.get('http://localhost:88/'+self.api, function(data) {
						console.log(data)
						self.dataset = data;
					});

				});
			}
		},	
		props: ['api', 'cols','apii','apiii'],
		mounted: function(){
			var self = this;
			http.get({
				url: self.api
			}).then(res => {console.log(res);
				self.dataset = res.data
			});

		},
		components: {
			loading
		}
	}
</script>