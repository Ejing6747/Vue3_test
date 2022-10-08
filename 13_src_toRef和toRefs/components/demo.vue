<template>
  <!-- <h4>{{ person }}</h4> -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ salary }}K</h2>
  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    //ref类型的值在模板里使用是不需要.value来取的
    const name1 = person.name; //注意输出字符串，并不是响应式的数据
    console.log("%%%%", name1);
    // const name2 = toRef(person, name);
    // console.log("####", name2);
    //toRefs是输出一群数据
    const x = toRefs(person);
    console.log(x);

    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.j1, "salary")
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),
    };
    //ref引用是创建的一个新对象，会实现与原数据分离
    // return {
    //   person,
    //   name: ref(person.name),
    //   age: ref(person.age),
    //   salary: ref(person.job.j1.salary)
    // };
  },
};
</script>

<style></style>
