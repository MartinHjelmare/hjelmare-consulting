<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, Button },
};
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

  </div>
</template>

<style scoped></style>
