<template>
  <div>
    <NavBar/>

    <router-view/>

  </div>

</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  components:{
    NavBar
  }
  
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

</style>
