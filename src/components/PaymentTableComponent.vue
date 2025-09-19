<template>
  <table class="min-w-full bg-white shadow rounded overflow-hidden">
    <thead class="bg-gray-100 text-left">
      <tr>
        <th class="px-4 py-2">Payment ID</th>
        <th class="px-4 py-2">User</th>
        <th class="px-4 py-2">Amount</th>
        <th class="px-4 py-2">Status</th>
        <th class="px-4 py-2">Category</th>
        <th class="px-4 py-2">Created</th>
        <th class="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in payments" :key="p.id" class="border-t">
        <td class="px-4 py-2">{{ p.id }}</td>
        <td class="px-4 py-2">{{ getUserName(p.userId) }}</td>
        <td class="px-4 py-2">{{ p.amount }} {{ p.currency }}</td>
        <td class="px-4 py-2">{{ p.status }}</td>
        <td class="px-4 py-2">{{ p.category }}</td>
        <td class="px-4 py-2">{{ formatDate(p.createdAt) }}</td>
        <td class="px-4 py-2 space-x-2">
          <router-link :to="`/payments/${p.id}`" class="text-green-600">View</router-link>
          <router-link :to="`/payments/edit/${p.id}`" class="text-blue-600">Edit</router-link>
          <button @click="$emit('delete-payment', p.id)" class="text-red-600">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["payments", "users"],
  methods: {
    getUserName(userId) {
      const u = this.users.find(x => x.id === userId);
      return u ? u.name : "Unknown";
    },
    formatDate(d) {
      return d ? new Date(d).toLocaleString() : "";
    }
  }
};
</script>
