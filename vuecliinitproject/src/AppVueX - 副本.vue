<template>
  <div id="app">
    <!-- 
      vueX
      状态管理
      多个组件同时发生改变的时候就需要状态管理
     -->
     {{totalPrice}}
     <totalBtn></totalBtn>  
     <totalBtn2></totalBtn2>
  </div>
</template>
<script>
import Vue from 'vue'
import totalBtn from './components/totalBtn'
import totalBtn2 from './components/totalBtn2'
export default {
  components:{
    totalBtn,totalBtn2
  }
  ,data(){
    return {
      
    }
  }
  ,computed:{
    totalPrice(){
      return this.$store.getters.getTotal
      // return this.$store.state.totalPrice
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
