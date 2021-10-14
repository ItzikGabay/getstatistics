<template>
  <div class="getWhiteBackground">
    <h6>Filter by</h6>
    <q-select
      filled
      :options="this.months"
      v-model="currentMonthSelection"
      label="Month"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonthSelection: 'Showing Current month',
    };
  },
  props: ['months'],
  watch: {
    currentMonthSelection() {
      this.$emit('selectMonth', this.currentMonthSelection);
    },
  },
};
</script>

<style></style>
