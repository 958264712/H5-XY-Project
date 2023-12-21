<template>
  <div>
    <h1>This is an assiatant page</h1>
    <div>
      <van-tabs v-model:active="active">
        <van-tab title="助手">
        <ul class="assistanrclass" v-for="item in arrList">
          <img src="../assets/images/image.png" alt="">
        <li>{{item.content}}</li>
        </ul>
        </van-tab>
        <van-tab title="代办">
          <van-search class="searchclass" v-model="value" placeholder="请输入搜索关键词" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const active = ref(0);
  const saaistant = ref('助手')
  const commission = ref('代办')
  const value = ref('99')
  const arrList = ref(
    [{
      content:'合规助手',
    },
    {
      content:'财富顾问助手',
    },{
      content:'交易助手'
    }  
    ]
  )
</script>

<style lang="scss" scoped>
  .assistanrclass li{
    height: 148px;
    line-height: 148px;
    // background: #D8D8D8;
  }
  .assistanrclass{
    display: flex;
    img{
      width: 85px;
        height: 85px;
        margin-right: 10px;
      }
  }
</style>
