<template>
  <div id="app" @click="resetComponent">
    <div class="app-header">
      <router-link :to="{path:'/'}">
        <img src="./assets/logo.png">
      </router-link>
      <ol class="headerFont">
        <li>{{name}}</li>
        <li v-if="name==''" @click="log">登录</li>
        <li v-if="name==''" @click="reg">注册</li>
        <li @click="aboutMe">关于</li>
        <li v-if="name!=''" @click="back">退出</li>
      </ol>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">lucasStop</div>
    <DiaLog :isShow="aboutShowState" @on-close="closeDialog('aboutShowState')">
      <div>about</div>
    </DiaLog>
    <DiaLog :isShow="regShowState" @on-close="closeDialog('regShowState')">
      <regForm></regForm>
    </DiaLog>
    <DiaLog :isShow="logShowState" @on-close="closeDialog('logShowState')">
      <logForm @has-log='onSuccessLog'></logForm>
    </DiaLog>
  </div>
</template>
<script>
import { eventBus } from './eventBus'
import DiaLog from "./components/dialog";
import logForm from "./components/logForm";
import regForm from "./components/regForm";
console.log('App');
export default {
  components: {
    DiaLog
    ,logForm
    ,regForm
  },
  data(){
    return{
    aboutShowState:false
    ,regShowState:false
    ,logShowState:false
    ,name:''
    }
  },
  methods:{
    aboutMe(){
      this.aboutShowState=true;
    },
    reg(){
      this.regShowState=true;
    },
    log(){
      this.logShowState=true;
    },
    closeDialog(attr){
      this[attr]=false;
    },
    onSuccessLog(data){
      this.name = data.username;
      this.logShowState=false;
    },
    back(){
      this.name='';
    },
    resetComponent(){
      eventBus.$emit('reset-component')
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
