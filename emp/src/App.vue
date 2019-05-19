<template>
  <v-app id="app">
    <theme-header ref="themeHeader" v-model="loginInfo" system-name="ระบบทะเบียนราษฎร" program-name="ระบบย้าย" library-version="0.0.2" bg-color="primary" flat fixed />
    <v-layout row>
      <v-flex>
        <v-card :style="{
          height: `${elementSize.navigation.height}px`,
          maxHeight: `${elementSize.navigation.height}px`
        }" raised tile
        >
          <theme-navigation ref="themeNavigation" :items="navigationItems" />
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card raised tile class="themeToolbar">
          <v-layout :style="{maxWidth: `${elementSize.content.width}px`}" row>
            <theme-tabs ref="themeTabs" :route="route" />
          </v-layout>
        </v-card>
        <v-layout id="appContent" :style="{
          height: `${elementSize.content.height}px`,
          maxHeight: `${elementSize.content.height}px`,
          maxWidth: `${elementSize.content.width}px`
        }" row grey lighten-3 d-block
        >
          <v-flex xs12 mt-2>
            <theme-breadcrumbs :route="route" />
          </v-flex>
          <v-flex :ml-2="!$vuetify.breakpoint.xs" :mr-2="!$vuetify.breakpoint.xs" :mr-1="$vuetify.breakpoint.xs" :ml-1="$vuetify.breakpoint.xs" xs12 mt-2 mb-5>
            <v-card>
              <v-flex :pl-1="!$vuetify.breakpoint.xs" :pr-1="!$vuetify.breakpoint.xs" xs12 pt-2 pb-2>
                <v-slide-x-transition mode="out-in">
                  <router-view ref="content" />
                </v-slide-x-transition>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import ThemeHeader from '@cdglib/vuetify-am1-header'
import Control from './plugins/control.json'
import ThemeNavigation from './components/Navigation.vue'
import ThemeTabs from './components/Tabs.vue'
import ThemeBreadcrumbs from './components/Breadcrumbs.vue'

export default {
  name: 'Addhouse',
  components: {
    ThemeHeader,
    ThemeNavigation,
    ThemeTabs,
    ThemeBreadcrumbs,
  },
  data() {
    return {
      location: 'Request',
      loginInfo: {},
      windowSize: {},
      elementSize: {
        header: {},
        navigation: {},
        tabs: {},
        content: {},
      },
      navigationItems: Control.navigationItems,
      route: {},
    }
  },
  watch: {
    $route() {
      this.checkRouteStatus()
    },
  },
  methods: {
    ...mapMutations({
      setLogin: 'login/setLogin',
    }),
    getLoginFail() {
      console.log('getLoginFail')
    },
    getLoginSuccess() {
      this.setLogin(this.loginInfo)
    },
    async onResize() {
      await this.setWindowSize()
      await this.setElementSize()
      this.setContentSize()
    },
    setWindowSize() {
      this.windowSize = {
        height: window.innerHeight,
        width: window.innerWidth,
      }
    },
    setElementSize() {
      this.elementSize.header = {
        height: this.$refs.themeHeader.$el.offsetHeight,
        width: this.$refs.themeHeader.$el.offsetWidth,
      }
      this.elementSize.navigation = {
        height: this.windowSize.height - this.$refs.themeHeader.$el.offsetHeight,
        width: this.$refs.themeNavigation.$el.offsetWidth,
      }
      this.elementSize.tabs = {
        height: this.$refs.themeTabs.$el.offsetHeight,
        width: this.$refs.themeTabs.$el.offsetWidth,
      }
      // this.elementSize.breadcrumbs = {
      //   height: this.$refs.themeBreadcrumbs.$el.offsetHeight,
      //   width: this.$refs.themeBreadcrumbs.$el.offsetWidth,
      // }
    },
    setContentSize() {
      this.elementSize.content = {
        height: this.windowSize.height
          - (this.elementSize.header.height
            + this.elementSize.tabs.height),
        // + this.elementSize.breadcrumbs.height),
        width: this.windowSize.width - this.elementSize.navigation.width,
      }
    },
    async setThemeTabs(data) {
      this.route = data
    },
    redirectToMain() {
      this.$router.push({
        name: 'Request',
        params: {
          status: 'ok',
        },
      })
      // console.log('Redirect')
    },
    checkRouteStatus() {
      const resultRoute = Control.routes.find(route => route.name.includes(this.$route.name))
      // console.log(resultRoute)
      if (resultRoute) {
        if (this.$route.params.status === 'ok') {
          this.setThemeTabs(resultRoute)
          // console.log('Set Theme Tabs')
        } else if (this.$route.name === this.location) {
          this.setThemeTabs(resultRoute)
          // console.log('This Route')
        } else {
          this.redirectToMain()
        }
      } else {
        this.redirectToMain()
      }
    },
  },
  mounted() {
    this.checkRouteStatus()
    window.addEventListener('resize', () => {
      this.onResize()
    })
    this.onResize()
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter,
.component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */
  {
  opacity: 0 !important;
}

.themeToolbar {
  z-index: 1;
}
</style>
