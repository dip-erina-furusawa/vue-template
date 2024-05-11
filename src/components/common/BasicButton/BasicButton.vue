<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>
<template>
  <Button class="bg-blue-500">
    {{ label }}
  </Button>
</template>
<style scoped></style>
