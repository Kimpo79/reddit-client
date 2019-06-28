import reddit from '../api/reddit'
import { POSTS_LOADED } from './actionTypes'

const initialState = {
  postList: [],
  subReddits: []
}

const actions = {
  loadPosts({ commit }, filters) {
    reddit
      .get(filters)
      .then(response => {
        commit(POSTS_LOADED, response.data.data.children)
      })
      .catch(e => window.console.log(e))
  },
  loadSubReddits({commit}) {
    reddit
    .getSubReddits()
    .then(response => {
      commit(POSTS_LOADED, response.data.data.children)
    })
    .catch(e => window.console.log(e))
  }
}

const mutations = {
  [POSTS_LOADED](state, posts) {
    state.postList = posts
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations
}
