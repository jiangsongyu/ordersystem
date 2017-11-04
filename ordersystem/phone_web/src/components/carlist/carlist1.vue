<template>
    <main  classs="bg-success">
        <table class="cqy-carlist">
            <thead>
                <tr>
                    <th class="col_select" @click="selectAll($event)"><input v-model="selectStatus" type="checkbox" id="all" /></th>
                    <th class="col_num">序号</th>
                    <th class="dish_name">菜名</th>
                    <th class="unit_cost">单价</th>
                    <th class="col_qty">数量</th>
                    <th class="col_price">价格</th>
                    <th class="col_hander">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj, index) in dataset" :data-guid="obj.id">
                    <td class="col_select" @click="selectGoods($event)"><input type="checkbox" v-model="selectStatus"/></td>
                    <td class="col_num">{{index+1}}</td>
                    <td class="dish_name">{{obj.name}}</td>
                    <td class="unit_cost">{{Number(obj.price.substr(1))}}</td>
                    <td class="col_qty">
                        <input type="button" class="btn-primary down" value="-" @click="changeValue(obj.qty, $event)">
                        <input type="text" v-model="obj.qty"/>
                        <input type="button" class="btn-primary up" value="+" @click="changeValue(obj.qty, $event)">
                    </td>
                    <td class="col_price"><b>￥</b>{{Number(obj.price.substr(1)) * obj.qty}}</td>
                    <td class="col_hander"><button type="button" class="close" @click="deleteGoods($event)" aria-label="Close"><span aria-hidden="true">&times;</span></button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        总价：
                    </td>
                    <td class="total">
                        
                    </td>
                    <td>
                        <button @click="addOrder($event)" type="button" class="btn btn-sm btn-primary">加入订单</button>
                    </td>
                </tr>
            </tfoot>
        </table>
        <button  type="button" class="btn btn-xs clearCarlist" @click="clearCarlist">清空购物车</button>
        <div class="isLogin"></div>
    </main>
</template>

<script type="text/javascript">
    import './carlist.scss'
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
    import router from '../../router/index.js'
    import Vue from 'vue'
    import io from 'vue-socket.io'
    Vue.use(io,'http://localhost:888')
    export default {
        data: function(){
            return {
                dataset: [],
                selectStatus: true,
                userID:''
            }
        },
        methods: {
            // 添加订单
            addOrder: function(e){
                this.userID = localStorage.getItem('userid');
                // 生成订单:用户名不为空才能下单
                var self = this;
                if(this.userID != null){
                    $.get('http://localhost:88/addOrder',{
                        status:"未付款",
                        data:self.dataset,
                        total:$('.total').text(),
                        userid:self.userID
                    },function(res){
                        router.push({name: 'order'});
                        $('#linkOrder').addClass('active').siblings().removeClass('active');
                        self.$socket.emit('order');
                    })
                }else{
                    $('.isLogin').html('您还没有登录，请先登录再下单');
                }
            },
            // 改变商品数量
            changeValue: function(qty, ele){
                var $guid = $(ele.target).parents('tr').attr('data-guid');
                if(ele.target.className.indexOf('up') >= 0){
                    qty++;
                }else{
                    qty--;
                    if(qty <= 1){
                        qty=1
                    }
                }
                for(var i=0;i<this.dataset.length;i++){                   
                    // console.log($guid);
                    var $value = qty;
                    if(this.dataset[i].id === $guid){
                        this.dataset[i].qty=$value;
                        break;
                    }
                }
                var carlist = this.dataset;
                this.writeCookie(carlist);
                this.totalPrice();
            },
            // 改变总价格
            totalPrice: function(){
                // console.log(e.target);
                // 购物车总金额 一开始为零元
                var $total = $('.total');
                $total.html("￥0.00元").css('color', '#f00');

                //总价格
                var sum=0;
                for(var i = 0; i < this.dataset.length; i++){
                    if(this.selectStatus){
                        sum += Number(this.dataset[i].price.substr(1)) * this.dataset[i].qty;
                    }                       
                }
                sum = sum.toFixed(2);
                var total =`${sum}`;
                $total.html(total); 
            },
            // 删除商品
            deleteGoods: function(e){
                var res = confirm('你确定要删除这道菜吗');
                if(res){
                    // 点击删除按钮找到对应的dataset 删除 再重新写入cookie
                    var $guid = $(e.target).parents('tr').attr('data-guid'); 
                    for(var i = 0; i < this.dataset.length; i++){
                        if(this.dataset[i].id===$guid){
                            this.dataset.splice(i,1);
                            break;
                        }
                    } 
                    // 计算价格
                    this.totalPrice();
                    // 重新写入cookie
                    var carlist = this.dataset;
                    this.writeCookie(carlist);                     
                }
            },
            // 复选框
            selectGoods: function(e){
                this.selectStatus = e.target.checked;
                this.totalPrice();
            },
            // 全选
            selectAll: function(e){
                /*var $checkbox = $('tbody :checkbox');
                $checkbox.prop('checked',e.target.checked);*/
                this.selectStatus = e.target.checked;
                this.totalPrice();
            },
            // 写入cookie
            writeCookie: function(carlist){
                var date=new Date();
                date.setDate(date.getDate()+7);
                document.cookie= 'carlist='+JSON.stringify(carlist)+';expires='+date.toUTCString();
            },
            // 清空购物车
            clearCarlist: function(){
                var carlist = this.dataset;
                this.dataset = [];
                var date=new Date();
                date.setDate(date.getDate()-7);
                document.cookie= 'carlist='+JSON.stringify(carlist)+';expires='+date.toUTCString();
                $('.total').text('0.00');
            }
        },
        sockets:{
            addToCar: function(val){
                // console.log(this.$socket.id)
                // io.emit()
               }
         },
        mounted: function(){
            var carlist=[];
            var cookies=document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] === 'carlist'){
                        carlist = JSON.parse(temp[1]);
                    };
                })
            };
            this.dataset = carlist;
            this.totalPrice();

        }
    }
</script>