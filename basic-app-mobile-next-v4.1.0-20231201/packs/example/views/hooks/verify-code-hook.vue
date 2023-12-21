<template>
  <a-button bolck @click="start" :loading="actived" :type="actived ? 'disabled' : 'primary'">{{ content }}</a-button>
</template>
<script setup lang="ts">
import { hooks } from "@common";

const handle = () => {
  // eslint-disable-next-line no-console
  console.log("获取验证码");
};
const { start, content, actived } = hooks.useVerifyCodeHook(handle);
</script>
