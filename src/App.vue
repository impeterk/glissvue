<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <p>loading...</p>
    </template>
  </Suspense>
</template>
