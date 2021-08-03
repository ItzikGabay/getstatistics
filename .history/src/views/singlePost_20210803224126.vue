<template>
  <h1>{{this.post}}<</h1>

</template>

<script>
import localStorageDriver from "../middleware/local-storage/index.js"


// get data of the single post

export default {
    name: 'singlePost',
    data() {
        return {
            post: localStorageDriver.getItemByID('posts', this.$route.params.id)
        }
    }
}
</script>

<style>

</style>