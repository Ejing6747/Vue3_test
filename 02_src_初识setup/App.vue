<template>
  <h4>欢迎</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
export default {
  name: "App",
  setup() {
    let name = "张三";
    let age = 18;
    let sex = "男";
    function sayHello() {
      alert(`我叫${name},我${age}岁`);
    }
    return {
      name,
      age,
      sex,
      sayHello,
    };
  },
};
</script>

<style></style>
