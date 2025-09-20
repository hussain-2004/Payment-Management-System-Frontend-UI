<template>
  <header class="bg-white border-b border-gray-100 px-6 py-4">
    <div class="flex items-center justify-between">
      <h1 class="font-semibold text-xl text-gray-800">Payment Management System</h1>

      <nav class="flex space-x-14">
        <router-link 
          to="/dashboard" 
          class="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300"
          active-class="text-gray-900 border-gray-400"
        >
          Dashboard
        </router-link>
        <router-link 
          to="/users" 
          class="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300"
          active-class="text-gray-900 border-gray-400"
        >
          Users
        </router-link>
        <router-link 
          to="/payments" 
          class="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300"
          active-class="text-gray-900 border-gray-400"
        >
          Payments
        </router-link>
      </nav>

      <div class="w-20"></div> <!-- Spacer for balance -->
    </div>
  </header>
</template>

<script>
export default { name: "Navbar" };
</script>
