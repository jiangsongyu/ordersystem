<template>
    <div>
       <div class="block">
         <el-pagination
           layout="prev, pager, next"
           :total="(nub*10)"
           @current-change="currentChange($event)"
           >
         </el-pagination>
       </div>
    </div>
</template>

<script type="text/javascript">
    import Vue from 'vue'
    import $ from 'jquery'

    export default {
        data(){
          return{
            nub:0
          }
        },
        props: ['api','apii'],
        mounted: function(){
            var self = this;
            var arr = [];
            var dataset = self.$parent.$children[1].dataset;
            console.log(self.$parent.$children[1].formLabelWidth)
            $('nav').remove();
            console.log(this.api)
            $.ajax({
               url: 'http://localhost:88/'+self.api,
               type: 'GET',
               // async:false,
               // data: {},
               success:function(res){
                   var nub = Math.ceil(res.length/10);
                   self.nub = nub;      
               }
           }) 
        },
        methods: {
            currentChange: function(idx){
              var self = this;
              $.ajax({
                  url: 'http://localhost:88/'+self.apii,
                  type: 'GET',
                  data: {'pageNo': idx, 'qty':10},
                  // async:false,
                  success:function(res){
                      self.$parent.$children[1].dataset= res;
                  }
              })
            }
        }
    }
</script>
<style type="text/css">
  nav ul li a{cursor: pointer;}
</style>

