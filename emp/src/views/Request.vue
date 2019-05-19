<template>
  <v-flex xs12>
    <v-flex xs12 headline class="primary--text">
      รายการคำร้อง ท.ร.31: ระบบย้าย
    </v-flex>
    <v-flex>
      <v-btn color="primary" @click="goNextPage()">
        เอกสาร 1
      </v-btn>
      <v-text-field v-model="name"/>
      <v-btn color="primary">
        เอกสาร 2
      </v-btn>
      <v-btn color="primary">
        เอกสาร 3
      </v-btn>
    </v-flex>
  </v-flex>
</template>

<script>
// import { toNumber } from 'lodash'
// import axios from 'axios';
// import digit, {
//   DigitType,
//   ValidtionIdType,
//   FormatType,
// } from '@cdglib/js-moi-xid'
// import QRCode from '@cdglib/js-qr-code'
// import titlePrint from '@cdglib/js-title-print'
// import { DocumentScanner } from '@cdglib/js-agent-document-scanner'
// import functions from '../plugins/functions'
// import apiRequest from '../plugins/api/api-request'
// import apiArsRequest from '../plugins/api/api-arsRequest'
// import cat from '../plugins/cat-console'
// import apiPop from '../plugins/api/api-pop'
// import fun from '../plugins/personType'
// import funPer from '../plugins/personTypeMode'


export default {
  name: 'Request',
  data() {
    return {
      name: '',
    }
  },
  computed: {
  },
  created() {

  },
  mounted() {

  },
  methods: {
    goNextPage() {
      this.$router.push({
        name: 'OwnerIn',
        params: {
          status: 'ok',
          page: 'OwnerIn',
        },
      })
      this.$store.state.name = this.name
    },

  },

};
</script>
