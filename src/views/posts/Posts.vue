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
      <p>Month: August</p>
      <button @click="testFunction()">Test!</button>
      <List/>
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
    methods: {
        ...mapActions("postsStore", ["test"]),
        async testFunction() {
            let result = await firestoreInstance.findAll()
            alert('hey')
            // let result = this.$store.state.postsStore.editedPost;
            // this.test(result)
            debugger;
        }
    },
    created() {
        
    }
}
</script>
