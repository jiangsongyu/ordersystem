<template>
    <main  classs="bg-success">
        <ul class="cqy-order">
            <li v-for="(obj, index) in dataset">
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
                <span>总价格：{{obj.totalPrice}}元</span>
            </li>
        </ul>
        <div class="noOrder">
            <p class="label label-info"><span class="glyphicon glyphicon-volume-up"></span> 您还没有点餐哦~</p>
        </div>
    </main>
</template>

<script type="text/javascript">
    //$children
    // import $ from 'jquery'
    import './order.scss'
    export default {
        data: function(){
            return {
                dataset:[],
                menudata:[],
                userid:''
            }
        },
        mounted: function(){
            var self = this;
            // 发请求
            $.get('http://localhost:88/selectOrder',{
                userid:self.userid
            }, function(res){
                self.dataset = res;
                // console.log(self.dataset);
                for(var i=0; i<res.length;i++){
                    // 订单id搜索对应内容
                    // console.log(res[i].id);
                    if(self.dataset.length != 0){
                        $('.noOrder').css('display', 'none');
                    }
                    $.get('http://localhost:88/selectMenu', {
                        orderid:res[i].id
                    },  function(res1){
                        self.menudata.push(res1);
                        // console.log(self.menudata);
                    });
                }                    
            })
            this.skt();
        },
        beforeMount: function(){
            this.userid = localStorage.getItem('userid');
        },
        methods:{
            skt:function(){
                var socket = null;
                socket = new WebSocket('ws://localhost:888');
                socket.onopen = function(){
                    socket.send('订单页面已连接');
                }
                socket.onmessage = function(msg){
                    console.log(msg)
                    if(msg.data == 2){
                       $('.sta').text('正在制作');              
                    };
                    if(msg.data == 3){
                       $('.sta').text('已上菜');
                       $('.cbtn').show();              
                    }


                }
                
                socket.onclose = function(){
                    socket = null;
                }
                socket.onerror = function(){
                    socket = null;
                }
            }
        }
    }
</script>