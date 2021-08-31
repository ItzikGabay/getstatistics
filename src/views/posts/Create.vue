/***************************
 *   
 * file: 
 * /views/posts/Create.vue
 *
 * Summary: 
 * Adding new post to firestore & state.
 *
 * Components used: 
 * components/posts/Add.vue
 *
***************************/ 

<template>
  <div>
        <Add/>
  </div>
</template>

<script>
import Add from '../../components/posts/Add.vue';

export default {
    name: 'Create',
    components: {
        Add
    }

}
</script>

<style>

</style>