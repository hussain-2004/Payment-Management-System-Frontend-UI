<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Payment Management</h2>
      <router-link 
        to="/payments/new" 
        class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-sm"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        New Payment
      </router-link>
    </div>

    <div class="bg-white rounded-xl border border-gray-100 p-4">
      <div class="flex flex-col sm:flex-row gap-4">
        <input 
          v-model="q" 
          placeholder="Search payments..." 
          class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors flex-1" 
        />
        <select 
          v-model="filterStatus" 
          class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
        </select>
        <select 
          v-model="filterCategory" 
          class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
          <option value="">All Categories</option>
          <option value="payment">Payment</option>
          <option value="refund">Refund</option>
          <option value="fee">Fee</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>
    </div>

    <PaymentTable :payments="filtered" :users="users" @delete-payment="remove" />
  </div>
</template>

<script>
import PaymentTable from "@/components/PaymentTableComponent.vue";

export default {
  components: { PaymentTable },
  data() {
    return { q: "", filterStatus: "", filterCategory: "" };
  },
  computed: {
    payments() {
      return this.$store.state.payments.list;
    },
    users() {
      return this.$store.state.users.list;
    },
    filtered() {
      return this.payments.filter(p => {
        if (this.filterStatus && p.status !== this.filterStatus) return false;
        if (this.filterCategory && p.category !== this.filterCategory) return false;
        if (!this.q) return true;
        const s = this.q.toLowerCase();
        return (
          p.id.toLowerCase().includes(s) ||
          (p.reference && p.reference.toLowerCase().includes(s)) ||
          (p.description && p.description.toLowerCase().includes(s))
        );
      });
    }
  },
  methods: {
    remove(id) {
      if (confirm("Delete payment?")) {
        this.$store.commit("payments/deletePayment", id);
      }
    }
  }
};
</script>
