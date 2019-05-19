<template>
  <v-breadcrumbs v-if="breadcrumbs.show">
    <v-icon slot="divider">mdi-chevron-right</v-icon>
    <!-- <v-breadcrumbs-item>
      <v-icon>mdi-home</v-icon>
    </v-breadcrumbs-item> -->
    <v-breadcrumbs-item>
      ทะเบียนราษฎร
    </v-breadcrumbs-item>
    <v-breadcrumbs-item
      v-for="item in breadcrumbs.items"
      :key="item.name"
      exact
      router-link :to="item.link">
      {{ item.name }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'ThemeBreadcrumbs',
  props: {
    route: Object,
  },
  data() {
    return {
      breadcrumbs: {
        show: false,
        items: [],
      },
    }
  },
  watch: {
    route() {
      this.setThemeBreadcrumbs(this.route.breadcrumbs)
    },
  },
  methods: {
    setThemeBreadcrumbs(data) {
      return new Promise((resolve, rejects) => {
        if (data) {
          this.breadcrumbs.show = false
          this.breadcrumbs.items = data
          this.$nextTick(() => {
            this.breadcrumbs.show = true
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
  .v-breadcrumbs
    padding 0rem 0.7rem !important
</style>
