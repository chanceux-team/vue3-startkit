<script setup lang="ts">
import { ref } from 'vue';

const test = ref('Hello World');
</script>

<template>
  <main class="text-blue-800">
    {{ test }}
  </main>
</template>
