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
export const getidComm = id => {
  return request({
    method: 'GET',
    url: `/movie/comment/${id}`
  })
}
export const commitcomm = fd => {
  return request({
    method: 'POST',
    url: `/movie/comment`,
    body: fd
  })
}
export const delComm = params => {
  return request({
    method: 'DELETE',
    url: `/movie/comment/${params}`
  })
}
