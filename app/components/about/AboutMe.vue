<script setup>
import { storeToRefs } from "pinia";
import { useSiteStore } from "~/stores/site";

const siteStore = useSiteStore();
const { aboutMe } = storeToRefs(siteStore);
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <picture>
        <source srcset="/profile.avif" type="image/avif" />
        <source srcset="/profile.webp" type="image/webp" />
        <img
          src="/profile.jpg"
          class="rounded-lg w-96"
          width="768"
          height="790"
          loading="lazy"
          decoding="async"
          alt=""
        />
      </picture>
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
