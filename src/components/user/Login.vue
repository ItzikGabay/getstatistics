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
  <div class="flex">
      <q-input rounded outlined v-model="username" label="username" />
      <q-input rounded outlined v-model="password" label="password" />

      <q-btn flat color="primary" label="Login" />
      <q-btn flat color="green" label="Login With Google" @click="googleAuthLogin()" />
      <q-btn flat color="red" label="Sign out" @click="signOut()" />
  </div>
</template>

<script>

import firebaseInstance from "../../middleware/database/realtime/index";

export default {
    name: 'Login',
    data () {
    return {
        username: '',
        password: '',
        }
    },
    methods: {


    /**
     * Login Authrization trough google accounts.
     * @return {Object} - user email, name, token, and more.
     */
    googleAuthLogin() {
        const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
        firebaseInstance.firebase
            .auth()
            .signInWithPopup(provider)
            .then(() => this.$router.push("/posts"))
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
    created() {
        const googleAuthLogin = firebaseInstance.firebase.functions().httpsCallable('googleAuthLogin')
        googleAuthLogin({name: 'Itzik'})
        .then(res => {
            // alert(res.data)
        })
    }
}
</script>