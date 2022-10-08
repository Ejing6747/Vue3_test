<template>
  <div class="son">
    <h3>我是Son组件(孙),{{ car.name }}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.son {
  background-color: pink;
  padding: 10px;
}
</style>
