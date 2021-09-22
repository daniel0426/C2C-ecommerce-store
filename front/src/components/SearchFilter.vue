<template>
<div class="flex items-center">
  <h1 class="text-1xl  text-dark-purple font-epilogue">I am looking for ...</h1>
<form action="" @submit.prevent="filterByInput" class="flex items-center md:w-1/2 m-auto relative my-4 w-2/3">
  <input v-model="item" class=" w-full px-4 py-2  bg-bright-purple rounded  placeholder-white text-white outline-none" type="text" placeholder="Seach items...">
  <button type="submit" class="absolute right-4"><i class="text-xl fas fa-search text-white  "></i></button>
</form>
</div>
</template>

<script>
export default {
  name: "SearchFilter",
  data(){
    return{
      item:null,
    }
  },
  methods: {
    filterByInput (e){
      this.$emit("filteredByInput", this.item)
      this.item=""
    }
  }
};
</script>

<style>
</style>