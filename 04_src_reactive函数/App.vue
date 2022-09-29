<template>
  <h4>欢迎</h4>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>性别：{{ person.sex }}</h2>
  <h2>职别：{{ person.job.type }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h2>地区：{{ person.job.address.a }}</h2>
  <h2>爱好：{{ person.hobby[0] }}</h2>
  <button @click="changeInfo">修改人员信息</button>
  <button @click="changeJob">修改工作信息</button>
  <button @click="changeAddress">修改工作地址</button>
  <button @click="changeHobby">修改爱好</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      sex: "男",
      job: {
        type: "前端工程师",
        salary: "30k",
        address: {
          a: "北京",
          b: "上海",
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    //reactive可以定义数组
    // let hobby = reactive(["抽烟", "喝酒", "烫头"]);

    function changeInfo() {
      // name是RefImpl类型=reference+implement （引用+实现）
      // name.value = "李四";
      person.name = "李四";
    }
    function changeJob() {
      // RefImpl类型中的对象是proxy类型（数据代理对象），是windows拥有的类型
      person.job.type = "后端工程师";
    }
    function changeAddress() {
      person.job.address.a = "广州";
    }
    function changeHobby() {
      person.hobby[0] = "学习";
    }

    return {
      person,
      changeAddress,
      changeJob,
      changeHobby,
      changeInfo,
    };
  },
};
</script>

<style></style>
