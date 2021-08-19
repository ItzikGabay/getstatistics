/***************************
 *   
 * file: 
 * /views/Posts.vue
 *
 * Summary: 
 * Main view Posts component.
 *
 * Description: 
 * Let user see is own posts from the account he's connected.
 *
 * Components used: 
 * components/posts/list
 *
***************************/ 

<template>
  <div>
      <!-- Test Fields -->
      <button @click="read()">Refresh Data</button>
      <hr>
      <!-- Test Fields -->


      <p>Father component: </p>
      <List :postsData="this.post"/>
  </div>
</template>

<script>
import List from '../../components/posts/List.vue'
import firestoreInstance from '../../middleware/database/firestore/index'
import { mapActions } from 'vuex'

export default {
    name: 'Posts',
    components: {
        List
    },
    data() {
        /**
         * endpoint: which table to search in database.
         */
        return {
            endpoint: 'test',
        }
    },
    methods: {
        ...mapActions("postsStore", ["test"]),

        /**
         * Send get request to retrieve all data from firebase.
         * @param {Object} options - object {id:} of user & {route:} where to read in Firebase.
         * @return {Array} array Data of request.
         */
        async read() {
            this.post = await firestoreInstance.findAll({endpoint: this.endpoint})
        }

    },
    async created() {
        await this.read()
    }
}
</script>
