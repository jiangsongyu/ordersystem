<template>
    <div>
       
    </div>
</template>

<script type="text/javascript">
    
    import $ from 'jquery'

    export default {

        props: ['api','apii'],
        mounted: function(){
            var self = this;
            var arr = [];
            var dataset = self.$parent.$children[1].dataset;
            console.log(self.$parent.$children[1].formLabelWidth)
            
            console.log(this.api)
           $.ajax({
               url: 'http://localhost:88/'+self.api,
               type: 'GET',
               async:false,
               // data: {},
               success:function(res){
                   var nub = Math.ceil(res.length/10);
                   var nav = $('<nav/>').attr({ariaLabel: 'Page navigation'});
                   var ul = $('<ul/>').addClass('pagination');
                   
                  
                   for(var i=0; i < nub; i++){
                       var li = $('<li/>');
                       var a = $('<a/>').text(i+1);
                       a.appendTo(li);
                       li.appendTo(ul);
                   }
                  
                   ul.appendTo(nav);

                   nav.appendTo($('.lyy-content'));
                   ul.children('li').eq(0).addClass('active');
                   ul.on('click','li',function(){

                        $(this).addClass('active').siblings('li').removeClass('active');
                        var num = ($(this).text())*1;
                            $.ajax({
                                url: 'http://localhost:88/'+self.apii,
                                type: 'GET',
                                data: {'pageNo': num, 'qty':10},
                                async:false,
                                success:function(res){
                                    // console.log(res)
                                    // console.log(self)
                                    arr = res;
                                }
                            })
                        // console.log(arr)
                        self.$parent.$children[1].dataset= arr;
                       
                   })
                    
               }

           }) 
           
          
        }
    }
</script>
<style type="text/css">
  nav ul li a{cursor: pointer;}
</style>

