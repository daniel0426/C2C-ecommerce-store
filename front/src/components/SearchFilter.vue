<template>
  <div class="flex items-center">
    <h1 class="text-1xl font-bold text-dark-purple font-epilogue">
      I am looking for ...
    </h1>
    <form
      action=""
      @submit.prevent="filterByInput"
      class="
        flex flex-1
        items-center
        md:w-1/2
        m-auto
        mx-12
        relative
        my-4
        w-full
      "
    >
      <input
        v-model="item"
        class="
          w-full
          px-4
          py-2
          border border-purple-grey
          rounded-full
          placeholder-white
          text-purple-grey
          outline-none
        "
        type="text"
        placeholder="Seach items..."
      />
      <button type="submit" class="absolute right-4">
        <i class="text-xl font-medium fas fa-search text-purple-grey"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  data() {
    return {
      item: null,
    };
  },
  methods: {
    filterByInput(e) {
      this.$emit("filteredByInput", this.item);
      this.item = "";
    },
  },
};
</script>

<style>
</style>