<template>
  <div id="app">
    <!-- 动画  -->
    <div class="tt">css动画</div>
    <button @click = "show = !show">showBtn</button>
    <div class="mtt">过渡效果</div>
    <transition name="fade">
      <div v-show = "show">i am show</div>
    </transition>
    <div class="mtt">移动效果</div>
    <transition name="animate">
      <div v-show = "show">i am show</div>
    </transition>
    <!--
      过度状态指令
      v-if,v-show
     -->
      <div class="tt">组件之间切换</div>
      <button @click='tagEvent'>过渡</button>
      <transition name="fade" mode="out-in">
        <div :is="currDom"></div>
        <!-- 相同p标签情况下需要key去进行过度 -->
        <p v-if="show" key="1">i am show222</p>
        <p v-else key="2">no show333</p>
      </transition>

      <div class="tt">js实现动画</div>
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
import animateA from './components/animateA';
import animateB from './components/animateB';
export default {
  components:{animateA,animateB}
  ,data(){
    return {
      show:true
      ,currDom:'animateA'
      ,shows:false
    }
  }
  ,methods:{
    tagEvent(){
      if(this.currDom != "animateB"){
        this.currDom="animateB";
      }else{
        this.currDom="animateA";
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
