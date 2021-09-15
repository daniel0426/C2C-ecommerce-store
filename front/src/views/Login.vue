<template>
<span @Click="GoBack" class="go-back text-dark-purple bg-transperant font-epilogue sm:text-sm  lg:text-2xl text-extrabold sm:m-5 md:m5 lg:m-10  bg-cream sm:px-5 lg:px-10"> Back to Home</span> <br>
 <div class="container lg:flex md:flex sm:flex-none bg-cream w-screen h-screen font-epilogue  place-items-center">
   <div class="logo-area space-y-1 text-dark-purple font-epilogue sm:m-10 lg:m-20 w-1/3 text-center text-sm bg-cream  sm:hidden md:block lg:block place-items-center">    
  <h1 class="main-heading sm:text-xl md:text-3xl lg:text-5xl text-dark-purple text-bold font-epilogue" > Thrift Me</h1>
   <img src="https://picsum.photos/id/1025/300/300" alt="" class="logo sm:ml-10 md:ml-1 lg:ml-1"> 
   <span @click="GoSignup" class="signup-link">New to Thriftme <b><u>Create Account Here</u></b></span><br>  
   
    
    </div>
<div class="login-area text-center  bg-cream sm-h-screen xsm:w-screen sm:w-screen lg;w2/3 block text-dark-purple text-sm space-y-5  sm:mt-5 sm:m-6 "> 
<h1 class="main-heading sm:text-xl md:text-3xl lg:text-4xl text-dark-purple text-bold font-epilogue">Login</h1><br>
<p>If you are an existing user, enter your login below</p>
<p>to enjoy the full Thriftme experience</p>
<form @submit.prevent class="login-form text-center  space-y-5 m-5" name="login">
    <input class="login-email bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" type="text" name="login-email" v-model="loginemail" placeholder="Enter your email"/><br>
    <input class="login-password bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" type="password" name="login-password" v-model="loginpassword" placeholder="Enter your password"/><br>
    <button type="submit" class="login-button bg-dark-purple rounded-xl text-sm px-5 py-2 text-cream">Login</button><br><br>
  </form><br>
  <span>Forgot your login details?</span><br><br>

  
  <span @click="GoSignup" class="signup-link md:hidden lg:hidden">New to Thriftme <b><u>Create Account Here</u></b></span><br>
</div>
 </div>
<footer class="footer sm:h-8 md:h-10 lg:h-10 bg-bright-purple place-self-flexend "></footer>
</template>

<script>
import CreateAccountVue from './CreateAccount.vue'
import HomeVue from './Home.vue'
export default {
    name: "Login",

     data(){
      return {
        login:{
          loginemail: null,
          loginpassword: null
        }
      }
     },
    

    methods:{
         GoBack(){
        return this.$router.push(HomeVue);
      },

      GoSignup(){
         return this.$router.push(CreateAccountVue);
      },

      Login(){
        
      }
}
}


</script>

<style>

</style>