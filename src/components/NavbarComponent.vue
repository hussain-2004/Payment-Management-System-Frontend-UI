<template>
  <header class="bg-white shadow px-6 py-3 flex justify-between items-center">
    <h1 class="font-bold text-lg">Payment Management System</h1>
    <nav class="space-x-4">
      <router-link to="/dashboard" class="hover:underline">Dashboard</router-link>
      <router-link to="/users" class="hover:underline">Users</router-link>
      <router-link to="/payments" class="hover:underline">Payments</router-link>
    </nav>
  </header>
</template>

<script>
export default { name: "Navbar" };
</script>
