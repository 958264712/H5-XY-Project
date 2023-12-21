<template>
  <main>
    <!-- <svg :style="{ width: 160, height: 160 }">
      <use xlink:href="#icon-arc" ></use>
    </svg> -->

    <van-search class="searchclass" v-model="value" placeholder="请输入搜索关键词" />
    <img src="../assets/images/left.png" alt="" />

    <div class="trustServices">
      <div class="background">
        <div class="title"><p>五行汇泽</p></div>
        <div class="footer">
          <div class="left_top"></div>
          <div class="right_bottom"></div>
          <div class="content_top">
            <div class="item">
              <span><strong>1000</strong>万元</span>
              设立起点
            </div>
            <div class="item">
              <span><strong>8</strong>位</span>
              受益人数
            </div>
            <div class="item">
              <span><strong>现金/保单</strong></span>
              资产装入
            </div>
          </div>
          <div class="content_bottom">立即预约</div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
</script>
<style lang="scss" scoped>
.trustServices {
  width: 685px;
  height: 572px;
  background: #e7caa8;
  border: 1px solid #ffffff;
  padding: 10px;
  position: relative;
  margin: 0 auto;
  border-bottom-left-radius: 10px ;
  .background {
    height: 100%;
    width: 100%;
    background: url("../assets/images/background.png") no-repeat center right;
    background-size: 125%;
    .title {
      background: url("../assets/images/b2.png") no-repeat;
      background-size: cover;
      margin:0 auto;
      width: 340px;
      height: 64px;
      text-align:center;
      p {
        font-size: 36px;
        font-weight: bold;
        background: linear-gradient(122deg, #ca8c0a 9%, #9a5304 43%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .footer {
      position: absolute;
      left: -28px;
      bottom: -20px;
      width: calc(6.9rem + 20px);
      height: 350px;
      background: url("../assets/images/b1.png") no-repeat;
      background-size: cover;
      .content_top {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-top: 100px;
        .item {
          color: #612200;
          font-size: 24px;
          text-align: center;
          span {
            color: #ff2624;
            display: block;
            font-size: 24px;
            strong {
              font-size: 40px;
              font-weight: bold;
            }
          }
        }
      }
      .content_bottom {
        background: url("../assets/images/btn.png") no-repeat;
        background-size: contain;
        text-align: center;
        font-size: 32px;
        height: 110px;
        width: 6.4rem;
        font-weight: bold;
        line-height: 1rem;
        color: #ffffff;
        margin-left: 50px;
        margin-top: 20px;
      }
    }
    .left_top,
    .right_bottom {
      position: absolute;
    }
    .left_top {
      left: -92.61px;
      top: -25.84px;
      width: 261px;
      height: 284.71px;
      transform: rotate(-15deg);
      opacity: 0.7878;
      background: url("../assets/images/left_top.png") no-repeat;
      background-size: cover;
    }
    .right_bottom {
      bottom: 0;
      right: 0;
      width: 682px;
      height: 588px;
      transform: rotate(-45deg);
      opacity: 0.0916;
      background: url("../assets/images/right_bottom.png") no-repeat;
      background-size: cover;
    }
  }
}
</style>
