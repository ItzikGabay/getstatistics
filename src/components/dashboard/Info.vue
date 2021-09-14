/***************************
 *   
 * file: 
 * /components/dashboard/Info.vue
 *
 * Summary: 
 * Show info of specific Platform id
 *
 * Description: 
 * Whenever client ask to see specific platform info, 
 * we using this component.
 *
 * Father Components: 
 * views/dashboard/Api.vue
 *
***************************/ 

<template>
  <div>

    <!-- Api data -->
    <div class="getWhiteBackground">
      <div class="text-h4">
        Viewing:
        <q-badge align="top">{{apiData.name}}</q-badge>
      </div>
      <hr>
      <div>
        <h6>Platform Info:</h6>
        <p><b>Platform ID:</b> {{apiData.id}}</p>
        <p><b>Stats ID:</b> {{apiData.stats_id}}</p>
        <p v-if="apiData.connected == true"><b>connected:</b><span style="color: green"> {{apiData.connected}}</span></p>
        <p v-if="apiData.connected == false"><b>connected:</b><span style="color: red"> {{apiData.connected}}</span></p>
        <p><b>Key:</b> <a href="javascript:void(0)">Click here to see</a></p>
        <p><b>Secret:</b> <a href="javascript:void(0)">Click here to see</a></p>
      </div>
    </div>

   <!-- New Changes -->
       <!-- Pick Month section -->
    <div class="getWhiteBackground">
      <h6>Filter by-</h6>
        <q-select filled v-model="model" :options="options" label="Month"/>
    </div>
    <!-- End of Pick Month section -->

  <!-- Table -->
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      style="margin-bottom: 10px;"
    />
  <!-- End of Table -->

    <!-- Charts -->
    <div class="row getWhiteBackground">
        <div class="col-md-6">
              <apexchart class="apexchart" height="250" type="bar" :options="chartOptions" :series="series"></apexchart>
        </div>
        <div class="col-md-6">
              <apexchart class="apexchart" type="line" height="250" :options="chartOptions2" :series="seriesTwo"></apexchart>
        </div>
    </div>  
    <!-- End of Charts -->

    <!-- #### -->
    <!-- Api data -->
    {{apiData}}
  </div>
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
  name: 'Info',
  props: ["apiData"],
  data(){
    return {
      model: null,
      options: [],

      // Table columns
      columns: [
        {
          name: 'date', required: true, label: 'Date', align: 'left',
          field: row => row.name, format: val => `${val}`, sortable: true, 
          classes: 'bg-grey-2 ellipsis', style: 'max-width: 100px',headerClasses: 'bg-primary text-white'
        },
        { name: 'new', align: 'left', label: 'Leads Added', field: 'new', sortable: true },
        { name: 'score', align: 'left', label: 'System Score', field: 'score', sortable: true },
      ],

      // Table data
      data: [],
      chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1,2,3,4,8,9,10,11,12]
          }
        },
        series: [{
          name: 'series-1',
          data: [5,7,1,2,9,5,1,9]
        }],
      chartOptions2: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1,2,3,4,8,9,10,11,12]
          }
        },
        seriesTwo: [{
          name: 'series-1',
          data: [5,7,1,2,9,5,1,9]
        }],
    }
  },
  mutations: {
    getData: () => {
      return alert('hello')
    }
  }
}
</script>

<style scoped>

</style>