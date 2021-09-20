<template>
<div class=" flex justify-around items-center" >
  <h2 class="text-1xl text-dark-purple font-epilogue">Category :</h2>
  <div class="flex justify-around flex-1  md:flex-row  flex-col items-center justify-center">
    <button class="text-bright-purple text-1xl cursor-pointer hover:text-purple-700 transition duration-200 ease-in-out">MENS</button>
    <button class="text-bright-purple text-1xl cursor-pointer hover:text-purple-700 transition duration-200 ease-in-out">WOMANS</button>
    <button class="text-bright-purple text-1xl cursor-pointer hover:text-purple-700 transition duration-200 ease-in-out">CHILDREN</button>
    <button class="text-bright-purple text-1xl cursor-pointer hover:text-purple-700 transition duration-200 ease-in-out">ACCESSORIES</button>
  </div>
</div>
</template>

<script>
export default {
  name: "CategoryFilter",
};
</script>

<style>
</style>