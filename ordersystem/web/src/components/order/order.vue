<template>
	<div>
		<div class="form-group">
		    <input type="text" class="form-control" id="search" placeholder="搜索" v-model="names" @keyup.13="search('searchOrder')">
		    <button type="button" class="btn btn-info" @click.self="search('searchOrder')" >搜索</button>
		 </div>
		<datagrid api="getOrder" cols="id,title,price,imgurl,status"></datagrid>
		<fenye api="getAllOrder" apii="fenyeOrder"></fenye>
	</div>
</template>

<script type="text/javascript">

	import datagrid from '../datagrid/datagirdorder.vue'
	import fenye from '../fenye/fenye.vue'
	import Vue from 'vue'
	import $ from 'jquery'
	export default {
		components: {
			datagrid,
			fenye
			
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