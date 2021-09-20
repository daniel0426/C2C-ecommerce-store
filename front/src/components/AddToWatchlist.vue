<template>
  <!-- Add to Watchlist Component - Alexis -->
  <div class="flex cursor-pointer flex-row items-center justify-end" @click="$emit('add')">
    <h3 class="text-base md:text-xl font-semibold text-dark-purple">
      Add to Watchlist
    </h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 md:h-8 w-5 md:w-8 text-dark-purple mx-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>