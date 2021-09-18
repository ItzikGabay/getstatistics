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
  <div>

    <div class="column" style="margin: 0px 150px 0px 0px;">
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="username" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-green-7" size="lg" class="full-width" icon="pattern" label="Login" />
            <hr>
            <q-btn unelevated color="grey-10" size="lg" class="full-width" label="Google Login" icon="add_to_drive" @click="googleAuthLogin()" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

      <!-- <q-btn flat color="red" label="Test button" @click="test()" />

      <p>Click on test to see result:</p>
      <p>{{info}}</p> -->
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
                    console.log(res.user)
                    this.$router.go("/")
                    // this.$router.push("/accounts")
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    console.log(error)
                    // this.$router.push("/auth")
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