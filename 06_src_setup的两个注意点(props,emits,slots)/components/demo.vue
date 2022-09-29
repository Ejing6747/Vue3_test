<template>
  <h4>欢迎</h4>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发demo的Hello事件</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Demo",
  // 声明props,表明需要接收的数据
  props: ["msg", "school"],
  //声明emits,表明接收被绑定的事件
  emits: ["hello"],

  beforeCreate() {
    console.log("---beforecreate---");
  },

  setup(props, context) {
    console.log("---setup---", this, props, context); //context包含attrs,emit,slots
    //数据
    let person = reactive({
      name: "张三",
      age: 18,
    });
    //方法
    function test() {
      context.emit("hello", 666);
    }

    return {
      person,
    };
  },
};
</script>

<style></style>
