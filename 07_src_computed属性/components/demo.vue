<template>
  <h1>一个人的信息</h1>
  姓:<input type="text" v-model="person.firstName" />
  <br />
  名:<input type="text" v-model="person.lastName" />
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  name: "Demo",
  //vue2的计算属性写法
  //   computed: {
  //     fullName() {
  //       return this.person.firstName + "-" + this.person.lastName;
  //     },
  //   },

  setup() {
    //数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    //vue3的计算属性,是一个组合的API，需要引入
    //计算属性的简写
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });
    //计算属性的完整写法
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        //split分割成数组
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    return {
      person,
    };
  },
};
</script>

<style></style>
