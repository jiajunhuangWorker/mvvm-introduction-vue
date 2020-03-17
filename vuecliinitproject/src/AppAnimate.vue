<template>
  <div id="app">
    <!-- 动画  -->
    <button @click = "show = !show">showBtn</button>
    <!-- 过渡效果 -->
    <transition name="fade">
      <div v-show = "show">i am show</div>
    </transition>
    <transition name="animate">
      <div v-show = "show">i am show</div>
    </transition>
    <!--
      接受过度状态
      v-if,v-show
     -->
     <!--
      切换
      -->
      <button @click='tagEvent'>过渡</button>
      <transition name="fade" mode="out-in">
        <div :is="currDom"></div>
        <!-- 相同p标签情况下需要key去进行过度 -->
        <p v-if="show" key="1">i am show222</p>
        <p v-else key="2">no show333</p>
      </transition>

        <!-- js实现过渡
          @before-enter="beforeEnter"
          @enter="event" 两个参数
          @after-enter="afterEvent"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave" 两个参数
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        -->
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false">
        <p class="animate" v-show="shows">i am js create transition</p>
      </transition>
      <button @click="shows = !shows">js动画按钮</button>
  </div>

</template>
<script>
import Vue from 'vue'
import comA from './components/a'
import comB from './components/b'
export default {
  components:{
    comA
    ,comB
  }
  ,data(){
    return {
      show:true
      ,currDom:'comB'
      ,shows:false
    }
  }
  ,methods:{
    tagEvent(){
      if(this.currDom != "comB"){
        this.currDom="comB";
      }else{
        this.currDom="comA";
      }
    }
    ,beforeEnter(el){
      $(el).css({
        left:'-500px'
        ,opacity:0
      })
    }
    ,enter(el,done){
      $(el).animate({
        left:100
        ,opacity:1
      },{
        duration:1500
        ,complete:done
      })
    }
    ,leave(el,done){
      $(el).animate({
        left:"500px"
        ,opacity:0
      },{
        duration:1500
        ,complete:done
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
.fade-enter-active,.fade-leave-active{
  transition:opacity .5s ease-out;
}
.fade-enter,.fade-leave-active{
  opacity:0;
}

.animate-enter-active,.animate-leave-active{
  transition:all .5s ease-out;
}
.animate-enter{
  transform:translateY(-500px);
  opacity:0;
}
.animate-leave-active{
  transform:translateY(200px);
  opacity:0;
}

.animate{
  position:absolute;
  top:0;
  left:0;
}
</style>
