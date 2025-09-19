<template>
  <div class="bg-white shadow rounded p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Payment Details</h2>
    <div v-if="payment">
      <p><strong>ID:</strong> {{ payment.id }}</p>
      <p><strong>User:</strong> {{ getUserName(payment.userId) }}</p>
      <p><strong>Amount:</strong> {{ payment.amount }} {{ payment.currency }}</p>
      <p><strong>Status:</strong> {{ payment.status }}</p>
      <p><strong>Category:</strong> {{ payment.category }}</p>
      <p><strong>Reference:</strong> {{ payment.reference }}</p>
      <p><strong>Description:</strong> {{ payment.description }}</p>
      <p><strong>Created:</strong> {{ formatDate(payment.createdAt) }}</p>
    </div>
    <router-link to="/payments" class="mt-4 inline-block text-blue-600">Back to Payments</router-link>
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
    formatDate(d) {
      return d ? new Date(d).toLocaleString() : "";
    }
  }
};
</script>
