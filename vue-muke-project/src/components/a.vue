<template>
  <div>
    <h2>2222</h2>
  </div>
</template>

<script>
export default {
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