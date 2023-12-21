<template>
  <VxCodePanel title="引入方式" :default-show="true" :content="content" />
  <h3>异步方法</h3>
  <VxFuncPanel
    v-for="func in funcs"
    :key="func.name"
    :title="func.title"
    :input="formatInput(func.name, func.params)"
    executable
    @run="handle(func)"
  />
  <h3>同步方法</h3>
  <VxFuncPanel
    v-for="func in funcSyncs"
    :key="func.name"
    :title="func.title"
    :input="formatInput(func.name, func.params)"
    executable
    @run="handle(func)"
  />
</template>
<script setup lang="ts">
import { vxSDK } from "@common";
import VxCodePanel from "../components/code-panel.vue";
import VxFuncPanel from "../components/func-panel.vue";

const content = 'import { vxSDK } from "@common";';

const funcs = [
  {
    title: "获取环境变量",
    name: "getEnv",
    params: ["versionName"],
  },
  {
    title: "获取设备ID",
    name: "deviceID",
  },
  {
    title: "启动一个新的 webview",
    name: "launchStage",
    params: [""],
  },
  {
    title: "获取启动参数",
    name: "getParam",
    params: ["params1"],
  },
  {
    title: "关闭当前webview",
    name: "finish",
  },
  {
    title: "会话存储 set 方法",
    name: "sessionSetString",
    params: ["key", "value"],
  },
  {
    title: "会话存储 get 方法",
    name: "sessionGetString",
    params: ["key"],
  },
  {
    title: "安全持久存储 set 方法",
    name: "secureSetString",
    params: ["key", "value"],
  },
  {
    title: "安全持久存储 get 方法",
    name: "secureGetString",
    params: ["key"],
  },
  {
    title: "往会话存储中存储时间戳",
    name: "setTimestamp",
    params: [new Date().getDate().toString()],
  },
] as { title: string; name: string; params: Any[] }[];

const funcSyncs = [
  {
    title: "获取环境变量同步方法",
    name: "getEnvSync",
    params: ["versionName"],
  },
  {
    title: "获取设备ID同步方法",
    name: "deviceIDSync",
  },
  {
    title: "启动一个新的 webview 同步方法",
    name: "launchStageSync",
    params: [""],
  },
  {
    title: "启动一个新的 webview 同步方法",
    name: "launchStageSyncPlus",
    params: [""],
  },
  {
    title: "获取启动参数同步方法",
    name: "getParamSync",
    params: ["params1"],
  },
  {
    title: "关闭当前webview同步方法",
    name: "finishSync",
  },
  {
    title: "会话存储 set 方法同步方法",
    name: "sessionSetStringSync",
    params: ["key", "value"],
  },
  {
    title: "会话存储 get 方法同步方法",
    name: "sessionGetStringSync",
    params: ["key"],
  },
  {
    title: "安全持久存储 set 方法同步方法",
    name: "secureSetStringSync",
    params: ["key", "value"],
  },
  {
    title: "安全持久存储 get 方法同步方法",
    name: "secureGetStringSync",
    params: ["key"],
  },
  {
    title: "往会话存储中存储时间戳同步方法",
    name: "setTimestampSync",
    params: [new Date().getDate().toString()],
  },
] as { title: string; name: string; params: Any[] }[];

const formatInput = (name: string, params: Any[]) => {
  return `${name}(${(params ?? []).map((item) => `"${item}"`).join(", ")})`;
};

const handle = (func: { title: string; name: string; params: Any[] }) => {
  if (typeof (vxSDK as Any)[func.name] === "function") {
    // eslint-disable-next-line no-console
    console.log(func.title, (vxSDK as Any)[func.name](...(func.params ?? [])));
  } else {
    // eslint-disable-next-line no-console
    console.log(func.title, (vxSDK as Any)[func.name]);
  }
};
</script>
