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
                                @submit.prevent="createAccountButtonPressed"
                                class="signup-form text-dark-purple sm:space-y-1 md:space-y-1 lg:space-y-1 text-sm  bg-cream text-center place-items-center"
                                name="signup-form"
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
                                        type="text"
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
                createAccountButtonPressed(e) {

                        let error = 0;

                        if (this.account.fname == null) {
                                this.msg["fname"] =
                                        "First name required !";
                                        error += 1;
                        } else {
                                this.msg["fname"] = "";
                                error = 0;
                        }

                        if (this.account.lname == null) {
                                this.msg["lname"] =
                                        "Last name required !";
                                        error += 1;
                        } else {
                                this.msg["lname"] = "";
                                error = 0;
                        }

                        if (this.account.dateofbirth == null) {
                                this.msg["dateofbirth"] =
                                        "Please enter your Date Of Birth DD/MM/YYYY !";
                                        error += 1;
                        } else {
                                this.msg["dateofbirth"] = "";
                                error = 0;
                        }

                        if (this.account.email == null) {
                                this.msg["email"] =
                                        "Please Enter your Email Address";
                                        error += 1;
                        } else {
                                if (!this.validEmail(this.account.email)) {
                                        this.msg["email"] = "Invalid Email !  try your.name@email.com ";
                                        error += 1;
                                } else {
                                        this.msg["email"] = "";
                                        error = 0;
                                }
                        }

                        if (this.account.password == null) {
                                this.msg["password"] =
                                        "A password is required !";
                                        error += 1;
                        } else {
                                if (this.account.password.length < 8) {
                                        this.msg["password"] =
                                                "Password must be atlease 8 characters long with no spaces";
                                                error += 1;
                                } else {
                                        this.msg["password"] = "";
                                        error = 0;
                                }                               
                        }

                        if (this.account.confirmpassword == null) {
                                this.msg["confirmpass"] =
                                        "Please confirm your  Password";
                                        error += 1
                        } else {
                                if (
                                        this.account.password !==
                                        this.account.confirmpassword
                                ) {
                                        this.msg["confirmpass"] =
                                                "Passwords do not match, please check and try again !";
                                                error += 1;
                                } else {
                                        this.msg["confirmpass"] =
                                                "Passwords match";
                                                error = 0;
                                }
                        }

                        if (error < 1) {
                                this.createSingleAccount();
                        }                       
                },

                validEmail(email) {
                        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(email);
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
