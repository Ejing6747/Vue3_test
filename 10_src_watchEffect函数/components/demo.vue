<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++">点我加1</button>
  <hr />
  <h2>当前的信息为:{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}K</h2>
  <button @click="person.name = person.name + '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.treatment.salary++">增长薪资</button>
</template>

<script>
import { reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        treatment: {
          salary: 20,
        },
      },
    });
    watch(
      sum,
      (nv, ov) => {
        console.log(nv, ov);
      },
      {
        immediate: true,
      }
    );
    //watchEffect
    //不确定监视对象
    //默认开启了immediate:true
    watchEffect(() => {
      console.log(`watch effect指定的回调执行了`);
      const x2 = person.job.treatment.salary;
    });
    //返回一个对象
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style></style>
