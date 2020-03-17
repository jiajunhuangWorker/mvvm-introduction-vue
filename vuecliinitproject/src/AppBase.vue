<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div :title = 'hellow'>
      {{ hellow }}
    </div>
    <!-- v-html和v-text 区别 -->
    <div v-html='hellow'> </div>
    <div v-text='hellow'> </div>
    {{num+1}}
    {{state ? '成功了' : '失败了'}}
    <!-- 循环数组 -->
    <div v-for="(item,index) in list" :class="{odd : index % 2}">
      {{item.name}}- {{item.price}}  {{index}}
    </div>
    <!-- 循环对象 -->
    <div v-for="(item,key) in objList">{{key+'--'+item}}</div>
    <!-- 循环组件 -->
    <componentA v-for="(item,key) in objList" :key="key"></componentA>
    <a :href="link" class="abc" :class="className">baidu</a>
    <!-- 传递数据给组件 -->
    <componentA :dataA="dataA"></componentA>
    <!-- v-if和v-show区别 -->
    <div v-if="isPartA">isPartAIf</div>
    <div v-else>isNoData</div>
    <div v-show="!isPartA">isPartAShow</div>
    <!-- 绑定属性 -->
    <button @click='addItem'  :class="[classA,{'red-font':redObj}]">addItem</button>

    <div class="">
      <!-- 阻止冒泡事件 -->
      <button @click.stop='stopBubbling'>stopBubbling</button>
      <br>
    </div>
      <!-- 键盘事件 -->
      <input type="text" @keydown.enter='keyDownEnter'>
      <!-- 自定义事件 -->
      <componentA @my-event="onComaMyEvent"></componentA>
      <!-- 表单绑定 -->
      <input type="text" name="" v-model="myVal">
      {{myVal}}
      <input type="text" name="" v-model.lazy="myVal2">
      {{myVal2}}
      <input type="text" name="" v-model.number="myVal3">
      {{typeof myVal3}}
       <input type="text" name="" v-model.trim="myVal4">
      {{myVal4}}

      <label>
      <br/>
      <input type="checkbox" name="" value = "apple" v-model="checkboxArr">
      apple
      </label>
      <label>
      <input type="checkbox" name="" value = "banner" v-model="checkboxArr">
      banner
      </label>
      <label>
      <input type="checkbox" name="" value = "oranage" v-model="checkboxArr">
      oranage
      </label>
      {{checkboxArr}}

      <label>
<br/>
      <input type="radio" name="" value = "apple" v-model="radioElm">
      apple
      </label>
      <label>
      <input type="radio" name="" value = "banner" v-model="radioElm">
      banner
      </label>
      <label>
      <input type="radio" name="" value = "oranage" v-model="radioElm">
      oranage
      </label>
      {{radioElm}}
      <br/>
      <select v-model="selectVal">
        <option  v-for="item in fruits" :value='item.id'>{{item.name}}</option>
      </select>
      {{selectVal}}
      <!-- 父组件传递参数给子组件 -->
      <!-- <vSelect :options="fruits"></vSelect> -->
      
      <!-- 计算属性和数据监听 
      计算属性是根据myValue 更新发生变化而更新变化(效率高)
      而方法则是不断的重新获取变化的值(效率低)
      例如new Date();
      计算属性是获取当前的那一刻时间
      方法则会获取当前的时间
      -->
      <div>
        <input type="text" v-model="myValue">
        <div>{{myValueWithoutNum}}</div>
        <div>{{getMyValWithoutNum()}}</div>
      </div>
      <!-- 
        属性监听
       -->
       <input type="text" v-model="myWatch">
  </div>

</template>

<script>
import componentA from './components/a'
// import vSelect from './components/vSelect'
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
      ,myVal:""
      ,myVal2:""
      ,myVal3:""
      ,myVal4:""
      ,checkboxArr:[]
      ,radioElm:""
      ,selectVal:""
      ,className:{
        /*
          class
        */
        "classNames":true
        ,"className2":false
      }
      ,fruits:[
      {
        name:"apply"
        ,id:0
      },{
        name:"banner"
        ,id:1
      }]
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
      ,myValue:""
      ,myWatch:""
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
    ,stopBubbling(e){
      console.info(e)
    }
    ,keyDownEnter(e){
      console.info(e)
    }
    ,onComaMyEvent(parmfromA){
      console.info('this is onComaMyEvent'+parmfromA);
    }
    ,getMyValWithoutNum(){
      return this.myValue.replace(/\d/g,"")+new Date();
    }
  },
  computed:{
    myValueWithoutNum(){
      /*
      myValue不更新那么它的
      */
      return this.myValue.replace(/\d/g,"")+new Date();
    }
  }
  ,watch:{
    myWatch:function(val,oldVal){
      console.info(val,oldVal)
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
