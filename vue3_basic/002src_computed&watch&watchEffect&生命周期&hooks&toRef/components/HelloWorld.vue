<template>
  <h1>计算属性computed</h1>
  姓：<input type="text" v-model="firstName">
  <br>
  名：<input type="text" v-model="lastName">
  <br>
  全名：<span>{{ fullName }}</span>
  <h1>监视watch</h1>
  <button @click="firstName = '李'">changeFirstName</button>
  <button @click="lastName = '四'">changeLastName</button>
  <h1>{{ one }}</h1>
  <h1>{{ two.hobby }}</h1>
  <button @click="one = 'tjc'">changeFfriendOne</button>
  <button @click="two.hobby = 'mj'">changeHobby</button>
  <h1>坐标信息(x, y)：({{ pointer.x}}, {{ pointer.y }})</h1>
</template>

<script>
import { ref, reactive, computed, watch, toRefs } from 'vue'
import getPointer from '../hooks/getPointer'
export default {
  name: 'HelloWorld',
  setup() {
    let firstName = ref('张')
    let lastName = ref('三')
    let friend = reactive({
      one: 'lqj',
      two: {
        hobby: 'game'
      }
    })
    /* let pointer = reactive({
      x: 0,
      y: 0
    }) */
    let pointer = getPointer()
    // 1 computed简写
    /* let fullName = computed(() => {
      return firstName.value + '-' + lastName.value
    }) */

    // 2 computed完整版，可读可改
    let fullName = computed({
      get() {
        return firstName.value + '-' + lastName.value
      },
      set(val) {
        firstName.value = val.split('-')[0]
        lastName.value = val.split('-')[1]
      }
    })

    // 1 监视某个ref定义的基本类型数据
    // watch(firstName, (newValue, oldValue) => console.log('firstName==>', newValue, oldValue), { immediate: true })
    // watch(lastName, (newValue, oldValue) => console.log('lastName==>', newValue, oldValue), { immediate: true })

    // 2 监视多个ref定义的基本数据类型
    // watch([firstName, lastName], (newValue, oldValue) => console.log('firstName & lastName==>', newValue, oldValue), { immediate: true })

    // 3 监视reactive定义的整个引用数据类型
    // watch(friend, (newValue, oldValue) => console.log('friend==>', newValue, oldValue), { immediate: true })

    // 4 监视reactive定义的整个引用数据类型中的某个属性，且该属性值是基本类型
    watch(() => friend.one, (newValue, oldValue) => console.log('friend.one==>', newValue, oldValue), { immediate: true })

    // 5 监视reactive定义的整个引用数据类型中的多个属性，且该属性值都是基本类型

    // 6 监视reactive定义的整个引用数据类型中的某个属性，且该属性值又是引用类型
    /* function getPointer(event) {
      pointer.x = event.pageX
      pointer.y = event.pageY
    }
    onMounted(() => {
      window.addEventListener('click', getPointer)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('click', getPointer)
    })
 */
    return {
      firstName,
      lastName,
      fullName,
      ...toRefs(friend),
      pointer
    }
  }
}
</script>
