/***************************
 *   
 * file: 
 * /components/user/Login.vue
 *
 * Summary: 
 * Component of Login inputs.
 *
 * Description: 
 * Log you to the system, verify the data, and give you authorization
 *
 * Father Components: 
 * views/user/Auth.vue
 *
***************************/ 

<template>
  <div style="width: 500px;">
      <q-input rounded outlined v-model="username" label="username" />
      <q-input rounded outlined v-model="password" label="password" />

      <q-btn flat color="primary" label="Login" />
      <q-btn flat color="green" label="Login With Google" @click="googleAuthLogin()" />
      <q-btn flat color="red" label="Sign out" @click="signOut()" />
      <hr>
      <q-btn flat color="red" label="Test button" @click="test()" />

      <p>Click on test to see result:</p>
      <p>{{info}}</p>
  </div>
</template>

<script>

import firebaseInstance from "../../middleware/database/index";
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    data () {
        /**
         * username: user input email
         * password: user input password
         * info: info of user after he logged-in (will change).
         */
        return {
            username: '',
            password: '',
            info: 'Not clicked yet'
            }
    },
    methods: {
        ...mapActions("userStore", ["setUserState"]),
        /**
         * Login Authrization trough google accounts.
         * @return {Object} - user email, name, token, and more.
         */
        googleAuthLogin() {
            const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
            firebaseInstance.firebase
                .auth()
                .signInWithPopup(provider)
                .then((res) => {
                    this.info = res
                    this.setUserState(res.user)
                    this.$router.push("/accounts")
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    this.$router.push("/auth")
                });
        },
        /**
         * TEST FUNCTION ONLY!
         */
        test() {
            this.info = firebaseInstance.firebase.auth().currentUser
        },
        /**
         * Login Authrization trough email and password.
         * @return {Object} - user email, name, token, and more.
         */
        UserPassAuthLogin() {
        firebaseInstance.firebase
            .auth()
            .signInWithEmailAndPassword(this.username, this.password)
            .then((userCredential) => {
            var user = userCredential.user;
            console.log(user);
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            });
        },
        /**
         * Sign out from firebase.
         */
        signOut() {
            firebaseInstance.firebase.auth().signOut()
            .then(() => this.$router.push("/home"))
        }
    },
    /**
     * Whenever application starts ->
     * we made test function from the Firebase backend (works).
     * use when needed.
     */
    created() {
        const googleAuthLogin = firebaseInstance.firebase.functions().httpsCallable('googleAuthLogin')
        googleAuthLogin({name: 'Itzik'})
        .then(res => {
            // alert(res.data)
        })
    }
}
</script>