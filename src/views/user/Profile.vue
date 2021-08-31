<template>
  <div>
      <p>Hello!</p>
      <p>{{getUser}}</p>
      <p>{{user}}</p>
  </div>
</template>

<script>
import firebase from '../../middleware/database/index'
export default {
name: 'Profile',
    data() {
        return {
            userId: '',
            user: ''
        }
    },
    computed: {
        getUser() {
            return window.user;
        }
    },
    async created() {
        this.user = window.user;
        // this.userId = await firebase.firebase.auth().currentUser;
    }
}
</script>

<style>

</style>