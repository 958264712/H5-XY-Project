<template>
  <a-alert message="详见 src/formats/index.ts 测试用例" type="info" />
  <VxFuncPanel
    v-for="(item, i) in list"
    :key="i"
    :title="item.title"
    :input="formatInput(item.code, item.params)"
    executable
    @run="handle(i, item.code, item.params)"
    :result="item.result"
  />
</template>
<script setup lang="ts">
import { formats } from "@common";
import VxFuncPanel from "../components/func-panel.vue";
import { ref } from "vue";

const list = ref([
  {
    title: "电话号码脱敏",
    params: ["13611111111"],
    result: "",
    code: "formatPhoneMask",
  },
  {
    title: "卡号格式化",
    params: ["1234567812345678"],
    result: "",
    code: "formatString",
  },
  {
    title: "截取字符串",
    params: ["123456789", 5],
    result: "",
    code: "formatSubStr",
  },
  {
    title: "金额格式化，三位一逗号",
    params: ["123456789", 2],
    result: "",
    code: "formatAmount",
  },
  {
    title: "金额大写",
    params: ["1234567.00"],
    result: "",
    code: "formatAmountUpperCase",
  },
  {
    title: "日期格式化",
    params: ["2023/06/20"],
    result: "",
    code: "formatDate",
  },
  {
    title: "字符串脱敏",
    params: ["123456789", 2, 2],
    result: "",
    code: "formatWordencrypt",
  },
  {
    title: "添加金额单位",
    params: ["123456789"],
    result: "",
    code: "formatAmountUnit",
  },
]);

const formatInput = (name: string, params: Any[]) => {
  return `${name}(${(params ?? []).map((item) => (typeof item === "string" ? `"${item}"` : `${item}`)).join(",")})`;
};

const handle = (index: number, name: string, params: Any[]) => {
  list.value[index].result = (formats as Any)[name](...params);
};
</script>
<style lang="scss" scoped>
.ui-notice-bar {
  margin-bottom: 30px;
}
.ui-cell-item {
  background-color: #fff;
  box-shadow: 0 0 8px #ccc;
  margin-bottom: 30px;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
