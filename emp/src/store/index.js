import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line import/no-duplicates
import pathify from 'vuex-pathify'
// eslint-disable-next-line import/no-duplicates
import { make } from 'vuex-pathify'
// import request from './modules/request'
// import login from './modules/login'
// import docScan from './modules/docScan'

pathify.options.mapping = 'simple'

const getDefaultState = () => ({
  name: '',
})
const state = Object.assign(getDefaultState())


const mutations = make.mutations(state)
const resetMutation = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
}
Object.assign(mutations, resetMutation);

const actions = make.actions(state)
const getters = make.getters(state);

Vue.use(Vuex)


// create store
export default new Vuex.Store({
  modules: {
    // request,
    // login,
    // docScan,
  },
  // use the plugin
  plugins: [
    pathify.plugin,
  ],
  // store properties
  state,
  mutations,
  actions,
  getters,
})
