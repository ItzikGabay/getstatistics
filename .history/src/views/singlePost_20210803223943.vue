<template>
  <h1>hey!</h1>
</template>

<script>
import localStorageDriver from "../middleware/local-storage/index.js"


// get data of the single post

export default {
    name: 'singlePost',
    data() {
        return {
            post: localStorageDriver
        }
    }
}
</script>

<style>

</style>