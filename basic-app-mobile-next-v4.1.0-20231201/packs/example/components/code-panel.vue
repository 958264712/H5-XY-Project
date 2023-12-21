<template>
  <a-collapse v-model:activeKey="key">
    <a-collapse-panel key="1" :header="title">
      <pre class="vx-code-panel__content"><code>{{ content }}</code></pre>
    </a-collapse-panel>
  </a-collapse>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  defaultShow: {
    type: Boolean,
    default: false,
  },
});

const key = ref(props.defaultShow ? ["1"] : []);
</script>
<style lang="scss">
.vx-code-panel__content {
  width: 100%;
  overflow: auto;
  padding: 20px;
  color: #41485d;
}
</style>
