<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我x+1</button>

  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ salary }}K</h2>

  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    //shallowReactive只考虑对象中的第一层数据的响应式
    //readonly只读
    //shallowReadonly对象的第一层数据只读，没有响应式
    //不可以这样写：let person = shallowReadonly({})
    let person = reactive({
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
    // let x = shallowRef({
    //   y: 0,
    // });
    //直接在数据用会使页面监测不到数据的变化
    //需要在重新生成一个数据对象，如下面的用法
    // person = readonly(person)
    // person = shallowReadonly(person);

    return {
      sum,
      person,
      // toRefs只能展开对象的第一层,toRef可以单独作用在任意处
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>

<style></style>
