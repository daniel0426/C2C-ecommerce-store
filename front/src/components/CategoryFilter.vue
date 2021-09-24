<template>
  <div class="flex-col">
    <h2 class="font-semibold text-2xl text-dark-purple font-epilogue mb-4">
      Filter By:
    </h2>
    <form
      @click.prevent="categorize"
      class="flex flex-1 md:flex-row flex-col items-center justify-between"
    >
      <button
        type="submit"
        class="
          text-white
          bg-gray-400
          px-6
          py-1
          m-1

          rounded-full
          text-1xl
          cursor-pointer
          ease-in-out
        "
      >
        All
      </button>
      <button
        type="submit"
        class="
          text-white
          bg-gray-400
          px-6
          py-1
          m-1

          rounded-full
          text-1xl
          cursor-pointer
          ease-in-out
        "
      >
        Mens
      </button>
      <button
        type="submit"
        class="
          text-white
          bg-gray-400
          px-6
          py-1
          m-1

          rounded-full
          text-1xl
          cursor-pointer
          ease-in-out
        "
      >
        Womens
      </button>
      <button
        type="submit"
        class="
          text-white
          bg-gray-400
          px-6
          py-1
          m-1

          rounded-full
          text-1xl
          cursor-pointer
          ease-in-out
        "
      >
        Children
      </button>
      <button
        type="submit"
        class="
          text-white
          bg-gray-400
          px-6
          py-1
          m-1
          rounded-full
          text-1xl
          cursor-pointer
          ease-in-out
        "
      >
        Accessories
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CategoryFilter",
  data() {
    return {
      clicked: false,
    };
  },

  methods: {
    categorize(e) {
      let button = e.target;
      let buttons = [...button.parentNode.querySelectorAll("button")];
      buttons.forEach((item) => item.classList.remove("bg-bright-purple"));
      if (e.target.type === "submit") {
        button.classList.toggle("bg-bright-purple");
      } else {
        return;
      }

      const category = e.target.innerText;
      this.clicked = !this.clicked;
      this.$emit("categorizeListings", category);
    },
  },
};
</script>

<style>
.background {
  background-color: purple;
}
</style>