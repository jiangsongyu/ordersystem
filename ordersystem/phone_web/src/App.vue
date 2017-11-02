<template>
  <div id="app">
    <header class="header bg-primary">
        <ul>
            <li><span><i class="glyphicon glyphicon-chevron-left"></i></span></li>
            <li>XX餐厅点餐系统</li>
            <li><span><i class="glyphicon glyphicon-th-list"></i></span></li>
        </ul>
    </header>
    <router-view></router-view>
    <footer class="bg-primary">
        <ul>
            <li @click="activeStyle($event)">
                <router-link to="/goodslist">
                    <span><i class="glyphicon glyphicon-home"></i></span>首页
                </router-link>
            </li>
            <li @click="activeStyle($event)">
                <router-link to="carlist">
                    <span><i class="glyphicon glyphicon-cutlery"></i></span>购物车
                </router-link>
            </li>
            <li @click="activeStyle($event)" id="linkOrder">
                <router-link to="order">
                    <span><i class="glyphicon glyphicon-th-large"></i></span>订单
                </router-link>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script type="text/javascript">
    export default {
        methods: {
            activeStyle: function(e){
                $(e.target).css({'color': '#fff'});
                $(e.target).parents('li').addClass('active').siblings().removeClass('active');
            }
        }
    }
</script>

<style lang="scss">

    body,h1,h2,h3,h4,h5,h6,ul,li,ol,li,dl,dt,dd,p{
        margin:0;padding:0;
    }
    ul,li{
        list-style:none;
    }
    a{
        text-decoration:none;
    }
    img{
        border:0 none;
        display:block;
    }
    /*兼容到IE8只能写一个冒号*/
    .clearfix::after{
        content:"";
        display:block;
        height:0;
        clear:both;
        overflow:hidden;
        visibility:hidden;
        zoom:1;
    }
    input{
        padding:0;
        outline: none;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:12px;
        font-family: "微软雅黑";
    }
    body,html{
        font-size:16px;
        height:100%;
    }

    header,nav,main,footer{
        display: block;
    }

    #app{
        height:100%;
        display: flex;
        flex-direction: column;
    }
    header{
        ul{
            padding:0 10px;
            display: flex;
            justify-content:space-between;
            display:flex;
            li{
                height:40px;
                line-height:40px;
            }
            li:first-child,li:last-child{
                width:30px;
                text-align:center;
            }
        }
    }
    footer{
        border-top:1px solid #ccc;
        ul{
            display:flex;
            margin-bottom:0px;  
            li{
                flex:1;
                a{
                    flex:1;
                    display:flex;
                    color:#fff;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    border-right:1px solid #ccc;
                    font-size:12px;
                    padding-top:5px;
                    i{
                        font-size:16px;
                    }
                }      
            }
            li.active{
                background-color:#2e4e7e;
            }
        }
    }
</style>
