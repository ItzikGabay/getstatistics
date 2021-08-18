/***************************
 *   
 * file: 
 * /views/Auth.vue
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
      <p>Login component:</p>
      <Login/>
  </div>
</template>

<script>
import Login from '../../components/user/Login.vue'
export default {
    name: 'Auth',
    components: {
        Login
    }

}
</script>