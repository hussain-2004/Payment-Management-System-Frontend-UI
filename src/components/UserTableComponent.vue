<template>
  <div class="bg-white rounded-xl border border-gray-100 overflow-hidden">
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead class="bg-gray-50 border-b border-gray-100">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Joined</th>
            <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="u in users" :key="u.id" class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span class="text-white text-xs font-semibold">{{ getInitials(u.name) }}</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ u.name }}</p>
                  <p class="text-sm text-gray-500">{{ u.email }}</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-4">
              <span 
                :class="{
                  'bg-purple-100 text-purple-800': u.role === 'admin',
                  'bg-blue-100 text-blue-800': u.role === 'manager',
                  'bg-gray-100 text-gray-800': u.role === 'user'
                }"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
              >
                {{ u.role }}
              </span>
            </td>
            <td class="px-6 py-4">
              <span 
                :class="{
                  'bg-green-100 text-green-800': u.status === 'active',
                  'bg-red-100 text-red-800': u.status === 'inactive'
                }"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
              >
                {{ u.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-600">
              {{ formatDate(u.createdAt) }}
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <router-link 
                :to="`/users/edit/${u.id}`" 
                class="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                Edit
              </router-link>
              <button 
                @click="$emit('delete-user', u.id)" 
                class="text-red-600 hover:text-red-800 font-medium text-sm transition-colors duration-200"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["users"],
  methods: {
    formatDate(d) {
      return d ? new Date(d).toLocaleDateString('en', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }) : "";
    },
    getInitials(name) {
      if (!name) return "?";
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
  }
};
</script>
