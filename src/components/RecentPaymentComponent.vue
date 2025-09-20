<template>
  <div class="bg-white rounded-xl border border-gray-100 p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
    <div class="space-y-4">
      <div 
        v-for="p in payments" 
        :key="p.id" 
        class="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
      >
        <div class="flex items-center space-x-4">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span class="text-white text-sm font-semibold">{{ getUserInitials(p.userId) }}</span>
          </div>
          <div>
            <p class="font-medium text-gray-900">{{ getUserName(p.userId) }}</p>
            <p class="text-sm text-gray-500">{{ p.category }}</p>
          </div>
        </div>
        
        <div class="text-right">
          <p class="font-semibold text-gray-900">${{ p.amount }}</p>
          <span 
            :class="{
              'text-green-600': p.status === 'completed',
              'text-yellow-600': p.status === 'pending', 
              'text-red-600': p.status === 'failed'
            }"
            class="text-xs font-medium uppercase tracking-wide"
          >
            {{ p.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["payments", "users"],
  methods: {
    getUserName(id) {
      const u = this.users.find(x => x.id === id);
      return u ? u.name : "Unknown";
    },
    getUserInitials(id) {
      const u = this.users.find(x => x.id === id);
      if (u && u.name) {
        return u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      }
      return "?";
    }
  }
};
</script>
