/*************************** * * file: * /components/dashboard/Info.vue * *
Summary: * Show info of specific Platform id * * Description: * Whenever client
ask to see specific platform info, * we using this component. * * Father
Components: * views/dashboard/Api.vue * ***************************/

<template>
  <div>
    <!-- Api data -->
    <div class="getWhiteBackground">
      <div class="text-h4">
        Viewing:
        <q-badge align="top">{{ apiData.name }}</q-badge>
      </div>
      <hr />
      <div>
        <h6>Platform Info:</h6>
        <p><b>Platform ID:</b> {{ apiData.id }}</p>
        <p><b>Stats ID:</b> {{ apiData.stats_id }}</p>
        <p v-if="apiData.connected == true">
          <b>connected:</b
          ><span style="color: green"> {{ apiData.connected }}</span>
        </p>
        <p v-if="apiData.connected == false">
          <b>connected:</b
          ><span style="color: red"> {{ apiData.connected }}</span>
        </p>
        <p>Key:</p>
        <q-btn flat @click="changeValue('key', apiData.key)">{{
          this.key
        }}</q-btn>
        <p>Secret:</p>
        <q-btn flat @click="changeValue('secret', apiData.secret)">{{
          this.secret
        }}</q-btn>
      </div>
    </div>

    <!-- New Changes -->
    <!-- Pick Month section -->
    <div class="getWhiteBackground">
      <h6>Filter by-</h6>
      <q-select filled v-model="model" :options="options" label="Month" />
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
        <apexchart
          class="apexchart"
          height="250"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div class="col-md-6">
        <apexchart
          class="apexchart"
          type="line"
          height="250"
          :options="chartOptions2"
          :series="seriesTwo"
        ></apexchart>
      </div>
    </div>
    <!-- End of Charts -->

    <!-- #### -->
    <!-- Api data -->
    {{ apiData }}
  </div>
</template>

<script>
import ApexCharts from 'apexcharts';
import Drivers from '../../utils/fake-data/index';

export default {
  name: 'Info',
  props: ['apiData'],
  data() {
    return {
      model: null,
      options: [],
      key: 'Click here to see',
      secret: 'Click here to see',

      // Table columns
      columns: [
        {
          name: 'date',
          required: true,
          label: 'Date',
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px',
          headerClasses: 'bg-primary text-white',
        },
        {
          name: 'new',
          align: 'left',
          label: 'Leads Added',
          field: 'new',
          sortable: true,
        },
        {
          name: 'score',
          align: 'left',
          label: 'System Score',
          field: 'score',
          sortable: true,
        },
      ],

      // Table data
      data: [],
      chartOptions: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [],
        },
      ],
      chartOptions2: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1, 2, 3],
        },
      },
      seriesTwo: [
        {
          name: 'series-1',
          data: [4, 5, 6],
        },
      ],
    };
  },
  computed: {
    getData: () => {
      return alert('hello');
    },
  },
  methods: {
    changeValue(item, data) {
      this[item] = data;
    },
    manipulateRawData(monthNumToRender) {
      return Drivers.convertToArrDates(Drivers.data, monthNumToRender);
    },
    insertGraphData(monthNumToRender, manipulatedDatesData) {
      let newRows = [];
      for (const key in manipulatedDatesData.data) {
        let graphDate = manipulatedDatesData.data[key][0].date;
        let graphResult = manipulatedDatesData.data[key].length;

        // Pushing to the array of the graph aswell
        this.chartOptions.xaxis.categories.push(graphDate);
        this.series[0].data.push(graphResult);

        // Rows secific is in diffrent structure
        newRows.push({
          name: key + '-0' + monthNumToRender,
          new: manipulatedDatesData.data[key].length,
          score: 10.0,
        });
      }
      return newRows;
    },
    renderMonthView(monthNumToRender) {
      // Default state
      if (!monthNumToRender) {
        monthNumToRender = this.options[0];
      }
      this.model = monthNumToRender;

      // 1. Extract data
      let manipulatedDatesData = this.manipulateRawData(monthNumToRender);

      // 2. Reset Data Chart
      this.resetGraphData();

      // 3. Set month options for <Selector Input>
      this.options = manipulatedDatesData.monthsArray;

      // 4. Insererting data
      this.data = this.insertGraphData(monthNumToRender, manipulatedDatesData);
      debugger;
    },
    resetGraphData() {
      this.chartOptions.xaxis.categories = [];
      // this.series[0].data = [];
      this.series = [
        {
          name: 'series-1',
          data: [],
        },
      ];
    },
  },
  created() {
    this.resetGraphData();
    this.renderMonthView('8');
  },
  watch: {
    // Watch for when user changing input of "pick month" and picking another month.
    // model = date_input.value
    model: function() {
      this.resetGraphData();
      this.renderMonthView(this.model);
    },
  },
};
</script>

<style scoped></style>
