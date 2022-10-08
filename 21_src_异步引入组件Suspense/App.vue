<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>loading...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";
//动态引入，也就是异步引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child"));
// import { reactive, toRefs, provide } from "vue";
// import { defineAsyncComponent } from "vue";
// const Child = defineAsyncComponent(() => import("./components/Child")); //动态引入组件(异步)
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
