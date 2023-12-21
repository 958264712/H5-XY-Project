<template>
  <div class="vx-func-panel">
    <div class="vx-func-panel__title">{{ title }}</div>
    <div class="vx-func-panel__content">
      <div class="input" @click="runHandle">{{ input }}</div>
      <template v-if="executable">
        <div class="result">{{ result }}</div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  input: {
    type: String,
    default: "",
  },
  executable: {
    type: Boolean,
    default: false,
  },
  result: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["run"]);

const runHandle = () => {
  props.executable && emits("run");
};
</script>
<script lang="ts"></script>
<style lang="scss">
.vx-func-panel {
  display: flex;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  margin: 20px 0;
  color: #858b9c;
  justify-content: space-between;
  &__title {
    color: #666f83;
    margin-right: 50px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    .input {
      // text-wrap: nowrap;
    }
  }
}
</style>
