<template>
  <div id="app">
    <!-- 父组件传递数据给子组件 -->
    <input type="text" v-model.number="myVal">
    <component-a :my-value="myVal"></component-a>
    <!-- 通过属性去进行渲染componentA能随时换成其他组件-->
    <!-- 传入参数大小写不敏感 -->
    <p :is="comToRender" number='5'></p>
    <!-- 传递数组对象  动态组件 -->
    <p :is="comToRender" :person='person'></p>

    <!--接收子组件传递过来的事件 -->
    <p :is="comToRender" @my-event="getMyEvent"></p>

    <!-- 插槽功能 -->
    <p :is="comToRender" @my-event="getMyEvent">
      <div slot="header">i a header</div>
      <div slot="footer">i a footer</div>
    </p>
    <!--
      组件缓存
     -->
     <keep-alive>
      <p :is="comToRender"></p>
    </keep-alive>
  </div>
</template>
<script>
import Vue from 'vue'
import componentA from './components/a'

export default {
  components:{
    componentA
  }
  ,name: 'App'
  ,data(){
    return {
      comToRender:"component-a"
      ,myVal:""
      ,person:[{
        name:'XW'
        ,old:18
      },{
        name:'XZ'
        ,old:20
      }]
    }
  }
  ,methods:{
    getMyEvent(val){
      console.info('i got my event'+val)
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
