<template>
  <div>
    <div class="msg">
      <h1>该模块是使用默认模板创建的模块，包含了一下功能</h1>
      <p class="item">路由 <span class="tip">by vue-router@4.x</span></p>
      <p class="item">状态管理 <span class="tip">by vuex@4.0.1</span></p>
      <p class="item">国际化 <span class="tip">by vue-i18n@9.x(已在公共模块中注册，可以直接定义当前模块使用的国际化或直接使用对应的 Hook)</span></p>
      <p class="item">接口请求 <span class="tip">by axios(已在公共模块中注册，可以直接使用对应的 Hook)</span></p>
    </div>
    <div class="go">
      <van-button type="primary" @click="goto" size="small">Go About</van-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goto = () => {
  router.push("about");
};
</script>
<style>
.msg {
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  counter-reset: index;
}
.msg h1 {
  font-size: 40px;
  color: var(--ui-color-text-body);
}
.msg h1::after {
  content: "：";
}
.msg .item {
  color: var(--ui-color-text-caption);
  list-style: none;
}
.msg .item::before {
  content: counter(index) "、";
  counter-increment: index;
  padding-left: 2em;
}
.msg .tip {
  color: var(--ui-color-text-placeholder);
  font-size: 18px;
}
.go {
  text-align: center;
}
</style>
