<template>
  <div class="bg-white shadow rounded p-4 text-center">
    <p class="text-sm text-gray-500">{{ title }}</p>
    <p class="text-2xl font-bold">{{ value }}</p>
    <p v-if="subtitle" class="text-xs text-gray-400">{{ subtitle }}</p>
  </div>
</template>

<script>
export default { props: ["title", "value", "subtitle"] };
</script>
