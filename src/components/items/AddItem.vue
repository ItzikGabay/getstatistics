<template>
    <div class="q-pa-md">
        Add Item:
    <div class="row">

      <div class="col">
        <q-input outlined v-model="editedItem.name" label="Item Name" />
      </div>

      <div class="col">
        <q-input outlined v-model="editedItem.phone" label="Item phone" />
      </div>

    </div>
    <div class="row">

      <div class="col">
        <q-input outlined v-model="editedItem.email" label="Item email" />
      </div>

      <div class="col">
        <q-input outlined v-model="editedItem.channel" label="Item channel" />
      </div>
      
    </div>
        <q-input outlined v-model="editedItem.notes" label="Item notes" />
        <div class="buttonMargin">
        <q-btn v-if="!item" color="primary" label="insert" @click="insert()"></q-btn>
        <q-btn v-if="item" color="primary" label="update" @click="update()"></q-btn>
        </div>
    </div>
</template>

<script>

import localStorageDriver from "../../middleware/local-storage/index.js"

export default {
    name: 'AddItem',
    props: ['tableName', 'item'],
    data() {
        return {
            editedItem: {
                id: new Date().getTime(),
                phone: '',
                email: '',
                channel: '',
                notes: '',
            }
        }   
    },
    methods: {
        insert() {
            localStorageDriver.insert(this.tableName, this.editedItem)
            // Activate the event of "itemAdded"
            this.$emit('itemAdded')

            // only for undefined
            // this.$router.push('/')
        },
        update() {
            localStorageDriver.update(this.tableName, this.editedItem.id, this.editedItem)
            this.$router.push('/')
        }
    },
    created() {
        if(this.item) this.editedItem = this.item 
    }
}
</script>

<style>
</style>