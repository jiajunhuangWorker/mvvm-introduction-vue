<template>
  <div id="app">
  <!-- 自定义指令
       两种方法
      一种是directives   局部的自定义指令
      Vue.directives     全局使用的指令
  -->
  <div class="tt">全局指令</div>
  <p v-css="{'color':'red','font-size':'20px','text-align':'center'}">hellow world</p>
  <input type="text" v-local-test v-model='test' value='666'>
  <div class="tt">路由name</div>
  <div>{{ $route.name }}</div>
  <!-- 命名的路由 -->
  <div class="tt">路由A和路由B</div>
  <router-view></router-view>
  <router-view name="viewa"></router-view>
  <router-view name="viewb"></router-view>
  <div class="tt">通过name跳转路由</div>
  <router-link :to="{name:'apple'}" >toApple</router-link>
  <router-link :to="{name:'appleRed'}" >toApple</router-link>
  <router-link :to="{name:'banner'}">toBanner</router-link>
  <div class="tt">通过path跳转路由</div>
  <router-link :to="{path:'apple',param:{color:'yellow'}}">toApple</router-link>
  <router-link :to="'/apple/red'">toAppleChild</router-link>
  
  <!-- 命名的路由视图，路由重定向 -->
  <div class="tt">通过/跳转路由</div>
  <router-link to="/apple">toApple</router-link>
  <router-link :to="'banner'">tobanana</router-link>
  <div class="tt">将路由转为li</div>
   <router-link :to="'apple'" tag="li">toApple3</router-link>
   
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
    return {
      apple:"/apple"
      ,test:""
    }
  }
  ,directives:{
    'local-test':function(el,binding,vnode){
      console.info(el.value)
      console.info(binding)
      console.info(vnode)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mtt,.tt{
  font-size:16px;
  font-weight:700;
  margin-top:30px;
}
.tt:first-child{
  margin-top:0;
}
.mtt{
  font-size:14px;
  margin-top:15px;
}
</style>
