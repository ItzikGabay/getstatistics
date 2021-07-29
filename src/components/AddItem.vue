<template>
    <div class="q-pa-md">
        Add Item:
        <q-input outlined v-model="item.name" label="Item Name" />
        <q-input outlined v-model="item.phone" label="Item phone" />
        <q-input outlined v-model="item.email" label="Item email" />
        <q-input outlined v-model="item.channel" label="Item channel" />
        <q-input outlined v-model="item.notes" label="Item notes" />
        <q-btn label="insert" @click="insert(item)"></q-btn>
    </div>
</template>

<script>

import localStorageDriver from "../middleware/local-storage/index.js"

export default {
    name: 'AddItem',
    props: ['tableName'],
    data() {
        return {
            item: {
                id: '',
                phone: '',
                email: '',
                channel: '',
                notes: '',
            }
        }   
    },
    methods: {
        insert(item) {
            localStorageDriver.insert(this.tableName, this.item)
        }
    }
}
</script>

<style>

</style>