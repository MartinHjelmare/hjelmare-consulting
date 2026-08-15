<script setup>
import feather from "feather-icons";

definePageMeta({
  scrollToTop: true,
});

const contacts = [
  {
    id: 1,
    name: "Stockholm, Sweden",
    icon: "map-pin",
  },
  {
    id: 2,
    name: "hjelmare.consulting@gmail.com",
    icon: "mail",
  },
];

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
