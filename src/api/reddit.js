import axios from 'axios'

const base = 'https://www.reddit.com'

// const buildQueryString = (base) => {
//   return base + ''
// }

export default {
  get: () => {
    return axios.get(`${base}/r/all.json`)
  },
  getSubReddits: () => {
    return axios.get(`${base}/subreddits.json`)
  }
}
