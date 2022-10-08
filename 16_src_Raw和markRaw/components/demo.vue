<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我x+1</button>

  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ salary }}K</h2>
  <h2 v-show="person.car">座驾：{{ person.car }}</h2>

  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">增长薪资</button>
  <button @click="showRowPerson">输出最原始的person</button>
  <button @click="addCar">添加座驾</button>
  <button @click="person.car.price++">修改座驾价格</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, toRaw, markRaw } from "vue";
//toRaw输出reactive定义的原始的数据，即没有添加reactive响应式的数据
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRowPerson() {
      const p = toRaw(person);
      console.log(p);
    }

    function addCar() {
      let car = { name: "BMW", price: "40" };
      // 给响应式对象最佳的数据也是响应式的，也就是说car也是响应式的
      // person.car = car;
      //markRaw标记的数据永远不具有响应，
      // markRaw的数据在后台是被修改了，但是不会在页面显示，这就是与readonly的区别
      person.car = markRaw(car);
    }

    return {
      sum,
      person,
      ...toRefs(person),
      salary: toRef(person.job.j1, "salary"),

      showRowPerson,
      addCar,
    };
  },
};
</script>

<style></style>
