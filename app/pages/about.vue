<script setup>
import feather from "feather-icons";

definePageMeta({
  scrollToTop: true,
});

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
  <div>
    <AboutMe class="container mx-auto" />
  </div>
</template>

<style scoped></style>
