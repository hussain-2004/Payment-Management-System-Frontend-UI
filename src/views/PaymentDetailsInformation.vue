<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
        <h2 class="text-xl font-semibold text-white">Payment Details</h2>
      </div>
      
      <!-- Content -->
      <div v-if="payment" class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Payment Info -->
          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium text-gray-500">Payment ID</label>
              <p class="text-lg font-semibold text-gray-900">{{ payment.id }}</p>
            </div>
            
            <div>
              <label class="text-sm font-medium text-gray-500">User</label>
              <div class="flex items-center space-x-3 mt-1">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span class="text-white text-xs font-semibold">{{ getUserInitials(payment.userId) }}</span>
                </div>
                <span class="text-gray-900 font-medium">{{ getUserName(payment.userId) }}</span>
              </div>
            </div>
            
            <div>
              <label class="text-sm font-medium text-gray-500">Amount</label>
              <p class="text-2xl font-bold text-gray-900">₹{{ payment.amount }}</p>
            </div>
            
            <div>
              <label class="text-sm font-medium text-gray-500">Status</label>
              <span 
                :class="{
                  'bg-green-100 text-green-800': payment.status === 'completed',
                  'bg-yellow-100 text-yellow-800': payment.status === 'pending',
                  'bg-red-100 text-red-800': payment.status === 'failed'
                }"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize mt-1"
              >
                {{ payment.status }}
              </span>
            </div>
          </div>
          
          <!-- Additional Info -->
          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium text-gray-500">Category</label>
              <p class="text-gray-900 font-medium capitalize">{{ payment.category }}</p>
            </div>
            
            <div>
              <label class="text-sm font-medium text-gray-500">Reference</label>
              <p class="text-gray-900 font-medium">{{ payment.reference || 'N/A' }}</p>
            </div>
            
            <div>
              <label class="text-sm font-medium text-gray-500">Created</label>
              <p class="text-gray-900 font-medium">{{ formatDate(payment.createdAt) }}</p>
            </div>
            
            <div>
              <label class="text-sm font-medium text-gray-500">Currency</label>
              <p class="text-gray-900 font-medium">{{ payment.currency }}</p>
            </div>
          </div>
        </div>
        
        <!-- Description -->
        <div v-if="payment.description" class="mt-6 pt-6 border-t border-gray-100">
          <label class="text-sm font-medium text-gray-500">Description</label>
          <p class="text-gray-900 mt-1">{{ payment.description }}</p>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="bg-gray-50 px-6 py-4">
        <router-link 
          to="/payments" 
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Payments
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    payment() {
      return this.$store.state.payments.list.find(x => x.id == this.$route.params.id);
    },
    users() {
      return this.$store.state.users.list;
    }
  },
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
    },
    formatDate(d) {
      return d ? new Date(d).toLocaleDateString('en', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) : "";
    }
  }
};
</script>
