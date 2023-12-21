<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="counter">
      <span class="counter-info">{{ store.state.counter }}</span>
      <van-button type="primary" size="small" icon="plus" round @click="clickHandler"></van-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
const store = useStore();
const clickHandler = () => {
  store.commit("increment");
};
</script>
<style>
.about {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.counter {
  text-align: center;
  padding: 40px;
}
.van-button {
  position: fixed;
  bottom: 1em;
  right: 1em;
}
</style>
