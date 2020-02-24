/**
 * 评论分类接口管理模块
 */
import request from '@/utils/request'

export const getComm = () => {
  return request({
    method: 'GET',
    url: '/movie/comment'
  })
}
export const getidComm = params => {
  return request({
    method: 'GET',
    url: '/movie/comment',
    params
  })
}
export const delComm = params => {
  return request({
    method: 'DELETE',
    url: '/movie/comment',
    params
  })
}
