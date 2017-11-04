<template>
	<div>
		<el-button
		    plain
		    @click="open" v-show='false'>
		</el-button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
					<th>details</th>
					<th>candel</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(obj, index) in dataset">
					<td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) 	|| !colsArray[0]">{{value}}
					</td>
					<td>
						<table class="table table-bordered">
							<thead>
							    <tr>
							        <th >商品名字</th>
							        <th >数量</th>
							    </tr>
							</thead>
						    <tbody>
						        <tr v-for="(object, idx) in menudata[index]">
						            <td >{{object.name}}</td>
						            <td >{{object.qty}}</td>
						        </tr>
						    </tbody>    
						</table>
					</td>
					<td v-for="(value, key) in obj" v-if="(csArray[0] && csArray.indexOf(key) > -1) 	|| !csArray[0]">
						<button type="button" id="updabtn" class="btn btn-success btn-xs upt" @click.self="cook($event)" v-show = "show">{{value}}</button>
						<!-- <button type="button" id="delbtn" class="btn btn-primary btn-xs" @click.self="finish($event)" v-show = "hide">上菜</button>
						<button type="button" class="btn btn-xs btn-success" @click.self="gohistory"  v-show = "hide" >完成</button> -->
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
	import Vue from 'vue'
	import io from 'vue-socket.io'
	Vue.use(io,'http://localhost:888')


	export default {
		data: function(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			var csArray = this.cs ? this.cs.split(',') : [];
			return {
				dataset: [],
				menudata:[],
				loadingShow: false,
				colsArray,
				csArray,
				show:true,
				hide:false
			}
		},
		methods:{
			// texx:function(){
			// 	console.log(self.dataset,$('tr'))
			// 	// for(var i=0;i<)
			// },
			cook:function(e){
				console.log($(e.target).html())
				var target = $(e.target).html();
				if(target == '未付款'){
					var parent = $(event.target).parent().parent().children();
					var id = parent.eq(0).text();
					var self = this;
					var e = $(event.target);
					$.get('http://localhost:88/xiugaiorder', {'id':id, 'status': '正在制作'}, function(data) {
						// console.log(data)
						$.get('http://localhost:88/getAllOrder', function(data) {
							self.dataset = data;
							
							
						});
					});
					this.$socket.emit('cooking');
				} else if (target == '正在制作'){
					this.finish(e)
				} 
				
			},

			finish:function(event){
				var parent = $(event.target).parent().parent().children();
				var id = parent.eq(0).text();
				var self = this;
				var e = $(event.target);
				$.get('http://localhost:88/xiugaiorder', {'id':id, 'status': '已上菜'}, function(data) {
					// console.log(data)
					$.get('http://localhost:88/getAllOrder', function(data) {
						self.dataset = data;
						
					});
				});
				this.$socket.emit('shangcai');
					
			},

			gohistory:function(event){
				// var parent = $(event.target).parent().parent().children();
				// var id = parent.eq(0).text();
				// var self = this;
				// var e = $(event.target);
				// $.get('http://localhost:88/xiugaiorder', {'id':id, 'status': '已买单'}, function(data) {
				// 	// console.log(data)
				// 	$.get('http://localhost:88/getAllOrder', function(data) {
				// 		self.dataset = data;
				// 		// $.get('http://localhost:88/addToHis', {'id':id}, function(data){

				// 		// }
				// 	});
				// });		
			},

			open() {
		        const h = this.$createElement;

		        this.$notify({
		          title: '订单',
		          message: h('i', { style: 'color: teal'}, '你有新的订单，请及时处理')
		        });
		      },

			
		},	
		sockets:{
			cc: function(val){
			   	console.log(this.$socket.id)
			},
			newOrder: function(val){
			   	this.open();
			   	var self = this;
			   	http.get({
			   		url: self.api
			   	}).then(res => {
			   		self.dataset = res.data;
			   		for(var i=0; i<res.data.length;i++){
			   		    $.get('http://localhost:88/selectMenu', {
			   		        orderid:res.data[i].id
			   		    },  function(res1){
			   		        self.menudata.push(res1);
			   		    });
			   		}        
			   	})
			},
			wanc: function(){
			   var self = this;
			   http.get({
			   	url: self.api
			   }).then(res => {
			   	self.dataset = res.data;
			   	for(var i=0; i<res.data.length;i++){
			   	    $.get('http://localhost:88/selectMenu', {
			   	        orderid:res.data[i].id
			   	    },  function(res1){
			   	        self.menudata.push(res1);
			   	    });
			   	} 
			   	// console.log(self.dataset)
			   	self.dataset.forEach(function(item,idx){
			   		// console.log(item.status)
			   		console.log(self.dataset,$('tr'))
			   		// if(item.status == '未付款'){

			   		// }
			   	})      
			   })
			}
		 },
		props: ['api', 'cols','cs'],
		mounted: function(){
			var self = this;
			http.get({
				url: self.api
			}).then(res => {
				self.dataset = res.data;
				for(var i=0; i<res.data.length;i++){
				    $.get('http://localhost:88/selectMenu', {
				        orderid:res.data[i].id
				    },  function(res1){
				        self.menudata.push(res1);
				    });
				} 
				// console.log(self.dataset)
				self.dataset.forEach(function(item,idx){
					// console.log(item.status)
					console.log(self.dataset,$('tr'))
					// if(item.status == '未付款'){

					// }
				})      
			})
			this.$socket.emit('connent');
			
		},
		components: {
			loading
		}
	}
</script>
<style>
	
</style>