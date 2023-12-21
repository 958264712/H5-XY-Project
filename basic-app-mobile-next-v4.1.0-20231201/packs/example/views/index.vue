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
  // {
  //   name: "platform-api",
  //   title: "平台 API",
  // },
  {
    name: "format",
    title: "数据格式化",
  },
  {
    name: "hooks",
    title: "Hooks",
  },
  {
    name: "i18n",
    title: "国际化",
  },
];
</script>
<style lang="scss" scoped>
.ant-btn {
  margin-bottom: 20px;
}
</style>
