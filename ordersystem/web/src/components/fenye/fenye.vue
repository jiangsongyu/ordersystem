<template>
    <div>
       
    </div>
</template>

<script type="text/javascript">
    
    import $ from 'jquery'

    export default {
        props: ['api'],
        mounted: function(){
            var self = this;
            console.log(this.api)
           $.ajax({
               url: 'http://localhost:88/'+self.api,
               type: 'GET',
               // data: {},
               success:function(res){
                   var nub = Math.ceil(res.length/10);
                   var nav = $('<nav/>').attr({ariaLabel: 'Page navigation'});
                   var ul = $('<ul/>').addClass('pagination');
                   
                   // var html = `<li>
                   //   <a class="previous" aria-label="Previous">
                   //     <span aria-hidden="true">&laquo;</span>
                   //   </a>
                   // </li>`;
                   // ul.append(html);
                   for(var i=0; i < 10; i++){
                       var li = $('<li/>');
                       var a = $('<a/>').text(i+1);
                       a.appendTo(li);
                       li.appendTo(ul);
                   }
                   // var html1 = `<li>
                   //       <a class="next" aria-label="Next">
                   //         <span aria-hidden="true">&raquo;</span>
                   //       </a>
                   //     </li>`;

                   // ul.append(html1);
                   ul.appendTo(nav);

                   nav.appendTo($('.lyy-content'));
                   ul.children('li').eq(1).addClass('active');
                   ul.on('click','li',function(){
                        $(this).addClass('active').siblings('li').removeClass('active');
                        var num = ($(this).text())*1;
                        if($(this).children('a').hasClass('previous')){
                            // num++;
                            // $.ajax({
                            //     url: 'http://localhost:88/fenye',
                            //     type: 'GET',
                            //     data: {'pageNo': num, 'qty':10},
                            //     success:function(res){
                            //         console.log(res)
                            //     }
                            // })
                            
                        } else if($(this).children('a').hasClass('next')){
                            // num--;
                            // $.ajax({
                            //     url: 'http://localhost:88/fenye',
                            //     type: 'GET',
                            //     data: {'pageNo': num, 'qty':10},
                            //     success:function(res){
                            //         console.log(res)
                            //     }
                            // })
                            
                        } else{
                            $.ajax({
                                url: 'http://localhost:88/fenye',
                                type: 'GET',
                                data: {'pageNo': num, 'qty':10},
                                success:function(res){
                                    console.log(res)
                                }
                            })
                        }
                       
                        
                        
                   })

               }
           }) 
        }
    }
</script>

