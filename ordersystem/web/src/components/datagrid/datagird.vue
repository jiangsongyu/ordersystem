<template>
	<div>
		<table class="table table-striped">
			<thead>
				<tr>
					<th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
					<th>candel</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(obj, index) in dataset">
					<td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</td>
					<td>
						<button type="button" id="updabtn" class="btn btn-success btn-xs">修改</button>
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
	import Vue from 'vue'
		
		// console.log($('tr'))
		// $('#tr').on('click',function(e){
		// 	console.log(e.target)
		// 	console.log(666)
		// })
	
		
	
	

	export default {
		data: function(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			return {
				dataset: [],
				loadingShow: false,
				colsArray
			}
		},
		methods:{
			
			sm:function(e){
				var se = this;
				console.log(e.target)
				var target = e.target;
				var gd = target.parentNode.parentNode;
				var id = ($(gd).find('td').eq(0).text())*1;
				console.log(id);
				
				
				$(gd).remove();
				$.get('http://localhost:88/'+se.apii,{'id':id}, function(data) {
					console.log(data)
				});
			}
		},
		props: ['api', 'cols','apii'],
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data
			})
		},
		components: {
			loading
		}
	}
</script>