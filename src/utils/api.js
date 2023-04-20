import axios from '@/utils/axios'

export const indexData = async () => {
  return axios.request({
    url: '/api/index-data',
    method: 'get'
  })
}
