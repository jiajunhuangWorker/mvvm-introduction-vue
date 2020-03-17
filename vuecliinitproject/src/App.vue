<template>
  <div id="app">
  <!-- 自定义指令
    两种方法
    一种是directives   局部的自定义指令
    Vue.directives     全局使用的指令
  -->
  <p v-css="{color:'red','font-size':'24px'}">hellow world</p>

  <input type="text" name="" v-focus>
  <router-view></router-view>
  <router-link :to="{path:'apple'}">toApple</router-link>
  <router-link :to="{path:'banner'}">toBanner</router-link>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  data(){
    return {

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

</style>
