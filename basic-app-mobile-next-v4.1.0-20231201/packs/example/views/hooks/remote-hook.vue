<template>
  <a-button block @click="remoteGetHandle">get</a-button>
  <a-button block @click="remotePostHandle">post</a-button>
  <a-button block type="disabled">postMultiAuth</a-button>
  <a-button block type="disabled">postForm</a-button>
  <a-button block type="disabled">postBlob</a-button>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { type AxiosInstance } from "axios";

const axios = inject<AxiosInstance>("axios");

const remoteGetHandle = () => {
  axios?.get("/demo-get.do").then((res) => {
    // eslint-disable-next-line no-console
    console.log(res);
  });
};
const remotePostHandle = () => {
  axios?.post("/demo-post.do").then((res) => {
    // eslint-disable-next-line no-console
    console.log(res);
  });
};
</script>
<style lang="scss">
.ant-btn {
  margin-bottom: 20px;
}
</style>
