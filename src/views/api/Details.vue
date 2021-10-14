<template>
  <div>
    <Header />
    <FilterBy
      :months="this.apiData.months"
      @selectMonth="fetchDataFromCurrentAPI"
    />
    <Table :tableData="this.createDataFromState" />
    <Charts :chartData="this.createDataFromState" />
  </div>
</template>

<script>
import Header from '../../components/api/Header.vue';
import FilterBy from '../../components/api/FilterBy.vue';
import Table from '../../components/api/Table.vue';
import Charts from '../../components/api/Charts.vue';
import { mapActions, mapState } from 'vuex';
import Drivers from '../../utils/fake-data/index';

export default {
  name: 'Details',
  components: {
    Header,
    FilterBy,
    Table,
    Charts,
  },
  data() {
    return {
      apiData: {
        months: [],
        results: [],
      },
    };
  },
  computed: {
    ...mapState('accountStore', ['currentApi']),
    createDataFromState() {
      let copy = { ...this.apiData.results };
      copy = Object.entries(copy);
      return copy.map((r) => {
        // return r;
        return {
          day: r[0],
          newLeads: r[1].length,
          score: 10,
        };
      });
    },
  },
  methods: {
    ...mapActions('accountStore', ['getItemSubItemById']),

    async fetchDataByAccountId() {
      this.$q.loading.show();
      await this.getItemSubItemById({
        account_id: this.$route.params.id,
        itemSubItemID: this.$route.params.api_id,
      });
      this.$q.loading.hide();
    },

    fetchDataFromCurrentAPI(value) {
      if (!value) {
        const d = new Date();
        const n = d.getMonth();
        value = n;
      }
      let { data, monthsArray } = this.manipulateRawData(value);
      this.apiData.months = monthsArray;
      this.apiData.results = data;
    },
    manipulateRawData(monthNumToRender) {
      return Drivers.convertToArrDates(Drivers.data, monthNumToRender);
    },
  },
  async created() {
    await this.fetchDataByAccountId();
    await this.fetchDataFromCurrentAPI();
    let result = this.apiData.results;
    // console.log(result);
  },
};
</script>

<style></style>
