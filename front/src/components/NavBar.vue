<template>
  <div
    class="bg-bright-purple font-epilogue flex flex-row h-20 justify-between px-4 items-center border border-black"
  >
    <h1 class="text-2xl text-cream font-bold tracking-wide">ThriftMe</h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 text-cream"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
    <ul class="hidden flex flex-row text-cream font-epilogue uppercase">
      <li>List Item</li>
      <li>My Listings</li>
      <li>Watchlist</li>
      <li>Notifications</li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
</style>