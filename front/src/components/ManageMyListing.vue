<template>
  <!-- Manage My Listing Component - Alexis -->
  <div
    class="
      shadow-md
      p-2
      my-2
      border-2 border-opacity-30
      font-epilogue font-semibold
      rounded-lg
      bg-white
      border-dark-purple
      flex
      justify-between
    "
  >
    <div>
      <h2 class="text-xl text-dark-purple">Manage My Listing:</h2>
      <h3 class="text-purple-grey">Views:</h3>
      <h3 class="text-purple-grey">Listed On:</h3>
    </div>
    <div class="object-bottom mt-auto mb-1">
      
      <button
        @click="moveToUpdate"
        class="
          px-4
          py-2
          bg-bright-purple
          rounded-md
          text-white
          font-semibold
          mx-2
        "
        
      >
        Edit Listing
      </button> 
      
      
      <button
        @click = "showDeleteConfirm"
        class="
          px-4
          py-2
          bg-bright-purple
          rounded-md
          text-white
          font-semibold
          mx-2
        "
      >
        Delete Listing
      </button>
    </div>

     <!-- delete Confirm message - Daniel -->
    <div v-if="deleteConfirmMessage" class="confirmdelete border-2 rounded-xl border-light-purple absolute top-40 p-6 w-1/3 bg-gray-200 text-bright-purple flex flex-col justify-center	items-center	 ">
        <h1 
        class="
        text-2xl 
        mt-4 
        mb-10
        ">
        Delete Listing
        </h1>
        <p class="w-2/3 mb-8">
          Are you sure you wish to delete this
        listing? Users will no longer be able to view
        it, and this item will be removed from your 
        ‘Current Listings’. This action cannot be 
        reversed. Do you wish to proceed?
        </p>
        <div class="w-full flex justify-evenly ">
          <button 
              @click="deletePost" 
              class="
              px-4
              py-2
              bg-red-500
              rounded-md
              text-white
              font-semibold
              mx-2
              cursor-pointer
              "
              
              >
              DELETE LISTING
          </button>
          <button 
              @click="cancelDelete" 
              class=" px-4
              py-2
              bg-bright-purple
              rounded-md
              text-white
              font-semibold
              mx-2
              cursor-pointer
              "
              >
              CANCEL
          </button>
        </div>
    </div>
  </div>
 
</template>

<script>
export default {

  name: "ManageMyListing",
  
  data(){
    return{
      deleteConfirmMessage: false,
    }
  },
  
   async mounted(){
     console.log(this.post);
  },
  
  props: {
      postId :String, 
      post: {
        type: Object,
        default: {},
      },
  },

  methods : {
    moveToUpdate(){
      this.$router.push({name:"Update", params : {post: this.post}})
    },
    
    async deletePost(){
      await fetch(`http://localhost:4000/posts/${this.postId}`, {
        method: "DELETE",
      }).then((res)=> {
        if(res.status === 200){
          console.log("post deleted")
          this.$router.push('/')
        }
      })
    },

    showDeleteConfirm(){
      this.deleteConfirmMessage = true;
    },

    cancelDelete(){
      this.deleteConfirmMessage = false;
    }
  }
  
};
</script>

<style>
</style>