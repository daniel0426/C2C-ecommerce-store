<template>
  <div
    class="w-96 border-2 border-opacity-30 border-dark-purple rounded-xl px-4 my-2 flex flex-row"
  >
    <div class="flex flex-col w-1/3 align-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-20 w-20 text-purple-grey"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd"
        />
      </svg>
      <h3 class="text-lg font-epilogue font-semibold text-purple-grey">
        User Name
      </h3>
    </div>
    <div class="flex flex-col ml-6 mt-2">
      <h2
        class="text-lg font-epilogue pb-2 mb-2 font-semibold text-dark-purple text-center"
      >
        Seller Information:
      </h2>
      <h3 class="text-lg font-epilogue font-semibold text-purple-grey">
        Location:
      </h3>
      <h3 class="text-lg font-epilogue font-semibold text-purple-grey">
        Sales:
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SellerTile"
};
</script>

<style>
</style>