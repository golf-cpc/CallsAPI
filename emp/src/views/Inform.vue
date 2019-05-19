<template>
  <v-flex xs12>
    <v-tabs-items v-model="route.page">
      <OwnerIn />
      <informer />
      <InfHouse1 />
      <InfHouse2 />
    </v-tabs-items>
    <v-layout justify-end>
      <v-btn outline color="primary">
        พิมพ์
      </v-btn>
      <v-btn :disabled="true" color="primary" @click=" validate()">
        บันทึก
      </v-btn>
    </v-layout>
    <!-- {{ this.Store.datahousein.ccaattmm.ccDescription }}
    {{ this.Store.datahousein.ccaattmm.aaDescription }}
    {{ this.Store.datahousein.ccaattmm.ttDescription }} -->
  </v-flex>
</template>

<script>
import moment from 'moment'
// import Axios from 'axios';
// import apipop from ''
import OwnerIn from './Inform/OwnerOut.vue'
import informer from './Inform/Informer.vue'
import InfHouse1 from './Inform/OwnerIn.vue'
import InfHouse2 from './Inform/House2.vue'
import funtions from '../plugins/functions'

export default {
  name: 'Inform',
  components: {
    OwnerIn,
    informer,
    InfHouse1,
    InfHouse2,
  },
  data() {
    return {
      nowDate: funtions.moment(moment().format('YYYYMMDD')),
      Store: this.$store.state,
      dateTimeSnac: 5000,
      route: this.$route.params,
      doc: '',
    }
  },
  watch: {
    $route() {
      this.route = this.$route.params
    },
    Store() {
      // if (this.Store.pidCard.length === 13) {
      //   alert('test 13 ')
      //   if (this.Store.pidCard === '' || this.Store.pidCard === null) {
      //     this.Store.closeBtn = false
      //   }
      // }
    },
  },
  // updated: {

  // },
  methods: {
    
  },
}
</script>

<style>
.theme--light .v-datatable thead th.column,
.theme--light .v-datatable thead th.column.sortable.active,
.theme--light .v-datatable thead th.column.sortable:hover,
.theme--light .v-datatable thead th.column.sortable.active i {
  color: white;
  background-color: #0091ea;
  font-size: 13px;
}
.table.v-table thead td:not(:nth-child(1)),
table.v-table tbody td:not(:nth-child(1)),
table.v-table thead th:not(:nth-child(1)),
table.v-table tbody th:not(:nth-child(1)),
table.v-table thead td:first-child,
table.v-table tbody td:first-child,
table.v-table thead th:first-child,
table.v-table tbody th:first-child {
  padding: 0 5px;
  font-size: 13px;
}

.v-expansion-panel__container>.v-expansion-panel__header:hover {
  background-color: #f5f5f5;
}

.v-expansion-panel__container--active>.v-expansion-panel__header:hover {
  background-color: transparent !important;
}

.v-expansion-panel__container>.v-expansion-panel__header>.panel-header {
  transition: font-size 0.25s ease-in-out;
}
</style>
