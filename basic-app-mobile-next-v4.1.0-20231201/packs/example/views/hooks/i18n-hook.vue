<template>
  <a-button @click="toggleHandle">{{ nsT("toggle") }}</a-button>
</template>
<script setup lang="ts">
import { hooks } from "@common";
import { useI18n } from "vue-i18n";

const { nsT } = hooks.useI18nHook("example");
const { locale } = useI18n();

const toggleHandle = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};
</script>
