<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj, index) in dataset">
                    <td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</td>
                </tr>
            </tbody>
        </table>
        <loading v-show="loadingShow"></loading>
    </div>
</template>

<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
    import $ from 'jquery'
    import Vue from 'vue'

    export default {
        data: function(){
            var colsArray = this.cols ? this.cols.split(',') : [];
            return {
                dataset: [],
                loadingShow: false,
                colsArray,
                show:true,
                hide:false
            }
        },
        methods:{
            
            cook:function(e){
                var parent = $(event.target).parent().parent().children();
                var id = parent.eq(0).text();
                var self = this;
                var e = $(event.target);
                $.get('http://localhost:88/xiugaiorder', {'id':id, 'status': '正在制作'}, function(data) {
                    // console.log(data)
                    $.get('http://localhost:88/getAllOrder', function(data) {
                        self.dataset = data;
                        e.hide();
                        e.next('button').show();
                        e.next('button').next('button').hide();
                    });
                });
            },

            finish:function(event){
                var parent = $(event.target).parent().parent().children();
                var id = parent.eq(0).text();
                var self = this;
                var e = $(event.target);
                $.get('http://localhost:88/xiugaiorder', {'id':id, 'status': '已上菜'}, function(data) {
                    // console.log(data)
                    $.get('http://localhost:88/getAllOrder', function(data) {
                        self.dataset = data;
                        e.hide();
                        e.next('button').show();
                    });
                });
                    
            },

            gohistory:function(event){
                var parent = $(event.target).parent().parent().children();
                var id = parent.eq(0).text();
                var self = this;
                var e = $(event.target);
                $.get('http://localhost:88/xiugaiorder', {'id':id, 'status': '已上菜'}, function(data) {
                    // console.log(data)
                    $.get('http://localhost:88/getAllOrder', function(data) {
                        self.dataset = data;
                        e.hide();
                        e.next('button').show();
                    });
                });
                    
            }
            
        },  
        props: ['api', 'cols'],
        mounted: function(){
            var self = this;
            http.get({
                url: self.api
            }).then(res => {console.log(res);
                self.dataset = res.data
            })
        },
        components: {
            loading
        }
    }
</script>