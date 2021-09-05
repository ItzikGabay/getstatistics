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
  <div>
    <div class="column">
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <!-- <q-input square filled clearable v-model="username" type="username" label="username" /> -->
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="primary" size="lg" class="full-width" icon="pattern" @click="registerWithPassword()" label="Register now for free" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
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