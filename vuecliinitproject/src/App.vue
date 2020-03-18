<template>
  <div id="app">
  <!-- 自定义指令
       两种方法
      一种是directives   局部的自定义指令
      Vue.directives     全局使用的指令
  -->
  <div class="tt">全局指令</div>
  <p v-css="{'color':'red','font-size':'20px','text-align':'left'}">hellow world</p>
  <p v-></p>
  <input type="text" name="" v-focus>
  <!-- 命名的路由 -->
  <router-view name="viewA"></router-view>
  <router-view name="viewB"></router-view>
  <router-link :to="{path:'apple',param:{color:'yellow'}}">toApple</router-link>
  <router-link :to="{path:'banner'}">toBanner</router-link>
  <router-link :to="{path:'apple/red'}">toApple/red</router-link>

  <!-- 命名的路由视图，路由重定向 -->
  <router-link to="/apple">toApple2</router-link>
  <router-link :to="'apple'">toApple3</router-link>
   <router-link :to="'apple'" tag="li">toApple3</router-link>
   <router-link :to="{name:'applePage'}" >NameApplePage</router-link>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
    return {
      apple:"/apple"
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
