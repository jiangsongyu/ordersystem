<template>
    <div class="menulist">
        <ul>
            <li v-for="(obj, key) in dataset" :data-guid="obj.id">
                <img :src="obj.imgurl" alt="" />
                <p >{{obj.title}}</p>
                <span>￥{{obj.price}}<input type="button" class="btn btn-info btn-xs" value="加入购物车"/></span>
            </li>
        </ul>
        <loading v-show="loadingShow"></loading>
    </div>
</template>

<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
    import './menu.scss'

    export default {
        data: function(){
            var colsArray = this.cols ? this.cols.split(',') : [];
            return {
                dataset: [],
                loadingShow: false,
                colsArray
            }
        },
        props: ['api', 'cols','params'],
        mounted: function(){
            var self = this;
            /*http.get({
                url: this.api
                // params:this.params
            }).then(res => {
                self.dataset = res.data;
                // console.log(self.dataset);
            })*/
            $.get('http://localhost:88/getmenu', {
                params:self.params
            },function(res){
                self.dataset = res;
            })
        },
        updated: function(){
            var carlist=[];
            var cookies=document.cookie;
            if(cookies.length>0){
                cookies=cookies.split('=');
                if(cookies[0] === 'carlist'){
                    carlist = JSON.parse(cookies[1]);
                }
            };
            // 点击购物车
            $('.menulist').on('click', 'input', function(){
                // console.log(this);
                var has=false;
                //如果carlist里有已经存在的 则qty++，，
                for(var i=0;i<carlist.length;i++){
                    //数组里每个对象的id若已经存在一致的,不添加对象在数组里
                    if(carlist[i].id === $(this).parents('li').attr('data-guid')){
                        carlist[i].qty++;
                        has=true;
                        break;
                    }
                }
                if(!has){
                    var goods={
                        imgurl:$(this).parents('li').children('img').attr('src'),
                        name:$(this).parents('li').children('p').html(),
                        price:$(this).parents('li').children('span').text(),
                        qty:1,
                        id:$(this).parents('li').attr('data-guid')
                    }
                    carlist.push(goods);
                }
                //写入cookie
                var date=new Date();
                date.setDate(date.getDate()+7);
                document.cookie= 'carlist='+JSON.stringify(carlist)+';expires='+date.toUTCString();
            })
        },
        components: {
            loading
        }
    }
</script>