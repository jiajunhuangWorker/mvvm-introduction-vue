<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
		        <h2>全部产品</h2>
		        <template v-for="product in productList">
		          <h3>{{ product.title}}</h3>
		          <ul>
		            <li v-for="item in product.list">
		              <a :href="item.url">{{ item.name }}</a>
		              <span v-if="item.hot" class="hot-tag">HOT</span>
		            </li>
		          </ul>
		          <div v-if="!product.last" class="hr"></div>
		        </template>
		    </div>
		    <div class="index-left-block lastest-news">
		        <h2>最新消息</h2>
		        <ul>
		          <li v-for="item in newsList">
		            <a :href="item.url" class="new-item">{{ item.title }}</a>
		          </li>
		        </ul>
		    </div>
		</div>
		<div class="index-right">
			<carousel :navigationEnabled="true" :perPage="1" :autoplay="true">
	        <slide v-for="slide in slides" :key="slide.ky">
	          <router-link :to="{name: slide.toKey}">
	            <img :src="slide.src">
	          </router-link>
	        </slide>
	      </carousel>
	        <div class="index-board-list">
		       	<div
		        class="index-board-item"
		        v-for="(item, index) in boardList"
		        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
		          <div class="index-board-item-inner" >
		            <h2>{{ item.title }}</h2>
		            <p>{{ item.description }}</p>
		            <div class="index-board-button">
		              <router-link class="button" :to="{name: item.toKey}">立即购买</router-link>
		            </div>
		          </div>
		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'

console.info('index.Vue')
export default { 
	components: {
    	Carousel,
    	Slide
  	},
  data(){
    return{
    	productList:{
    		pc:{
    			title:'PC产品'
    			,list:[
    				{
    					name:'广告发布'
    					,url:'http://www.baidu.com'
    				},
    				{
    					name:'广告发布1'
    					,url:'http://www.baidu.com'
    					,hot:true
    				},
    				{
    					name:'广告发布2'
    					,url:'http://www.baidu.com'
    				},
    				{
    					name:'广告发布3'
    					,url:'http://www.baidu.com'
    					,hot:true
    				}
    			]
    		},
    		app:{
    			title:'手机应用类'
    			,last:true
    			,list:[
    				{
    					name:'广告发布'
    					,url:'http://www.baidu.com'
    				},
    				{
    					name:'广告发布1'
    					,url:'http://www.baidu.com'
    					,hot:true
    				},
    				{
    					name:'广告发布2'
    					,url:'http://www.baidu.com'
    				},
    				{
    					name:'广告发布3'
    					,url:'http://www.baidu.com'
    				}
    			]
    		}
    	}
    	,newsList:[
			{
				title:'广告发布'
				,url:'http://www.baidu.com'
			},
			{
				title:'广告发布1'
				,url:'http://www.baidu.com'
				,hot:true
			},
			{
				title:'广告发布2'
				,url:'http://www.baidu.com'
			},
			{
				title:'广告发布3'
				,url:'http://www.baidu.com'
				,hot:true
			}
		]
		,boardList:[
			{
				title:'开放产品'
				,id:'1'
				,description:'开发产品是一款产品'
				,saleout:false
			},
			{
				title:'品牌营销'
				,id:2
				,description:'开发产品是一款产品2'
				,saleout:false
			},
			{
				title:'使命必达'
				,id:3
				,description:'开发产品是一款产品3'
				,saleout:false
			},
			{
				title:'开放'
				,id:4
				,description:'开发产品是一款产品4'
				,saleout:false
			}
		]
    }
  }
  ,mounted(){
  	axios.get('api/getNewsList')
    .then((res) => {
      console.log(res)
      this.newsList = res.data.list
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style  lang='scss'>
	.index-wrap {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 30%;
  text-align: left;
}
.index-right {
  float: left;
  width: 70%;
}
.index-left-block {
  margin: 0 15px 15px 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  border-radius: 10px;
}
.index-left-block a{
	text-decoration:none;
	color:#252525;
	font-size:14px;
	cursor:pointer;
}
.index-left-block .hr {
  margin-bottom: 20px;
  border-bottom:1px solid #ccc;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 43%;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 3%;
  margin-right: 2%;
  margin-bottom: 20px;
  border-radius: 0 0 10px 10px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
  line-height: 1.6;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-1:before{
	content:'';
	display:block;
	background:url(../assets/images/1.png) no-repeat;
	width:100px;
	height:100px;
	float:left;
}
.index-board-2:before{
	content:'';
	display:block;
	background:url(../assets/images/2.png) no-repeat;
	width:100px;
	height:100px;
	float:left;
}
.index-board-3:before{
	content:'';
	display:block;
	background:url(../assets/images/3.png) no-repeat;
	width:100px;
	height:100px;
	float:left;
}
.index-board-4:before{
	content:'';
	display:block;
	background:url(../assets/images/4.png) no-repeat;
	width:100px;
	height:100px;
	float:left;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: #c04fb1;
  color: #fff;
  font-size: 12px;
  padding: 0 5px;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.VueCarousel {
  margin-bottom: 10px;
}
.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
  width: 100%;
}
.VueCarousel-slide img {
  width: 100%;
}
.VueCarousel-navigation-prev {
  left: 30px !important;
}
.VueCarousel-navigation-next {
  right: 30px !important;
}
.VueCarousel-pagination {
  position: absolute;
  bottom: 10px;
  z-index: 9;
}
.button{
	background:#4fc08d;
	text-decoration:none;
	padding:5px 10px;
	box-sizing:border-box;
	color:#fff;
	font-size:13px;
	cursor:pointer;
}
</style>
