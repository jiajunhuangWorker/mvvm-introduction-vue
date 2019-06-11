<template>
  <div>
    <h2>属性</h2>
    <p :title="vHtml">打开以下dom查看一下title 属性{{ vHtml}}</p>
    <br/>
    <h2>v-html和v-text区别</h2>
    <p v-html="vHtml"></p>
    <p v-text="vText"></p>
    <h2>v-for</h2>
    <ol>
      <li v-for="item in list">
        水果名:{{item.name}}-价格:{{item.price}}
      </li>
    </ol>
    <h3>v-for带序号</h3>
    <ul>
      <li v-for="(item,index) in list" v-text="'水果名:'+item.name + '- 价格:' + item.price + '- 序列号:'+ index">
      </li>
    </ul>
    <h3>class属性</h3>
    <ul>
      <li v-for="(item,num) in list" :class="{odd: num % 2}" v-text="num+'打开dom查看class'">
      </li>
    </ul>
    <h3>渲染对象</h3>
    <ul>
      <li v-for="(val,key) in objList" v-html="'键位:'+key+'---值位:'+val">
      </li>
    </ul>
    <h3>渲染组件</h3>
    <aModule v-for="(val,key) in objList" :key="key"></aModule>
  </div>
</template>

<script>
import aModule from './components/a'
export default {
  components:{aModule},
  name: 'App',
  data(){
    return{
      vHtml:'<div>你好啊!xHtml</div>'
      ,vText:'<div>你好啊!vText</div>'
      ,list:[
        {name:'apple',price:20}
        ,{name:'banner',price:11}
      ],
      objList:{
        name:'apple'
        ,weight:12
        ,price:30
      }
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