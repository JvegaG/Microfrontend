<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps<{ msg: string, onClick: () => void, count: number }>()
const countProp = reactive({ count: props.count ?? 0 })

const handleClick = () => {
  countProp.count += 1
}
// const count = ref(0)
</script>

<template>
  <h1>{{ props.msg }}</h1>

  <div class="card">
    <button type="button" v-on:click="handleClick()">count is {{ countProp.count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
