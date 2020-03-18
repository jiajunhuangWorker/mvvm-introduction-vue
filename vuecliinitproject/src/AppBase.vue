<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--
      绑定属性
     -->
    <div class="tt">绑定属性</div>
    <div :title = 'hellow'>
      {{ hellow }}
    </div>
    <div :class="[classA,{'red-font':redObj}]">class绑定</div>
    <a :href="link" class="abc" :class="className">baidu</a>
    <!-- v-html和v-text 区别
      v-html 会渲染dom 结构
      v-text 不渲染dom结构
    -->
    <div class="tt">v-html和v-text区别</div>
    <div v-html='hellow'></div>
    <div v-text='hellow'></div>
    <!--
      Mustache语法
      {{}}
     -->
    <div class="tt">Mustache语法</div>
    <div>{{num+1}}</div>
    <div>{{state ? '成功了' : '失败了'}}</div>
    <div>{{5>3}}</div>
    <div>{{5+''+1}}</div>
    <div>{{'5'*1+8}}</div>
    <div>{{sum}}</div>
    <div>{{typeof myVal3}}</div>
    <!--
      循环数组
    -->
    <div class="tt">循环数组</div>
    <div v-for="(item,index) in arrList" :class="{odd : index % 2}">
      循环数组:{{item.name}}- {{item.price}}  {{index}}
    </div>
    <button @click="addListItem">添加数据到循环数组</button>
    <!--
      循环对象
    -->
    <div class="mtt">循环对象</div>
    <div v-for="(item,key) in objList">{{key+'--'+item}}</div>
    <!--
      循环组件
    -->
    <div class="mtt">循环组件</div>
    <baseComponent v-for="(item,key) in objList" :key="key">
      {{key}}
    </baseComponent>
    <!-- v-if和v-show区别
      if是整个结构重新渲染
      show是样式display:none
     -->
    <div class="tt">v-if和v-show区别</div>
    <div v-if="isPartA">isPartAIf</div>
    <div v-else>isNoData</div>
    <div v-show="!isPartA">isPartAShow</div>
    <button @click="addItem">切换if和show</button>

    <div class="tt">事件</div>
    <div>
      <button @click.stop='stopBubbling'>stopBubbling</button>
    </div>
    <div class="mtt">监听回车键</div>
    <div>
      <input type="text" @keydown.enter='keyDownEnter' v-model="enterVal">
    </div>
    <div class="tt">表单-input</div>
    <div>
    <input type="text" name="" v-model="myVal">
      {{myVal}}
    </div>
    <div>
      <div class="mtt">需要点击回车</div>
      <input type="text" name="" v-model.lazy="myVal2">
      {{myVal2}}
    </div>
    <div>
      <div class="mtt">识别数字如果先输入文字就会失效</div>
      <input type="text" name="" v-model.number="myVal3">
      {{myVal3}}
    </div>
    <div>
      <div class="mtt">只左右空格去掉</div>
      <input type="text" name="" v-model.trim="myVal4">
      {{myVal4}}
    </div>
    <div class="tt">表单-checkbox</div>
    <label>
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
      <div class="tt">表单-radio</div>
      <label>
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

      <div class="tt">表单-select</div>
       <select v-model="selectVal">
        <option  v-for="item in fruits" :value='item.id'>{{item.name}}</option>
      </select>
      {{selectVal}}

       <!-- 计算属性和数据监听
      计算属性是根据myValue 更新发生变化而更新变化(效率高)
      而方法则是不断的重新获取变化的值(效率低)
      例如new Date();
      计算属性是获取当前的那一刻时间
      方法则会获取当前的时间
      -->
      <div class="tt">计算属性</div>
      <input type="text" v-model="myValue">
      <div>{{myValueWithoutNum}}</div>
      <div>{{getMyValWithoutNum()}}</div>

      <div class="tt">监听watch</div>
      <input type="text" v-model="myWatch">
  </div>

</template>

<script>
import baseComponent from './components/base'
import Vue from 'vue'
export default {
  components:{baseComponent}
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
      ,enterVal:""
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
      ,arrList:[
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
    }
    ,addListItem(){
      // 插入一条到数据中
      Vue.set(this.arrList,1,{
        name:'changeB'
        ,price:666
      })
      //插入数据
      this.arrList.push({
        name:'b'
        ,price:32
      })
    }
    ,stopBubbling(e){
      console.info(e)
    }
    ,keyDownEnter(e){
      console.info(e)
      console.info(this.enterVal)
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
    ,sum(){
      return 1+2+'666';
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
