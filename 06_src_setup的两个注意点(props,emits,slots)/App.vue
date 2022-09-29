<template>
  <Demo @hello="sayHello" msg="你好啊" school="尚硅谷" />
</template>

<script>
import Demo from "./components/demo.vue";
export default {
  name: "App",
  components: { Demo },

  setup() {
    function sayHello(value) {
      alert(`你好啊，你触发的hello事件传回的参数是${value}`);
    }

    return {
      sayHello,
    };
  },
};
</script>

<style></style>
