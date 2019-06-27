import posts from '../api/posts'
import { POSTS_LOADED } from './actionTypes'

const initialState = {
  postList: []
}

const actions = {
  loadPosts({ commit }, filters) {
    window.console.log('LOADING POSTS')
    posts
      .get(filters)
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
