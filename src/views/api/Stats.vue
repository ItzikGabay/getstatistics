<template>
  <div class="q-px-lg q-pb-md">

    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Api" icon="widgets" to="/api/" />
      <q-breadcrumbs-el label="Post: 1"/>
    </q-breadcrumbs>


    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
    />
          <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
  </div>
</template>s

<script>

import drivers from "../../middleware/drivers/index"
import ApexCharts from 'apexcharts'

let ravmeserData = [
  { 
    id: 1,
    date: '11/08/2021'
  },
    { 
    id: 2,
    date: '11/08/2021'
  },
    { 
    id: 3,
    date: '09/08/2021'
  },
    { 
    id: 4,
    date: '12/08/2021'
  },
    { 
    id: 5,
    date: '13/08/2021'
  },
    { 
    id: 6,
    date: '11/08/2021'
  }
]

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
      data: [],
      stats: ''
    }
  },
  methods: {
    renderMonth(month) {
      this.stats = drivers.convertToArrDates(ravmeserData, '8')
      let newRows = []
      for(const key in this.stats) {
        newRows.push({
          name: key + '-0' + month,
          new: this.stats[key].length,
          score: 10.0,
        })
      }
      this.data = newRows
    },
  },
  created() {
    this.renderMonth('8')
  }
}
</script>

<style>

</style>