<template>
  <a-button block v-for="item in list" :key="item.name" @click="goto(item.name)">{{ item.title }}</a-button>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goto = (name: string) => {
  router.push({ name });
};

const list = [
  {
    name: "hook-remote",
    title: "remote hook",
  },
  {
    name: "hook-i18n",
    title: "国际化",
  },
  {
    name: "hook-verify-code",
    title: "验证码 hook",
  },
];
</script>
<style lang="scss" scoped>
.ant-btn {
  margin-bottom: 20px;
}
</style>
