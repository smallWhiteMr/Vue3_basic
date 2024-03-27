<template>
  <h1>任务信息</h1>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>{{ hobby.join() }}</h3>
  <h3>{{ friend.name }}</h3>
  <h3>{{ friend.age }}</h3>
  <h3>{{ friend.hobby.play }}</h3>
  <h1>动物信息</h1>
  <h3>{{  }}</h3>
  <h3>{{ kinds }}</h3>
  <h3>{{ old }}</h3>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    let person = reactive({
      name: 'lqj',
      age: 18,
      hobby: [1,2,3],
      friend: {
        name: 'tjc',
        age: 19,
        hobby: {
          play: 'qq飞车'
        }
      }
    })
    let animal = reactive({
      kinds: 'cat',
      old: 1
    })
    return {
      kinds: toRef(animal, 'kinds'),
      old: toRef(animal, 'old'),
      ...toRefs(person)
    }
  }
}
</script>
