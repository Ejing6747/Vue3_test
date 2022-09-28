<template>
  <h4>欢迎</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h2>职别：{{ job.type }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <button @click="changeInfo">修改人员信息</button>
  <button @click="changeJob">修改工作信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let sex = ref("男");
    let job = ref({
      type: "前端工程师",
      salary: "30k",
    });

    function changeInfo() {
      // name是RefImpl类型=reference+implement （引用+实现）
      name.value = "李四";
    }
    function changeJob() {
      // RefImpl类型中的对象是proxy类型（数据代理对象），是windows拥有的类型
      job.value.type = "后端工程师";
    }

    return {
      name,
      age,
      sex,
      job,
      changeInfo,
      changeJob,
    };
  },
};
</script>

<style></style>
