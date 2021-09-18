<template>
  <!-- Commenting Interface - Alexis -->
  <div class="flex flex-col my-6 mx-12">
    <h2 class="text-dark-purple font-semibold text-2xl">
      Users Comments and Questions:
    </h2>
    <!-- 
    <div class="py-4" v-if="comments.length === 0">
      <h2 class="italic text-md text-center text-purple-grey">
        There are currently no comments to display.
      </h2>
    </div> -->

    <UserComment
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      @reply="reply(comment)"
      @delete="deleteComment(comment._id)"
      class="my-2"
    />

    <form @submit.prevent="postComment">
      <textarea
        v-model="comment.text"
        class="
          w-full
          border-2 border-opacity-30
          rounded-lg
          mb-4
          mt-4
          border-dark-purple
          placeholder-light-purple
          shadow-md
          p-2
        "
        name="user-comments"
        id="user-comments"
        cols="30"
        rows="4"
        placeholder="Type here to leave a comment or ask a question on this listing."
      />
      <button
        type="submit"
        class="
          justify-end
          w-1/5
          px-4
          py-2
          bg-bright-purple
          rounded-md
          text-white
          font-semibold
          mb-2
        "
      >
        Post Comment
      </button>
    </form>
  </div>
</template>

<script>
import UserComment from "./UserComment.vue";

export default {
  name: "Commenting",

  components: {
    UserComment,
  },

  computed: {
    comments() {
      return this.post.comments;
    },
  },

  props: {
    // comments: {
    //   type: Array,
    //   default: [],
    // },
    post: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {
      comment: {
        text: "",
      },
    };
  },

  methods: {
    async postComment() {
      console.log("Start Comment");

      console.log(this.comment, this.post);

      const response = await fetch(
        "http://localhost:4000/posts/" + this.post._id + "/comments/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.comment),
        }
      );
      // const data = await response.json();

      //EMIT EVENT TO TRIGGER GET POST IN PARENT COMPONENT HERE
      // reset form
      this.comment = {
        text: "",
      };

      this.$emit("refresh");
    },

    async deleteComment(commentId) {
      console.log(this.post._id + commentId);
      const response = await fetch(
        "http://localhost:4000/posts/" +
          this.post._id +
          "/comments/" +
          commentId,
        { method: "DELETE" }
      );
      const data = await response.json();

      this.$emit("refresh");
    },

    async reply(comment) {
      // do comment stuff
    },
  },
};
</script>

<style>
</style>