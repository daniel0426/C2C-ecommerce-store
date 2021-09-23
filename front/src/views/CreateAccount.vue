<template>
        <span
                @Click="goBack"
                class="go-back text-dark-purple bg-transperant font-epilogue sm:text-lg  lg:text-2xl text-extrabold sm:m-10 lg:m-10 sm:h-auto  bg-cream sm:px-5 lg:px-10"
        >
                Back to Home</span
        >
        <br />
        <div
                class="container lg:flex md:flex sm:flex-none bg-cream w-screen h-screen font-epilogue place-items-center"
        >
                <div
                        class="logo-area space-y-1 text-dark-purple font-epilogue m-20 w-1/3 text-center text-sm bg-cream  sm:hidden md:block lg:block place-items-center"
                >
                        <h1
                                class="main-heading sm:text-xl md:text-3xl lg:text-5xl text-dark-purple text-bold font-epilogue"
                        >
                                Thrift Me
                        </h1>
                        <img
                                src="https://picsum.photos/id/1025/300/300"
                                alt=""
                                class="logo sm:ml-10 md:ml-1 lg:ml-1"
                        />
                        <p>Create and account to get thrifty with us!</p>
                        <p>
                                Access our full range of features, list your
                                items
                        </p>
                        <p>and customise your experience</p>
                </div>

                <div
                        class="signup text-center sm:m-5 md:m-5 lg:m-10 sm:mt-5 bg-cream xsm:w-full sm:w-full lg;w2/3 block"
                >
                        <h1
                                class="title text-dark-purple font-epilogue text-bold sm:text-xl md:text-2xl lg:text-3xl text-center "
                        >
                                Sign Up
                        </h1>
                        <br />
                        <span
                                @click="goLogin"
                                class="subtitle text-dark-purple font-epilogue  text-xs text-center"
                                >Already a ThriftMe user?
                                <b><u>Sign in here</u></b></span
                        ><br /><br />
                        <form
                        @submit="createSingleUser"
                                
                                class="signup-form text-dark-purple sm:space-y-1 md:space-y-1 lg:space-y-1 text-sm  bg-cream text-center place-items-center"
                                name="signup-form" novalidate
                                
                        >
                                <input
                                        type="text"
                                        class="fname bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1"
                                        name="fname"
                                        v-model="account.fname"
                                        placeholder="FIRST NAME"
                                /><br />
                                <span
                                        class="error text-red-600 text-xs text-bold"
                                        v-if="msg.fname"
                                        >{{ msg.fname }}</span
                                ><br />
                                <input
                                        type="text"
                                        class="lname bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1"
                                        name="lname"
                                        v-model="account.lname"
                                        placeholder="LAST NAME"
                                /><br />
                                <span
                                        class="error text-red-600 text-xs text-bold"
                                        v-if="msg.lname"
                                        >{{ msg.lname }}</span
                                ><br />
                                <input
                                        type="text"
                                        class="date-of-birth bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1"
                                        name="birth-date"
                                        v-model="account.dateofbirth"
                                        placeholder="DATE OF BIRTH"
                                /><br />
                                <span
                                        class="error text-red-600 text-xs text-bold"
                                        v-if="msg.dateofbirth"
                                        >{{ msg.dateofbirth }}</span
                                ><br />
                                <input
                                        type="email"
                                        class="email bg-white text-purple-grey placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1"
                                        name="email"
                                        v-model="account.email"
                                        placeholder="EMAIL  ADDRESS"
                                /><br />
                                <span
                                        class="error text-red-600 text-xs text-bold"
                                        v-if="msg.email"
                                        >{{ msg.email }}</span
                                ><br />
                                <input
                                        type="password"
                                        class="password bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1"
                                        name="password"
                                        v-model="account.password"
                                        placeholder="PASSWORD"
                                /><br />
                                <span
                                        class="error text-red-600 text-xs text-bold"
                                        v-if="msg.password"
                                        >{{ msg.password }}</span
                                ><br />
                                <input
                                        type="password"
                                        class="confirm-password bg-white placeholder-purple-grey text-center opacity-60 rounded-xl border-2 border-purple-grey border-solid px-5 py-1"
                                        name="confirm-password"
                                        v-model="account.confirmpassword"
                                        placeholder="CONFIRM PASSWORD"
                                /><br />
                                <span
                                        class="error-confirm-password text-red-600 text-xs text-bold"
                                        v-if="msg.confirmpass"
                                        >{{ msg.confirmpass }}</span
                                ><br /><br />
                                <input type="checkbox" name="agree" />
                                I agree to the terms and conditions of use<br />
                                <button
                                        
                                        type="submit"
                                        class="signup-form-button bg-dark-purple rounded-xl text-sm px-5 py-2 text-cream"
                                        @click.prevent="validateForm"
                                        
                                >       
                                        Create Account</button
                                ><br />
                        </form>
                        <br />
                </div>
        </div>
</template>

<script>
import HomeVue from "./Home.vue";
import LoginVue from "./Login.vue";

export default {
        name: "CreateAccount",

        props: {
                msg: String,
        },

        components: {
                HomeVue,
        },

        data() {
                return {
                        account: {
                                fname: null,
                                lname: null,
                                dateofbirth: null,
                                email: null,
                                password: null,
                                confirmpassword: null,
                        },
                        msg: [],
                };
        },

        methods: {    
              
                validateForm() {

                        var firstname = this.account.fname;
                        var lastname = this.account.lname;
                        var dob = this.account.dateofbirth;
                        var email= this.account.email;
                        var pass1 = this.account.password;
                        var pass2 = this.account.confirmpassword;

                        
                        var  fnameErr = true
                        var  lnameErr = true
                        var  dobErr = true
                        var emailErr =true
                        var passErr = true
                        var confirmErr = true

                        //validate first name
                        if (firstname == ''){
                                this.msg['fname'] = "Field Cannot Be Blank !"
                                console.log("Field cannot be blank");
                        } else {
                                const regex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/
                                if (regex.test(firstname) === false) {
                                        this.msg['fname'] = "Please Enter A Valid First Name !"                                        
                                }else {
                                        fnameErr = false
                                }
                        }

                        //validate last name
                        if (lastname == ''){
                                this.msg['lname'] = "Field Cannot Be Blank !";
                                console.log("Field cannot be blank");
                        } else {
                                const regex =  /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/
                                if (regex.test(lastname) === false) {
                                        this.msg['lname'] = "Please Enter A Valid last Name !";                                        
                                } else {
                                        lnameErr = false
                                }
                        }

                        //validate date of birth
                        if (dob == '' ) {
                                this.msg['dateofbirth'] = "Field Cannot Be Blank ! ";
                                console.log("Field cannot be blank")
                        }else {
                                const regex =  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
                                if (regex.test(dob) === false ) {
                                        this.msg['dateofbirth'] = "Please Enter A Valid Date dd/mm/yyyy !";                                        
                                } else {
                                        dobErr= false
                                }
                        }

                        //validate email

                        if (email == '') {
                                this.msg['email'] = "This Field Cannot Be Blank !";
                                console.log("Field cannot be blank")
                        }else {
                                const regex = /^\S+@\S+\.\S+$/
                                if (regex.test(email) === false ) {
                                        this.msg['email'] = "Please Enter A Vallid Email Address !"                                        
                                } else {
                                        emailErr = false
                                }
                        }

                        //validate password

                        if (pass1 == '') {
                                this.msg['password'] = "Password Cannot Be Blank !"
                                console.log("Field cannot be blank")
                        }else {
                                const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}$/
                                if (regex.test(pass1) === false ) {
                                        this.msg['password'] = "Password must include at least one upper case letter, one lower case letter, and one numeric digit"                                        
                                }else {
                                        passErr = false;
                                }
                        }

                        //compare passwords

                        if (pass1 !== pass2 ) {
                                this.msg['confirmpass'] = "Passwords Do Not Match Please Try Again !"
                                console.log("Input  Invalid")
                        } else {
                                confirmErr = false;
                        }

                        if ((fnameErr || lnameErr || dobErr || emailErr || passErr || confirmErr ) == true ) {
                                return false;
                        }   else {
                               this.createSingleAccount();
                        }                         
                        alert (dataPreview);
                },               

                goBack() {
                        return this.$router.push(HomeVue);
                },

                goLogin() {
                        return this.$router.push(LoginVue);
                },

                async createSingleAccount() {
                        const response = await fetch(
                                "http://localhost:4000/accounts/create",
                                {
                                        method: "POST",
                                        headers: {
                                                "Content-Type":
                                                        "application/json",
                                        },
                                        body: JSON.stringify(this.account),
                                }
                        );
                        const data = await response.json();
                        console.log(data);
                        alert("Account Created");
                        return this.$router.push(LoginVue);
                },
        },
};
</script>

<style></style>
