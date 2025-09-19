<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Payment Management</h2>
      <router-link to="/payments/new" class="bg-black text-white px-4 py-2 rounded">+ New Payment</router-link>
    </div>

    <div class="flex space-x-4 mb-4">
      <input v-model="q" placeholder="Search..." class="border px-3 py-2 rounded w-1/3" />
      <select v-model="filterStatus" class="border px-3 py-2 rounded">
        <option value="">All Status</option>
        <option>pending</option>
        <option>completed</option>
        <option>failed</option>
      </select>
      <select v-model="filterCategory" class="border px-3 py-2 rounded">
        <option value="">All Categories</option>
        <option>payment</option>
        <option>refund</option>
        <option>fee</option>
        <option>transfer</option>
      </select>
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
