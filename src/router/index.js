import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import('@/views/shop/Shop')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/Register'),
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
  const isLoginRegister = (to.name === 'Login' || to.name === 'Register')
  if (isLogin || isLoginRegister) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
