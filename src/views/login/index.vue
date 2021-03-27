<template>
  <div class="login">
    <img class="login__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="login__input">
      <input type="text" placeholder="请输入手机号" v-model="data.username">
    </div>
    <div class="login__input">
      <input type="password" placeholder="请输入密码" v-model="data.password">
    </div>
    <div class="login__button" @click="onLogin">登录</div>
    <div class="login__link" @click="onRegister">立即注册</div>
  </div>
</template>

<script>
import { post } from '@/utils/request'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
export default {
  name: 'Login',
  setup () {
    const data = reactive({
      username: '',
      password: ''
    })
    const router = useRouter()
    const onLogin = async () => {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result.data.errno === 0) {
        localStorage.isLogin = true
        router.push('/')
      } else {
        alert('登录失败')
      }
    }
    const onRegister = () => {
      console.log(13)
      router.push('/register')
    }
    return { onLogin, onRegister, data }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  text-align: center;
  &__img {
    padding-top: 120px;
    padding-bottom: 40px;
    margin: 0 auto;
    width: 66px;
    height: 66px;
  }
  &__input {
    padding-top: 16px;
    margin: 0 auto;
    width: 295px;
    height: 48px;
    font-size: 16px;
    color: rgba(0,0,0,0.50);
    letter-spacing: 0;
    line-height: 24px;
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      border: 1px solid rgba(0,0,0,0.10);
      border-radius: 6px;
      background-color: #F9F9F9;
      text-indent: 16px;
    }
  }
  &__button {
    margin: 0 auto;
    margin-top: 32px;
    width: 295px;
    height: 48px;
    color: #fff;
    line-height: 48px;
    font-size: 16px;
    background-color: #0091FF;
    box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
    border-radius: 4px;
  }
  &__link {
    margin-top: 16px;
    font-size: 14px;
    color: rgba(0,0,0,0.50);
  }
}
</style>
