<template>
  <div>
      <AddItem :item="item" :tableName="tableName"/>
  </div>
</template>

<script>

import localStorageDriver from "../middleware/local-storage/index.js"
import AddItem from "../components/AddItem.vue"

export default {
    name: 'Item',
    components: {
        AddItem
    },
    data() {
        return {
            item: {},
            tableName: 'tableItem'
        }
    },
    methods: {
        getItem() {
        debugger
         this.item = localStorageDriver.getItemByID(this.tableName, this.$route.params.id)
        }
    },
    created() {
        this.getItem()
    }
}
</script>

<style>

</style>