<template>
  <v-navigation-drawer
    :value="drawer"
    :mini-variant="mini"
    width="220"
    mini-variant-width="72"
    hide-overlay
    disable-resize-watcher
    permanent
    floating
    clipped
  >
    <v-list>

      <v-list-tile @click="true" ripple href="https://iservices-ng.bora.dopa.go.th/#/menu/">
        <v-list-tile-action>
          <v-icon>mdi-home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>เมนูหลัก</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="true" ripple href="https://iservices-ng.bora.dopa.go.th/menu/ors/">
        <v-list-tile-action>
          <v-icon>mdi-apps</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>เมนูทะเบียนราษฎร</v-list-tile-title>
      </v-list-tile>

      <v-list-tile
        v-for="item in items" :key="item.text"
        router-link :to="item.link"
        ripple>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
      </v-list-tile>

       <!-- <v-list-tile @click="goReq()" ripple>
        <v-list-tile-action>
          <v-icon>mdi-apps</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>เมนูทะเบียนราษฎร</v-list-tile-title>
      </v-list-tile> -->

      <v-list-tile @click="mini = !mini, group = false" ripple>
        <v-list-tile-action v-if="!mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-list-tile-action>
        <v-list-tile-action v-if="mini">
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>ซ่อนแถบเมนู</v-list-tile-title>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  name: 'ThemeNav',
  props: {
    items: Array,
  },
  data() {
    return {
      drawer: true,
      group: true,
      mini: false,
    }
  },
  methods: {
    goReq() {
      console.log('asdads')
      const go = {
        name: 'Print31',
        params: {
          status: 'ok',
          page: 'Print31',
        },
      }
      this.$router.push(go)
    },
  },
};
</script>
