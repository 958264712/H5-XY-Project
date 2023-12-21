<template>
  <div>404 {{ nsT(404) }}</div>
</template>
<script setup lang="ts">
import { hooks } from "@common";
const { useI18nHook } = hooks;

const { nsT } = useI18nHook("httpStatusCode");

// console.log(nsT(404));
</script>
