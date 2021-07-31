<template>
  <div class="q-pa-md">

    <q-table
      :title="tableName"
      :data="data"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
    
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props" @click="goToItem(props.row.id)"><a href="javascript:void(0)">{{ props.row.id }}</a></q-td>
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="phone" :props="props">{{ props.row.phone }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="channel" :props="props">{{ props.row.channel }}</q-td>
          <q-td key="notes" :props="props">{{ props.row.notes }}</q-td>
          <q-td key="actions" :props="props">
              <q-btn color="red" @click="remove(props.row.id)">Delete</q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>


<script>

import localStorageDriver from "../middleware/local-storage/index.js"

export default {
    name: 'TableViewer',
    props: ['tableName', 'needToReload'],
    data() {
    return {
      columns: [
        {
          name: 'id',
          required: true,
          label: 'id',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'name', align: 'center', label: 'name', field: 'name', sortable: true },
        { name: 'email', label: 'email', field: 'email', sortable: true },
        { name: 'phone', label: 'phone', field: 'phone', sortable: true },
        { name: 'channel', label: 'channel', field: 'channel', sortable: true },
        { name: 'notes', label: 'notes', field: 'notes', sortable: true },
        { name: 'actions', label: 'actions'},
      ],
      data: []
    }
  },
  methods: {
      read() {
        this.data = localStorageDriver.select(this.tableName)
      },
      remove(id) {
        localStorageDriver.remove(this.tableName, id)
        this.read()
      },
      goToItem(id) {
        this.$router.push(`/item/${id}`)
      }
  },
    created() {
    this.read()
    },
    watch: {
      needToReload() {
          this.read()
      }
    }
}
</script>