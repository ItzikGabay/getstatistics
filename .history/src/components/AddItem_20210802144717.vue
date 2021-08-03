<template>
    <div class="q-pa-md">
        Add Item:
        <q-input outlined v-model="editedItem.name" label="Item Name" />
        <q-input outlined v-model="editedItem.phone" label="Item phone" />
        <q-input outlined v-model="editedItem.email" label="Item email" />
        <q-input outlined v-model="editedItem.channel" label="Item channel" />
        <q-input outlined v-model="editedItem.notes" label="Item notes" />
        <q-btn v-if="!item" label="insert" @click="insert()"></q-btn>
        <q-btn v-if="item" label="update" @click="update()"></q-btn>
    </div>
</template>

<script>

import localStorageDriver from "../middleware/local-storage/index.js"

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
        insert(item) {
            localStorageDriver.insert(this.tableName, this.editedItem)
            // Activate the event of "itemAdded"
            this.$emit('itemAdded', 'test')
            this.$router.push('/')
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