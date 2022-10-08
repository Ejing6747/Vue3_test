<template>
  <!-- <Demo /> -->
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
// import Demo from "./components/demo.vue";
import { ref, customRef } from "vue";

export default {
  name: "App",
  // components: { Demo },

  setup() {
    // let keyWord = ref("Hello");//vue定义的ref

    //通过customRef自定义ref;
    //trigger: 表示重新读取数据生成模板;track:追踪数据
    function myRef(value, delay) {
      let timer;
      const x = customRef((track, trigger) => {
        return {
          get: function () {
            track(); //3.打开追踪，返回值value的变化
            return value;
          },
          set: function (newValue) {
            //清除定时器防抖
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue; //1,更改数据
              trigger(); //2.提示重新生成模板
            }, delay);
          },
        };
      });
      return x;
    }
    let keyWord = myRef("Hello", 500); //使用自定义ref
    return { keyWord };
  },
};
</script>

<style></style>
