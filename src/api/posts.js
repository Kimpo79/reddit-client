import axios from 'axios'

const base = 'https://api.reddit.com/'

const buildQueryString = (base) => {
  return base + ''
}

export default {
  get: filters => {
    return axios.get(buildQueryString(base, filters))
  }
}
