/***************************
 *   
 * file: 
 * /components/posts/List.vue
 *
 * Summary: 
 * Show posts as a component.
 *
 * Description: 
 * Whenever client ask to see posts, we use this component
 *
 * Father Components: 
 * views/posts/Posts.vue
 *
***************************/ 

<template>
    <div>
        <h4>Posts result:</h4>
        <p>{{this.postsData}}</p>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: ['postsData'],
}
</script>

<style>

</style>