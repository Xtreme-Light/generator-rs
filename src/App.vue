<script setup lang="ts">
// 组合式API是不需要defineComponent的，所有顶层变量比如本组件中的size，zIndex等，都会自动暴露给模版，而不需要通过setup函数来传递
// 响应性的数据可以通过ref函数来定义
// 只要导入了组件（如 ElConfigProvider），就可以直接在模板中使用，无需再写 components: {} 注册。
// import { onMounted } from 'vue'
// import { attachConsole } from '@tauri-apps/plugin-log'


// onMounted(async () => {
//   // with TargetKind::Webview enabled this function will print logs to the browser console
//   const detach = await attachConsole();
//   // detach the browser console from the log stream
//   detach();
// })

</script>

<template>
    <router-view />
</template>

<style scoped></style>