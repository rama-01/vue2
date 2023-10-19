<template>
  <div class="bg-gray-100">
    <div class="flex justify-center items-center h-screen">
      <div class="bg-white p-8 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2"
              >Account:</label
            >
            <input
              name="account"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              placeholder="account"
              v-model="loginForm.username"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-bold mb-2"
              >Password:</label
            >
            <input
              name="password"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
              placeholder="password"
              v-model="loginForm.password"
            />
          </div>
          <button
            class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click.prevent="handleSubmitForm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { visitorLogin } from '@/api/login'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin123'
      }
    }
  },
  methods: {
    handleSubmitForm () {
      visitorLogin().then(
        () => this.$router.push({ path: '/dashboard' })
      ).catch(error => {
        return Promise.reject(error)
      })
    }
  }
}
</script>