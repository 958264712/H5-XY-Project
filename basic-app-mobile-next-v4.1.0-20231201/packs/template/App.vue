<template>
  <van-config-provider>
    <vxbm-header-bar />
    <RouterView />
  </van-config-provider>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const lang: Record<string, { name: string; value: typeof zh }> = {
  zh: {
    name: "zh-CN",
    value: zh,
  },
  en: {
    name: "en-US",
    value: en,
  },
};

onMounted(() => {
  locale.value = "zh";
  Locale.use("zh-CN", lang["zh"].value);
});
</script>
<script lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { Locale } from "vant";
import zh from "vant/es/locale/lang/zh-CN";
import en from "vant/es/locale/lang/en-US";
</script>
