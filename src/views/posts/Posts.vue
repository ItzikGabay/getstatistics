/***************************
 *   
 * file: 
 * /views/posts/Posts.vue
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
      <List :postsData="this.data"/>
      <hr>
      <Add/>
  </div>
</template>

<script>
import List from '../../components/posts/List.vue';
import Add from '../../components/posts/Add.vue';
import firestoreInstance from '../../middleware/database/firestore/index';
import { mapActions } from 'vuex';

export default {
    name: 'Posts',
    components: {
        List, Add
    },
    data() {
        /**
         * @str "endpoint": which table to search in database.
         * @obj {data}: data of posts. 
         */
        return {
            data: ''
        }
    },
    methods: {
        ...mapActions("postsStore", ["getAccountPosts"]),
        /**
         * Send get request to retrieve all data from firebase,
         * and changing on current data object.
         * @param {Object} options - {endpoint:} where to read in Firebase.
         */
        read() {
            this.getAccountPosts()
            .then(() => {
                this.data = this.$store.state.postsStore.posts
            })
        }
    },  
    async created() {
        await this.read()
    }
}
</script>
