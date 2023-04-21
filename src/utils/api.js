import axios from '@/utils/axios'

export const indexData = async () => {
  return axios.request({
    url: '/api/index-data',
    method: 'get'
  })
}

export const wikiTopicData = async (wikiType) => {
  return axios.request({
    url: '/api/wiki-topic/' + wikiType,
    method: 'get'
  })
}

export const wikiTopicListData = async (wikiType) => {
  return axios.request({
    url: '/api/wiki-topic-list/' + wikiType,
    method: 'get'
  })
}
