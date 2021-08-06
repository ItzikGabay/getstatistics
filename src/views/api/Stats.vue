<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>s

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'date',
          required: true,
          label: 'date',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px',
          headerClasses: 'bg-primary text-white'
        },
        { name: 'new', align: 'left', label: 'new', field: 'new', sortable: true },
        { name: 'score', align: 'left', label: 'score', field: 'score', sortable: true },
      ],
      data: [
        {
          name: '15-09',
          new: 159,
          score: 6.0,
        },
        {
          name: '16-09',
          new: 100,
          score: 4.0,
        },
        {
          name: '17-09',
          new: 220,
          score: 9.0,
        },
      ]
    }
  }
}
</script>

<style>

</style>