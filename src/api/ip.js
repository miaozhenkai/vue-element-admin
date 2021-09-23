import request from '@/utils/request'

export function fetchIpAllowList(query) {
  return request({
    url: '/ip/ipAllowList',
    method: 'get',
    params: query
  })
}

export function deleteIpAllow(query) {
  return request({
    url: '/ip/deleteIpAllow',
    method: 'delete',
    params: query
  })
}

export function createIpAllow(data) {
  return request({
    url: '/ip/createIpAllow',
    method: 'post',
    data
  })
}

export function updateIpAllowList(data) {
  return request({
    url: '/ip/updateIpAllowList',
    method: 'post',
    data
  })
}
