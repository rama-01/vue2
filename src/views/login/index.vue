<template>
  <div class="bg-gray-100">
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white p-8 rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Tenant:</label>
          <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Account:</label>
          <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
          <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" required>
        </div>
        <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
}
</script>