/***************************
 *   
 * file: 
 * /views/user/Auth.vue
 *
 * Summary: 
 * Login or Register to get authorization.
 *
 * Description: 
 * Main view for register or login.
 *
 * Components used: 
 * components/user/Login.vue
 * components/user/Register.vue
 *
***************************/ 

<template>
  <div>
    <!-- <div v-if="!this.user"> -->
        <h3>Login:</h3>
        <Login/>
        <hr>
        <h3>Register:</h3>
        <Register/>
    <!-- </div> -->
  </div>
</template>

<script>
import Login from '../../components/user/Login.vue';
import Register from '../../components/user/Register.vue';

export default {
    name: 'Auth',
    components: {
        Login, Register
    },
    data() {
         /**
         * user: Current user object info.
         */
        return {
            user: window.user || 'null',
        }
    },
    methods: {
         /**
         * Checking if the user is connected or not authorized.
         */
        checkIfLoggedIn() {
            this.user = window.user
        }
    },
    /**
    * When view started -> check if the user connected.
    */
    async created() {
        this.checkIfLoggedIn()
    },
}
</script>