<template>
  <div class="getWhiteBackground">
    <q-table
      :data="this.temp"
      :columns="this.columns"
      row-key="name"
      style="margin-bottom: 10px;"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: ['tableData'],
  data() {
    return {
      temp: [
        { new: '1', s: '15-11-12', score: '1' },
        { new: '1', s: '15-11-12', score: '1' },
      ],
      columns: [
        {
          name: 'day',
          required: true,
          label: 'Day number',
          align: 'left',
          field: 'day',
          // field: (row) => row.name,
          // format: (val) => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px',
          headerClasses: 'bg-primary text-white',
        },
        {
          name: 'newLeads',
          align: 'left',
          label: 'Leads Added',
          field: 'newLeads',
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
    };
  },
  computed: {
    ...mapState('accountStore', ['currentApi']),
  },
  watch: {
    tableData() {
      this.temp = this.tableData;
    },
  },
};
</script>

<style></style>
