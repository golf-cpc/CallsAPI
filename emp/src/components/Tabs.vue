<template>
  <v-flex xs12>
    <v-tabs
      v-if="tabs.tabShow"
      color="primaryDark"
      slider-color="primary"
      dark
      height="36"
      show-arrows>
      <v-tab
        v-for="(item, index) in tabs.tabs"
        :key="index"
        router-link :to="item.link"
        :ripple="false">
        {{ item.name }}
      </v-tab>
    </v-tabs>
  </v-flex>
</template>

<script>
export default {
  name: 'ThemeTabs',
  props: {
    route: Object,
  },
  data() {
    return {
      tabs: {
        tabShow: true,
        tabs: [],
      },
    }
  },
  watch: {
    route() {
      this.setThemeTabs(this.route.tabs)
    },
  },
  methods: {
    setThemeTabs(data) {
      return new Promise((resolve, rejects) => {
        if (data) {
          this.tabs.tabShow = false
          this.tabs.tabs = data
          this.$nextTick(() => {
            this.tabs.tabShow = true
            resolve()
          })
        } else {
          rejects(Error)
        }
      })
    },
  },
}
</script>

<style lang="stylus">
  .v-tabs__slider-wrapper, .v-tabs__slider-wrapper > .v-tabs__slider
    z-index 1
    height 100%

  .v-tabs__item
      z-index 3
</style>
