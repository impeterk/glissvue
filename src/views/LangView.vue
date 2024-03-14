<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const data = (await import(`@/locale/${route.params.lang}.ts`)).default
console.log(data)
</script>

<template>
  <h1 class="text-xl text-emerald-500">{{ data.title }}</h1>
  {{ $route.params.lang }}
</template>
