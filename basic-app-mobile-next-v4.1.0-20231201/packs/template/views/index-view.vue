<template>
  <main>
   <!-- <svg :style="{ width: 160, height: 160 }">
      <use xlink:href="#icon-arc" ></use>
    </svg> -->
    
      <van-search class="searchclass" v-model="value" placeholder="请输入搜索关键词" />
    <img src="../assets/images/left.png" alt="">
     
   <div class="banner">
     <img src="../assets/images/banner.png" alt="" tyle="width: 690px;height: 320px;">
     <h1>中国外贸信托 五行财富</h1>
     <p>以下数据均位于行业前列</p>
     <div class="assets">
       <span>1.07万亿</span>
       <span>192亿</span>
       <span>1.07万</span>
     </div>
   </div>
      
    <image
      width="100"
      height="100"
      src="../assets/images/banner.png"
    />
    <div class="content">
      <div v-for="item in arrList" >
        <span>{{item.title}}</span>
        
      </div>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    2266
    
    <image
      width="100"
      height="100"
      src="../assets/images/recommend.png"
    />
   <div class="servetotal">
     <img src="../assets/images/serve.png" alt="">
     <div class="textserve">
       <p>信托服务专区</p>
       <span>规划扎实稳健基石，保障日常生活开支,防范财务风险，
       逐步增加高收益进攻型资产，实现家庭资产保值增值</span>
     </div>
   </div>
   <div class="bottom">
     <van-tabs v-model:active="activeName">
       <van-tab title="投研咨询" name="a" v-for="item in consultList">
       <div >
         {{item.content}}
       </div>
       </van-tab>
       <van-tab title="热点新闻" name="b" v-for="item in hotList">
       <div >
         {{item.content}}
       </div>
       </van-tab>
       <van-tab title="财富视界" name="c" v-for="item in wealthList">
       <div >
         {{item.content}}
       </div>
       </van-tab>
       <van-tab title="金融宣教" name="d" v-for="item in financialList">
       <div >
         {{item.content}}
       </div>
       </van-tab>
     </van-tabs>
   </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref('搜服务,搜产品')
const activeName = ref('a');

const arrList = ref([
  {
    title:'财富顾问'
  },{
    title:'权益福利'
  },{
    title:'金融资讯'
  },{
    title:'全部功能'
  }
])
const consultList = ref([
  {
    content:'试题内容',
  }
])
const hotList = ref([
  {
    content:'试题内容',
  }
])
const wealthList = ref([
  {
    content:'试题内容',
  }
])
const financialList = ref([
  {
    content:'试题内容',
  }
])
</script>
<style lang="scss" scoped>
  .banner{
    position: relative;
    h1{
      position: absolute;
      top:45px ;
      left: 100px;
    }
    p{
      position: absolute;
      top:100px ;
      left: 170px;
    }
    .assets{
      position: absolute;
      top:200px ;
      left: 100px;
      display: flex;
      justify-content: space-between;
      span{
        color: red;
        margin-left: 100px;
      }
    }
  }
  
  .top{
    width: 700px;
    width: 200px;
    background-color: blanchedalmond;
  }
  .servetotal{
    position: relative;
  }
  .textserve{
    position: absolute;
    top: 15px;
    left: 17px;
    p {
      font-size: 35px;
    }
    span{
      margin-top: 30px;
      font-size: 28px;
    }
  }
  
  .searchclass{
    height: 64px;
  }
  .content{
    display: flex;
    justify-content: space-around;
  }
  .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
    .van-tabs__line {
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        z-index: 1;
        width: 0px;
        height: var(--van-tabs-bottom-bar-height);
        background: var(--van-tabs-bottom-bar-color);
        border-radius: var(--van-tabs-bottom-bar-height);
    }
</style>
