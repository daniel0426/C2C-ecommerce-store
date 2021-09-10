<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <div class="flex flex-col">
      <router-link to="/CreateAccount">Create Account </router-link>
      <router-link to="/CreateListing"> Create Listing </router-link>
      <router-link to="/Detail"> Detail </router-link>
      <router-link to="/Login"> Login </router-link>
      <router-link to="/MyListings"> My Listings </router-link>
      <router-link to="/Update"> Update </router-link>
      <router-link to="/Watchlist"> Watchlist </router-link>
    </div>

  
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
