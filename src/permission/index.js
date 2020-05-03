/*
 * @Description:
 * @Author: pengfeng
 * @Date: 2020-02-14 18:05:26
 * @LastEditTime: 2020-05-03 11:02:39
 * @LastEditors: jacob
 */
import router from '../router'
import progresss from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  progresss.start() // 开启进度条
  // to and from are both route objects. must call `next`.
  if (to.path.startsWith('/visitor')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else if (to.path.startsWith('/account')) {
    let admin = window.localStorage.getItem('isAdmin')
    let token = window.localStorage.getItem('user-token')
    if (admin === 'ADMIN' && token) {
      next()
    } else {
      next('/visitor')
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  // setTimeout(() => progresss.done(), 1000)
  progresss.done()
  // 关闭进度条
})
