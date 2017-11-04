<template>
    <main  classs="bg-success">
        <ul class="cqy-order">
            <li :data-guid="obj.id" v-for="(obj, index) in dataset">
                <p>订单流水：{{obj.id}}<span class="sta">{{obj.status}}</span></p>
                <table>
                    <thead>
                        <tr>
                            <th class="cqy-order-colnum">序号</th>
                            <th class="cqy-order-colname">商品名字</th>
                            <th class="cqy-order-colqty">数量</th>
                            <th class="cqy-order-colprice">价格</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(object, idx) in menudata[index]">
                            <td class="cqy-order-colnum">{{idx+1}}</td>
                            <td class="cqy-order-colname">{{object.name}}</td>
                            <td class="cqy-order-colqty">{{object.qty}}</td>
                            <td class="cqy-order-colprice">{{Number(object.price.substr(1)) * object.qty}}</td>
                        </tr>
                    </tbody>    
                </table>
                <p>
                    <span>总价格：{{obj.totalPrice}}元</span>
                    <span><button type="button" class="btn btn-info btn-xs changeback"@click="deleteOrder($event)">退单</button><button type="button" class="accountMoney btn btn-info btn-xs" @click.once="account($event)">结账</button></span>
                </p>
            </li>
        </ul>
        <div class="noOrder">
            <p class="label label-info"><span class="glyphicon glyphicon-volume-up"></span> 您还没有点餐哦~</p>
        </div>
    </main>
</template>

<script type="text/javascript">
    import Vue from 'vue'
    import io from 'vue-socket.io'
    import './order.scss'
    Vue.use(io,'http://localhost:888')
    export default {
        data: function(){
            return {
                dataset:[],
                menudata:[],
                userid:''
            }
        },
        mounted: function(){
            // 发请求
            this.sendRequest();
        },
        beforeMount: function(){
            this.userid = localStorage.getItem('userid');
        },
        updated:function(){
            // 是否出现结账按钮
            $.each(this.dataset, function(idx,item){
                if(item.status != '已上菜'){
                    $('.accountMoney').eq(idx).css('display', 'none');
                }
                if(item.status != '未付款'){
                    $('.changeback').eq(idx).css('display', 'none');
                }
            });
        },
        methods:{
            deleteOrder:function(e){
                var res = confirm('你确定要退掉这个订单吗');
                if(res){
                    var status = $(e.target).parents('li').find('span').eq(0).text();
                    if(status != '未付款'){
                        alert('菜品已经制作不能取消');
                        return;
                    }
                    var self = this;
                    var orderid = $(e.target).parents('li').attr('data-guid');
                    $.get('http://localhost:88/deleteOrder',{
                        orderid:orderid
                    }, function(res){
                        var $deleteId = $(e.target).parents('li').attr('data-guid');
                        for(var i = 0;i<self.dataset.length;i++){
                            if(self.dataset[i].id == $deleteId){
                                self.dataset.splice(i,1);
                            }
                        }
                    })
                }                    
            },
            account:function(e){
                // console.log($(e.target));
                var self = this;
                var status = $(e.target).parents('li').find('span').eq(0).text();
                if(status == '已付款'){
                    alert('您已经结账啦');
                    return;
                }
                var orderid = $(e.target).parents('li').attr('data-guid');
                $.get('http://localhost:88/account',{
                    orderid:orderid,
                    status:"已付款"
                },function(res){

                    // 结账后重新请求数据库的内容
                    self.sendRequest();
                    // 结账之后后台监听
                    self.$socket.emit('wan');
                    $.get('http://localhost:88/selectONEOrder',{
                       id:orderid
                    },function(res){console.log(res);
                      $.get('http://localhost:88/addTo2His',{
                          orderid:res[0].id,
                          totalPrice:res[0].totalPrice,
                          userid: res[0].userid
                      },function(res){
                         console.log(res);
                      })
                   })
                });             
            },
            sendRequest:function(){
                var self = this;
                // 发请求
                $.get('http://localhost:88/selectOrder',{
                    userid:self.userid
                }, function(res){
                    self.dataset = res;
                    for(var i=0; i<res.length;i++){
                        if(self.dataset.length != 0){
                            $('.noOrder').css('display', 'none');
                        }
                        $.get('http://localhost:88/selectMenu', {
                            orderid:res[i].id
                        },  function(res1){
                            self.menudata.push(res1);
                        });
                    }                    
                });
            }
        },
        sockets:{
            cook: function(){
                console.log(666)
                var self = this;
                this.sendRequest();
            },
            shangcai: function(){
                var self = this;
               // 发请求 
                this.sendRequest();        
            }
        }
    }
</script>