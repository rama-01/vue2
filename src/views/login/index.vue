<template>
  <div class="bg-gray-100">
    <div class="flex justify-center items-center h-screen">
      <div class="bg-white p-8 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div class="mb-4">
            <input
              name="account"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              placeholder="账号"
              v-model="loginForm.username" />
          </div>
          <div class="mb-4">
            <input
              name="password"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              placeholder="密码"
              v-model="loginForm.password" />
          </div>
          <div class="mb-4 flex gap-2">
            <input
              name="password"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              placeholder="验证码"
              v-model="loginForm.captchaCode" />
            <div>
              <img :src="captcha" @click="getCode" />
            </div>
          </div>
          <button
            class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click.prevent="handleSubmitForm">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getCodeImg } from '@/api/login'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'fuint',
        password: '123456',
        captchaCode: '',
        uuid: ''
      },
      captcha: ''
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    // 获取验证码
    getCode() {
      getCodeImg().then(({ captcha, uuid }) => {
        this.captcha = captcha
        this.loginForm.uuid = uuid
      })
    },
    handleSubmitForm() {
      this.$store
        .dispatch('Login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/' }).catch(() => {})
        })
        .catch(() => {})
    }
  }
}
</script>
