import Vuex from 'vuex'
import Vue from 'vue'
import reddit from './reddit'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    reddit,
  }
})

export default store
