<template>
  <div class="bg-white rounded-xl border border-gray-100 overflow-hidden">
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead class="bg-gray-50 border-b border-gray-100">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
            <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="p in payments" :key="p.id" class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
              <div>
                <p class="font-medium text-gray-900">#{{ p.id }}</p>
                <p class="text-sm text-gray-500 truncate max-w-xs">{{ p.description }}</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span class="text-white text-xs font-semibold">{{ getUserInitials(p.userId) }}</span>
                </div>
                <span class="font-medium text-gray-900">{{ getUserName(p.userId) }}</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <span class="font-semibold text-gray-900">${{ p.amount }}</span>
            </td>
            <td class="px-6 py-4">
              <span 
                :class="{
                  'bg-green-100 text-green-800': p.status === 'completed',
                  'bg-yellow-100 text-yellow-800': p.status === 'pending',
                  'bg-red-100 text-red-800': p.status === 'failed'
                }"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
              >
                {{ p.status }}
              </span>
            </td>
            <td class="px-6 py-4">
              <span class="text-gray-900 capitalize">{{ p.category }}</span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-600">
              {{ formatDate(p.createdAt) }}
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <router-link 
                :to="`/payments/${p.id}`" 
                class="text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-200"
              >
                View
              </router-link>
              <router-link 
                :to="`/payments/edit/${p.id}`" 
                class="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                Edit
              </router-link>
              <button 
                @click="$emit('delete-payment', p.id)" 
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
  props: ["payments", "users"],
  methods: {
    getUserName(userId) {
      const u = this.users.find(x => x.id === userId);
      return u ? u.name : "Unknown";
    },
    getUserInitials(userId) {
      const u = this.users.find(x => x.id === userId);
      if (u && u.name) {
        return u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      }
      return "?";
    },
    formatDate(d) {
      return d ? new Date(d).toLocaleDateString('en', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }) : "";
    }
  }
};
</script>
