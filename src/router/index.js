import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  if (isLogin || to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
