<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Demo",

  //vue2中的监听
  // watch: {
  //   sum(newValue, oldValue) {
  //     console.log(`sum的值变化了${this.sum}`, newValue, oldValue);//sum 是newValue
  //   },
  // },

  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("你好啊");
    //vue3中的watch是一个方法，可以重复使用，也可以把多个监视对象写在一个watch里
    //方法一：第一参数，监视的对象，2，监视的回调，3，监视的配置
    watch(
      sum,
      (newValue, oldValue) => {
        console.log(`sum的值变化了${sum}`, newValue, oldValue); //sum是[object Object]
      },
      { immediate: true }
    );
    watch(msg, (newValue, oldValue) => {
      console.log(`msg的值变化了${msg}`, newValue, oldValue); //sum是[object Object]
    });
    //方法二,多个监视放在数组中
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log(`sum的值变化了${sum}`, newValue, oldValue); //sum是[object Object]
      },
      { immediate: true, deep: true }
    );
    return {
      sum,
      msg,
    };
  },
};
</script>

<style></style>
