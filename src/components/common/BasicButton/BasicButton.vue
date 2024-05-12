<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>
<template>
  <ShadButton as="button">
    {{ label }}
  </ShadButton>
</template>
<style scoped></style>
