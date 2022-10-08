<template>
  <!-- <h4>{{ person }}</h4> -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ salary }}K</h2>
  <h2>x的值为{{ x.y }}</h2>
  <button @click="x.y++">点我x+1</button>
  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    //shallowReactive只考虑对象中的第一层数据的响应式
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    //深响应
    // let x = ref({
    //   y: 0,
    // });
    //浅响应
    let x = shallowRef({
      y: 0,
    });

    return {
      x,
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>

<style></style>
