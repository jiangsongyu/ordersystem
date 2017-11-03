<template>
    <div class="login">
        <div class="form-horizontal form">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">登录</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="username" placeholder="请输入登录名">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" @click="cqylogin($event)">登录</button>
                    <button type="submit" class="btn btn-default" @click="cqylogout($event)">退出</button>
                </div>
                <span class="resMessage"></span>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './login.scss'
    import router from '../../router/'
    export default {
        methods:{
            cqylogin:function(e){
                var userid = $('#username').val();
                if(userid.length != 0){
                    localStorage.setItem("userid",userid);
                    $('.resMessage').html('登录成功').css('color','#58bc58');
                    router.push({name: 'goodslist'})
                } else{
                    $('.resMessage').html('登录失败，请输入登录名').css('color','#f00');
                }   
            },
            cqylogout:function(e){
                localStorage.removeItem("userid");
                $('.resMessage').html('已退出').css('color','#58bc58');
            }
        }
    }
</script>