<script setup>
const colorMode = useColorMode();
const isClientMounted = ref(false);

onMounted(() => {
  isClientMounted.value = true;
});
</script>

<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    "
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Hi, I'm Martin
      </h1>
      <p
        class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        I love Python and Open Source social coding
      </p>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="isClientMounted && colorMode.value == 'dark'"
        src="/developer-dark.svg"
        class="w-full h-auto"
        width="415"
        height="376"
        decoding="async"
        alt="Developer Dark"
      />
      <img
        v-else
        src="/developer.svg"
        class="w-full h-auto"
        width="415"
        height="376"
        decoding="async"
        alt="Developer Light"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
