
<template>
  <div>
    <v-tab-item class="pb-2 label-color-black" value="infHouse1">
      {{ Store.name }}
    </v-tab-item>
  </div>
</template>

<script>

// import formatPid from '@cdglib/vuetify-pid-format-thai';
// import titlePrint from '@cdglib/js-title-print';
// import apiHouseOwner from '../../plugins/api/api-houseowner.'
// import functions from '../../plugins/functions'
// import apiHouse from '../../plugins/api/api-house'

export default {
  name: 'House1',
  components: {

  },
  data() {
    return {
      Store: this.$store.state,
    };
  },
  watch: {

  },
  created() {},
  methods: {

  },
};
</script>

<style scoped>
.v-input--selection-controls {
    margin-top: 11px;
    padding-top: 11px;
}
</style>
