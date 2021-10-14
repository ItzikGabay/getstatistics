<template>
  <div class="getWhiteBackground">
    <div class="main flex-container">
      <div class="title text-h5 flex-item">
        <p><b>Currently viewing:</b></p>
        <p>{{ this.currentApi.name }}</p>
      </div>
      <q-separator />
      <div class="details inline-block flex-item">
        <p><b>Platform ID:</b> {{ this.currentApi.id }}</p>
        <p><b>Connected to Stats ID:</b> {{ this.currentApi.stats_id }}</p>
        <p>
          <b>Currently platform connection:</b> {{ this.currentApi.connected }}
        </p>
      </div>
      <q-separator />
      <div class="credeteils inline-block text-right flex-item">
        <p><b>Key:</b> {{ this.currentApi.key }}</p>
        <p><b>Secret:</b> {{ this.currentApi.secret }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('accountStore', ['currentApi']),
  },
};
</script>

<style scoped>
/* flex-container {
  display: flex;
  justify-content: space-evenly;
}

flex-container::before {
  content: '';
}

flex-container::after {
  content: '';
}

/* non-essential decorative styles */

.main {
  display: flex;
  /* justify-content: space-between; */
}

.item {
  justify-content: space-evenly;
}

main::before {
  content: '';
}

main::after {
  content: '';
}

.title {
  justify-content: space-evenly;
}

.details {
  flex: 1;
  text-align: center;
  justify-content: space-evenly;
}

.credeteils {
  margin-left: auto;
}
</style>
