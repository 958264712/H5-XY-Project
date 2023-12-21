<template>
  <a-style-provider hash-priority="high">
    <a-config-provider :locale="locales">
      <vxbm-header-bar />
      <div class="box">
        <RouterView />
      </div>
    </a-config-provider>
  </a-style-provider>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const lang: Record<string, typeof zh> = {
  zh,
  en,
};
const locales = shallowRef(zh);
onMounted(() => {
  locale.value = "zh";
  locales.value = lang["zh"];
});
</script>
<script lang="ts">
import { shallowRef, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import zh from "ant-design-vue/es/locale/zh_CN";
import en from "ant-design-vue/es/locale/en_GB";
</script>
<style lang="scss">
.box {
  padding: 20px;
}
</style>
