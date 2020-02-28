/**
 * 电影接口管理模块
 */
import request from '@/utils/request'

export const getfilminfo = params => {
  return request({
    method: 'GET',
    url: `/movie/${params}`
  })
}
export const savefilminfo = fd => {
  return request({
    method: 'POST',
    url: `/movie`,
    data: fd
  })
}
export const delfilm = params => {
  return request({
    method: 'DELETE',
    url: `/movie/${params}`
  })
}
