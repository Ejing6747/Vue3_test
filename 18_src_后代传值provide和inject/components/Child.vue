<template>
  <div class="child">
    <h3>我是Child组件(子),{{ car.price }}</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
import { inject } from "vue";

export default {
  name: "Child",
  components: { Son },
  setup() {
    //一般父子传值还是建议props,祖孙才建议provide和inject
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
