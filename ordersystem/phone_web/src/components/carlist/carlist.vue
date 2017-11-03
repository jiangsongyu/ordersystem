<template>
    <main  classs="bg-success">
        <table class="cqy-carlist">
            <thead>
                <tr>
                    <th class="col_select"><input type="checkbox" checked id="all" /></th>
                    <th class="col_num">序号</th>
                    <th class="dish_name">菜名</th>
                    <th class="unit_cost">单价</th>
                    <th class="col_qty">数量</th>
                    <th class="col_price">价格</th>
                    <th class="col_hander">操作</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        总价：
                    </td>
                    <td class="total">
                        
                    </td>
                    <td>
                        <router-link to="order"><button @click="addOrder($event)" type="button" class="btn btn-primary">去结算</button></router-link>
                    </td>
                </tr>
            </tfoot>
        </table>     
    </main>
</template>

<script type="text/javascript">
    import './carlist.scss'
    //$children
    export default {
        data: function(){
            return {
                dataset: []
            }
        },
        methods: {
            addOrder: function(e){
                $('#linkOrder').addClass('active').siblings().removeClass('active');
                // 生成订单
                var self = this;
            }
        },
        mounted: function(){
            // 购物车总金额 一开始为零元
            var $total = $('.total');
            $total.html("￥0.00元").css('color', '#f00');

            var carlist=[];
            var cookies=document.cookie;
            // console.log(cookies);
            if(cookies.length>0){
                data();
            };
            function data(){
                cookies=cookies.split('=');
                if(cookies[0] === 'carlist'){
                    carlist = JSON.parse(cookies[1]);
                };
                function showDish(){
                    carlist.map(function(item, idx){
                        var $tr = $('<tr/>').attr('data-guid', item.id);

                        var unit_cost = Number(item.price.substr(1));

                        // 同一个商品的总共价格
                        var col_total = unit_cost * item.qty;

                        var html = `
                            <td class="col_select"><input type="checkbox" checked/></td>
                            <td class="col_num">${idx+1}</td>
                            <td class="dish_name">${item.name}</td>
                            <td class="unit_cost">${unit_cost}</td>
                            <td class="col_qty">
                                <input type="button" class="btn-primary down" value="-">
                                <input type="text" value="${item.qty}"/>
                                <input type="button" class="btn-primary up" value="+">
                            </td>
                            <td class="col_price"><b>￥</b>${col_total}</td>
                            <td class="col_hander"><button type="button" class="close deleteGoods" aria-label="Close"><span aria-hidden="true">&times;</span></button></td>
                        `;
                        $tr.html(html);
                        $('tbody').append($tr);
                    });
                }
                // 显示菜单
                showDish();
                // 获取所有的复选框
                var $checkbox = $('tbody :checkbox');

                $('tbody').on('click', '.up', function(){
                    var qty = $(this).prev().val();
                    qty=Number(qty)+1;
                    $(this).prev().val(qty);

                    // 更改单个商品的价格
                    changeColTotal(qty,$(this));

                    // 增加的数量写入cookie
                    changValue(qty,$(this));
                    writeCookie();

                    // 总价格
                    totalPrice($('tbody .col_price'));
                }).
                on('click', '.down', function(){
                    var qty =$(this).next().val();
                    qty=Number(qty)-1;
                    if(qty<=1){
                        qty=1
                    };
                    $(this).next().val(qty);

                    // 更改单个商品的价格
                    changeColTotal(qty,$(this));

                    // 减少的数量写入cookie
                    changValue(qty,$(this));
                    writeCookie();

                    // 总价格
                    totalPrice($('tbody .col_price'));
                }).
                on('click','.deleteGoods',function(){
                    var res = confirm('你确定要删除这道菜吗');
                    if(res){
                        // 点击删除按钮找到对应的cookie对象 删除 再重新写入
                        var $guid = $(this).parents('tr').attr('data-guid');
                        for(var i=0;i<carlist.length;i++){                   
                            if(carlist[i].id===$guid){
                                carlist.splice(i,1);
                                break;
                            }
                        }

                        writeCookie();
                        // 重新写入页面 先清空
                        $('tbody').html('');
                        showDish();

                        // 写入总价格
                        totalPrice($('tbody .col_price'));                         
                    }        
                }).
                on('click', '.col_select', function(){
                    // 复选框点击时重新计算总价
                    totalPrice($('tbody .col_price'));
                    // checkbox如果全选 #all也选上 
                    var $checkedbox = $checkbox.filter(':checked');
                    $('#all').prop('checked',$checkbox.length === $checkedbox.length);
                });

                // 全选
                $('#all').click(function(){
                    $checkbox.prop('checked',this.checked);
                    totalPrice($('tbody .col_price'));
                })

                // 更改单个商品的总价格
                function changeColTotal(qty,ele){
                    var col_total = Number(ele.parents('tr').find('.unit_cost').text());
                    col_total *= qty;
                    // console.log(col_total);
                    ele.parents('tr').find('.col_price').html('<b>￥</b>' + col_total);
                }
                // 值的变化之后改变cookie
                function changValue(qty,ele){
                    var $guid = ele.parents('tr').attr('data-guid');
                    for(var i=0;i<carlist.length;i++){                   
                        // console.log($guid);
                        var $value = qty;
                        if(carlist[i].id === $guid){
                            carlist[i].qty=$value;
                            // console.log(carlist[i].qty);
                            break;
                        }
                    }               
                }
                // 写入cookie
                function writeCookie(){
                    var date=new Date();
                    date.setDate(date.getDate()+7);
                    document.cookie= 'carlist='+JSON.stringify(carlist)+';expires='+date.toUTCString();
                }
                // 总价格
                function totalPrice(ele){
                    // console.log(ele.parents('tr').find(':checked'));
                    var sum=0;
                    ele.each(function(idx,item){
                        if($(item).parents('tr').find(':checked').val()){
                            sum += Number(item.innerText.substr(1));
                        }
                    });
                    sum = sum.toFixed(2);
                    var total =`${sum}`;
                    $total.html(total);
                }
                //总价格 
                totalPrice($('tbody .col_price'));
            }
        }
    }
</script>