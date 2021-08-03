<template>
  <h1>hey!</h1>
</template>

<script>
import localStorageDriver from "../middleware/local-storage/index.js"


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