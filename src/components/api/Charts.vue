<template>
  <div class="row getWhiteBackground">
    <div class="col-md-6" id="chart">
      <apexchart
        class="apexchart"
        height="250"
        type="bar"
        :options="linesChartData"
        :series="newLeads"
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
</template>

<script>
export default {
  props: ['chartData'],
  data() {
    return {
      linesChartData: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: ['Loading...'],
        },
      },
      newLeads: [
        {
          name: 'series-1',
          data: ['Loading...'],
        },
      ],
      chartOptions2: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: ['Loading...'],
        },
      },
      seriesTwo: [
        {
          name: 'series-1',
          data: ['Loading...'],
        },
      ],
    };
  },
  watch: {
    chartData() {
      let days = [];
      let leads = [];
      this.chartData.map((r) => {
        console.log(r);
        days.push(r.day);
        leads.push(r.newLeads);
      });
      // this.linesChartData.xaxis.categories = days;
      this.linesChartData = {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: days,
        },
      };
      this.newLeads = [
        {
          name: 'series-1',
          data: leads,
        },
      ];
      this.chartOptions2 = {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: days,
        },
      };
      this.seriesTwo = [
        {
          name: 'series-1',
          data: leads,
        },
      ];

      //this.linesChartData.categories.push()
    },
  },
};
</script>

<style scoped>
#chart {
  max-width: 760px;
  margin: 35px auto;
  opacity: 0.9;
}
</style>
