<template>
  <div>
     <div class="app-header">
      <img src="../assets/logo.png">
      <ol class="headerFont">
        <li>登录</li>
        <li>注册</li>
        <li>关于</li>
      </ol>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="app-footer">lucasStop</div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang='scss'>
$b-4e5a6d:#4e5a6d;//顶部底色
$b-757e83:#757e83;//辅助文字
$padding:0 15px;//基础padding
*{
  margin:0;
  padding:0;
}
ol,li,ul{
  list-style:none;
}
body{
  background:#d5d9de;
}
.app-footer,.app-header{
  height:50px;
  line-height:50px;
  overflow:hidden;
  width:100%;
  background:$b-4e5a6d;
  padding:$padding;
  box-sizing:border-box;
  text-align:right;
  font-size:14px;
  color:#fff;
  img{
    width:30px;
    float:left;
    margin-top:10px;
  }
  .headerFont{
    float:right;
    li{
      float:left;
      padding:0 5px;
      cursor:pointer;
      &:after{
        content:'';
        display:inline-block;
        border-right:1px solid #fff;
        height:20px;
        float:right;
        margin-top:15px;
        padding-left:7px;
      }
      &:last-child{
        &:after{
          content:'';
          border-right:0;
        }
      }
    }
  }
}
.app-footer{
  text-align:center;
  background:#999;
  color:#fff;
}
</style>

