/**
 * 账户接口管理模块
 */
import request from '@/utils/request'

export const getuserinfo = params => {
  return request({
    method: 'GET',
    url: `/movie/account/${params}`
  })
}
export const updateInfo = fd => {
  console.log(fd)
  return request({
    method: 'PUT',
    url: `/movie/account/update`,
    data: fd
  })
}
export const delfilm = params => {
  return request({
    method: 'DELETE',
    url: `/movie/${params}`
  })
}
