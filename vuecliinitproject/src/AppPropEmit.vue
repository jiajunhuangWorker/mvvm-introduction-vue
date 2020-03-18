<template>
  <div id="app">
    <div class="tt">父组件传递数据给子组件</div>
    <component-a :my-value="myVal" :component-show="true"></component-a>
    <input type="text" v-model="myVal">


    <!--通过属性去进行渲染componentA能随时换成其他组件
        传入参数大小写不敏感
    -->
    <div class="tt">父亲组件传递数字给子组件</div>
    <p :is="comToRender" number='5'></p>

    <!-- 传递数组对象  动态组件 -->
    <div class="tt">父亲组件传递对象给子组件</div>
    <p :is="comToRender" :person='person'></p>

    <!--接收子组件传递过来的事件 -->
    <div class="tt">子组件传值给父组件</div>
    <p :is="comToRender"  @my-event="getMySonEvent"  btnShow="true"></p>

    <!-- 插槽功能 -->
    <div class="tt">插槽功能</div>
    <p :is="comToRender">
      <div slot="header">i a header</div>
      我去好多测试任务
      <div slot="footer">i a footer</div>
    </p>
    <!--
      组件缓存
     -->
     <div class="tt">组件缓存</div>
     <keep-alive>
      <p :is="comToRender" keepAlive="keepAlive"></p>
    </keep-alive>
  </div>
</template>
<script>
import Vue from 'vue'
import componentA from './components/componentA'

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
    getMySonEvent(val){
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
