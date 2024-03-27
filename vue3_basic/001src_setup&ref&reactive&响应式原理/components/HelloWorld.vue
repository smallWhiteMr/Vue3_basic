<template>
  <!-- 差异：Vue3中，template内可以不写根标签 -->
  <h1>{{ title }}</h1>
  <h1>{{ ComApi }}</h1>
  <h1>人物信息</h1>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>{{ job.type }}</h3>
  <h3>{{ job.salary }}</h3>
  <h3>{{ hobby.join() }}</h3>
  <button @click="changePerson">更改人物信息</button> 
  <h1>动物信息</h1>
  <h3 v-if="cat.gender">{{ cat.gender }}</h3>
  <h3>{{ cat.name }}</h3>
  <h3>{{ cat.age }}</h3>
  <h3>{{ cat.food.join() }}</h3>
  <h3>{{ cat.play.one }}</h3>
  <h3>{{ cat.play.two.joy }}</h3>
  <button @click="changeCat">更改猫信息</button>
  <button @click="addCatInfo">添加信息</button>
  <button @click="delCatInfo">删除信息</button>
  <button @click="changeCatFood">修改食物</button>
</template>

<script>
// 如果setup返回一个函数，需要手动引入渲染函数h
// import { h } from 'vue';

import { ref, reactive } from 'vue'

export default {
  name: 'HelloWorld',
  setup() {
    let title = 'Vue3.0'
    let ComApi = 'Composition Api ==> 组合式Api'
    // 人物信息
    let name = ref('lqj')
    let age = ref(18)
    let job = ref({
      type: 'F-E',
      salary: '20K'
    })
    let hobby = ref(['吃饭', '睡觉', '打游戏'])
    // 动物信息
    const cat = reactive({
      name: '布偶猫',
      age: 2,
      food: ['肉', '鱼', '米饭'],
      play: {
        one: '逗猫棒',
        two: {
          joy: '猫抓板'
        }
      }
    })

    function changePerson() {
      name.value = 'tjc'
      age.value = 19
      job.value.type = 'UI'
      job.value.salary = '15K',
      // 差异：Vue2中给数组整体赋值，页面是无法响应该变化的。但Vue3中可以，因为Vue3实现对象的响应式是借助Proxy实现，不是传统的defineProperty的setter和getter
      hobby.value[0] = 'a',
      hobby.value[1] = 'b',
      hobby.value[2] = 'c'
    }

    function changeCat() {
      cat.name = '橘猫',
      cat.age = 3,
      cat.food = ['草', '鼠', '骨'],
      cat.play.one = '爬树',
      cat.play.two.joy = '纸箱'
    }

    function addCatInfo() {
      cat.gender = '公猫'
    }
    function delCatInfo() {
      delete cat.age
    }
    function changeCatFood() {
      cat.food[0] = '鲨鱼'
    }

    // 1 返回一个对象
    return {
      title,
      ComApi,
      name,
      age,
      job,
      hobby,
      cat,
      changePerson,
      changeCat,
      addCatInfo,
      delCatInfo,
      changeCatFood
    }
    // 2 返回一个函数
    // return () => {
    //   return h('h1', 'hello Vue3.0')
    // }
  }
}
</script>
