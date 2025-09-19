<template>
  <table class="min-w-full bg-white shadow rounded overflow-hidden">
    <thead class="bg-gray-100 text-left">
      <tr>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Email</th>
        <th class="px-4 py-2">Role</th>
        <th class="px-4 py-2">Status</th>
        <th class="px-4 py-2">Created</th>
        <th class="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="u in users" :key="u.id" class="border-t">
        <td class="px-4 py-2">{{ u.name }}</td>
        <td class="px-4 py-2">{{ u.email }}</td>
        <td class="px-4 py-2">{{ u.role }}</td>
        <td class="px-4 py-2">{{ u.status }}</td>
        <td class="px-4 py-2">{{ formatDate(u.createdAt) }}</td>
        <td class="px-4 py-2 space-x-2">
          <router-link :to="`/users/edit/${u.id}`" class="text-blue-600">Edit</router-link>
          <button @click="$emit('delete-user', u.id)" class="text-red-600">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["users"],
  methods: {
    formatDate(d) {
      return d ? new Date(d).toLocaleDateString() : "";
    }
  }
};
</script>
