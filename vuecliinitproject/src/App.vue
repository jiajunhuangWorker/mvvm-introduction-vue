<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div :title = 'hellow'>
      {{ hellow }}
    </div>
    <div v-html='hellow'> </div>
    <div v-text='hellow'> </div>
    {{num+1}}
    {{state ? '成功了' : '失败了'}}
    <div v-for="(item,index) in list" :class="{odd : index % 2}">
      {{item.name}}- {{item.price}}  {{index}}
    </div>
    -------------
    <div v-for="(item,key) in objList">{{key+'--'+item}}</div>
    <componentA v-for="(item,key) in objList" :key="key"></componentA>
    <a :href="link" class="abc" :class="className">baidu</a>
    <componentA :dataA="dataA"></componentA>  
    -----------v-if和v-show区别----------------
    <div v-if="isPartA">isPartAIf</div>
    <div v-else>isNoData</div>
    <div v-show="!isPartA">isPartAShow</div>
    <button @click='addItem'  :class="[classA,{'red-font':redObj}]">addItem</button>
  </div>
  
</template>

<script>
import componentA from './components/a'
import Vue from 'vue'
export default {
  components:{componentA}
  ,name: 'App'
  ,data(){
    return {
      hellow:'<p>hellow!myname,lucas</p>'
      ,link:"http://www.baidu.com"
      ,dataA:"dataA"
      ,num:1
      ,state:true
      ,redObj:true
      ,classA:"hellow"
      ,isPartA:true
      ,className:{
        /*
          class
        */
        "classNames":true
        ,"className2":false
      }
      ,list:[
      {
        name:'a'
        ,price:34
      },{
        name:'b'
        ,price:32
      }]
      ,objList:{
        name:'LLL'
        ,price:666
        
      }
    }
  }
  ,methods:{
    addItem(){
      this.isPartA=!this.isPartA;
      Vue.set(this.list,1,{
        name:'changeB'
        ,price:666
      })
      this.list.push({
        name:'b'
        ,price:32
      })
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
