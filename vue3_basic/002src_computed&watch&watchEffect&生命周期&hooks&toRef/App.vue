<template>
  <button @click="flag = !flag">显示/隐藏</button>
  <HelloWorld v-if="flag" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    let flag = ref(true)
    return {
      flag
    }
  }
}
</script>
