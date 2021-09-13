<template>
 <span @Click="GoBack" class="go-back text-dark-purple bg-transperant font-epilogue sm:text-lg  lg:text-2xl text-extrabold sm:m-10 lg:m-10  bg-cream sm:px-5 lg:px-10"> Back to Home</span> <br>
<div class="container lg:flex md:flex sm:flex-none bg-cream w-full h-auto font-epilogue">  
  <div class="logo-area space-y-1 text-dark-purple font-epilogue m-20 w-1/3 text-center text-sm bg-cream  sm:hidden md:block lg:block place-items-center">    
  <h1 class="main-heading sm:text-xl md:text-3xl lg:text-5xl text-dark-purple text-bold font-epilogue" > Thrift Me</h1>
   <img src="https://picsum.photos/id/1025/300/300" alt="" class="logo sm:ml-10 md:ml-1 lg:ml-1">   
    <p>Create and account to get thrifty with us!</p>
    <p>Access our full range of features, list your items</p> 
    <p>and customise your experience</p>
  </div>

  <div class="signup text-center xsm:m-0 md:m-5 lg:m-10 bg-cream xsm:w-full sm:w-full lg;w2/3 block"> 
 <h1 class="title text-dark-purple font-epilogue text-bold sm:text-xl md:text-2xl lg:text-3xl text-center ">Sign Up</h1><br>
    <span @click="GoLogin" class="subtitle text-dark-purple font-epilogue  text-sm text-center">Already a ThriftMe user? Sign in here</span><br><br>
    <form class="signup-form text-dark-purple sm:space-y-1 md:space-y-1 lg:space-y-1 text-sm  bg-cream text-center place-items-center" name="signup-form">
      <input type="text" class="fname bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" name="fname" v-model="fname" placeholder="FIRST NAME"  required="true"><br>
       <span class="error text-red-600 test-sm" v-if="msg.fname">{{msg.fname}}</span><br>
      <input  type="text" class="lname bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" name="lname" v-model="lname" placeholder="LAST NAME"  required="true"><br>
     <span class="error text-red-600 test-sm" v-if="msg.lname">{{msg.lname}}</span><br>
      <input type="text" class="date-of-birth placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" name="birth-date" v-model="dateofbirth"  placeholder="DD / MM / YYYY"  required="true"><br>
      <span class="error text-red-600 test-sm" v-if="msg.dateofbirth">{{msg.dateofbirth}}</span><br>
      <input type="email" class="email bg-white text-purple-grey placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" name="email" v-model="email" placeholder="EMAIL  ADDRESS"  required="true"><br>
        <span class="error text-red-600 test-sm" v-if="msg.email">{{msg.email}}</span><br>
      <input type="password" class="password bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" name="password" v-model="password" placeholder="PASSWORD"  required="true"><br>
       <span class="error text-red-600 text-sm" v-if ="msg.password">{{msg.password}}</span><br>
      <input type="password"  class="repeat-pass bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1" name="repeatpass" v-model="repeatpass" placeholder="REPEAT PASSWORD"  required="true"><br>     
       <span class="error text-red-600 text-sm" v-if ="msg.repeatpass">{{msg.repeatpass}}</span><br>
      <input type="checkbox"  name="agree"> I agree to the terms and conditions of use      
    </form><br>
    <button class="signup-form-button bg-dark-purple rounded-xl text-sm px-5 py-2 text-cream">Create Account</button><br>
    </div>    
</div>
<footer class="footer sm:h-0 md:h-10 lg:h-10 bg-bright-purple "></footer>
</template>

<script>

import HomeVue from './Home.vue'
import LoginVue from './Login.vue';

export default {
    name: "CreateAccount",

    props:{
      msg: String,      
    },
    data(){
      return {
        fname: '',
        lname: '',
        dateofbirth: '',
        email: '',
        password: '',
        repeatpass: '',
        msg: [],        
       }
    },
  watch:{
    fname(value){
      this.fname = value;
      this.validateFname(value);
    },

     lname(value){
      this.lname = value;
      this.validateLname(value)
    },

    dateffbirth(value){
       this.dateofbirth = value;
      this.validateDateOfBirth(value);        
      },

      email(value){
        this.email=value;
        this.validateEmail(value);
      },

      password(value){
        this.password = value;
        this.validatePassword(value);
      },

      repeatpass(value){
        this.repeatpass = value;
        this.validateRepeatPass
      },

  },
    components:{
      HomeVue,
    },

    methods:{

      validateFname(value){
        if (value.length < 3 ) {
          this.msg['fname'] = 'Name must contain at least 3 letters'
        } else{
          this.msg['fname'] = ''
        }
      },

      validateLname(value){
         if (value.length < 2 ) {
          this.msg['lname'] = 'Name must contain at least 2 letters'
        } else{
          this.msg['lname'] = ''
        }
        
      },

      validateDateOfBirth(value){
        if (value.length < 10){
          this.msg['dateofbirth'] = 'Please enter a valid Date DD/MM/YY'
        }else{
          this.msg['dateofbirth'] = '';
        }
       
      },

      validateEmail(value){
        if (/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/.test(value))
        {
          this.msg['email'] = ' ';
        } else{
          this.msg['email'] = 'Invalid Email Address';
        }
      },

      validatePassword (value){
        const difference = 8 - value.length;
        if (value.length <8 ) {
          this.msg['password'] = 'Password must be 8 characters !  ' +  difference +  ' chracters  left';
        }else {
          this.msg['password'] = '';
        }
      },

      validateRepeatPass (value) {
         const difference = 8 - value.length;
        if (value.length < 8 ) {
          this.msg['repeatpass'] = 'Password must be 8 characters !  ' +  difference +  ' chracters  left';
        }else {
          this.msg['repeatpass'] = '';
        }
        
        },
         GoBack(){
        return this.$router.push(HomeVue)
      },

      GoLogin(){
        return this.$router.push(LoginVue)
      }
     },   
      
     
    }


</script>

<style>

</style>