import Vue from "vue";
import Vuex from "vuex";

import pathify from "vuex-pathify";
pathify.options.mapping = "simple";

import { make } from "vuex-pathify";

import myConstructor from "./myConstructor.js";

// setup store
const staticState = {
  alertBox: null,
  dialogBox: null,
  loading: null,
  programStart: false,
  programIs: 1,
  // 1 : รับแจ้งจดทะเบียนชื่อ สนท.
  rcode: "",
  hcode: "",
  branchId: "",
  rcodeDescription: "",
  sysDate: 0,
  user: new myConstructor.loginEmployee(),
  officer: new myConstructor.loginEmployee(),
  listsCC: {},
  listsTitle: {},
  listsNat: {},
  menuIs: "",
  listCC: {}
};
const dynamicState = {
  checkNameObj: {
    search: "",
    pid: "",
    documentId1: "",
    documentId2: "",
    province: "",
    place: "",
    selected: null,
    paged: ""
  },
  checkNameList: [],
  selectedCh: "",
  readonly: false,
  disabled: false,
  tabActive: 0,
  selectedRequestor: 0,
  selectedIdentify: 1,
  btnDisabled: false
};
const getDefaultState = () => ({
  lock: false,
  name: new myConstructor.name(),
  namePrint: new myConstructor.name(),
  updateName: new myConstructor.name(),
  btnCheck: new myConstructor.btnDetail(),
  list1: new myConstructor.checkboxDetail(),
  list2: new myConstructor.checkboxDetail(),
  list3: new myConstructor.checkboxDetail(),
  list4: new myConstructor.checkboxDetail(),
  listCh: [],
  grant: new myConstructor.info(),
  cogrant: new myConstructor.info(),
  deleteReplaceDoc: []
});
// initial state
const state = Object.assign(staticState, dynamicState, getDefaultState());

const mutations = make.mutations(state);
const resetMutation = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  resetDynamicState(state) {
    Object.assign(state, dynamicState);
  }
};
Object.assign(mutations, resetMutation);

const actions = make.actions(state);
const getters = make.getters(state);
// use store
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  // use the plugin
  plugins: [pathify.plugin],

  // store properties
  state,
  mutations,
  actions,
  getters
});
