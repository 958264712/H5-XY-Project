<!-- 字体图标组件 -->
<template>
  <svg :style="{ width: width, height: height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import type { SvgIconType } from "./type/type";

defineOptions({
  name: "SvgIcon",
});

withDefaults(defineProps<SvgIconType>(), {
  width: "16px",
  height: "16px",
  prefix: "#icon-",
  color: "#000",
});
</script>

<style scoped></style>
