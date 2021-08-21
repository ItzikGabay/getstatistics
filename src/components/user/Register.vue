/***************************
 *   
 * file: 
 * /components/user/Register.vue
 *
 * Summary: 
 * Component of Register inputs.
 *
 * Description: 
 * Register you to the system with password, verify the data, and give you authorization
 *
 * Father Components: 
 * views/user/Auth.vue
 *
***************************/  

<template>
  <div style="width: 500px">
    <q-input rounded outlined v-model="email" label="username" />
    <q-input rounded outlined v-model="password" label="password" />
    <q-btn
      flat
      color="primary"
      label="Register"
      @click="registerWithPassword()"
    />
  </div>
</template>

<script>
import firebaseInstance from "../../middleware/database/index";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    /**
     * Register Authrization trough email and password.
     * @return {Object} - user email, name, token, and more.
     */
    registerWithPassword() {
      firebaseInstance.firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          var user = userCredential.user;
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },
  },
};
</script>

<style>
</style>