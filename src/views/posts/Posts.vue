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
    <div class="q-px-lg q-pb-md">
      <!-- <button @click="read()">Refresh Data</button> -->
          <!-- Posts Lists div -->
    <q-timeline color="secondary">

      <!-- Month Display -->
      <q-timeline-entry heading>
          <q-chip size="18px" icon="bookmark">
            August, 2021
          </q-chip>
      </q-timeline-entry>
      <!-- End of Month Display -->

<List :postsData="this.data"/>

    <!-- Month Display -->
      <q-timeline-entry heading>
        <q-chip size="18px" icon="bookmark">
          Septemember, 2021
        </q-chip>
      </q-timeline-entry>
    </q-timeline>
    <!-- End of Month Display -->

      <hr>
      
      <Add/>
  </div>
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
        ...mapActions("postsStore", ["getAccountPosts", "createPost"]),
        /**
         * Send get request to retrieve all data from firebase,
         * and changing on current data object.
         * @param {Object} options - {endpoint:} where to read in Firebase.
         */
        read() {
            this.getAccountPosts({id: this.$route.params.id})
            .then(() => {
                this.data = this.$store.state.postsStore.posts
            })
        },
    },  
    async created() {
        await this.read()
        // await this.test()
    }
}
</script>
