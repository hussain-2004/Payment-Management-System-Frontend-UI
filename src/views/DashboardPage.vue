<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard title="Active Users" :value="activeUsers" :subtitle="`Total: ${users.length}`" />
      <StatsCard title="Total Payments" :value="payments.length" :subtitle="`${completedCount} completed`" />
      <StatsCard title="Total Amount" :value="`$${totalAmountCompleted}`" subtitle="Completed payments only" />
      <StatsCard title="Pending" :value="pendingCount" subtitle="Awaiting processing" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-1 gap-8">
      <RecentPayments :payments="recentPayments" :users="users" />
    </div>
  </div>
</template>

<script>
import StatsCard from "@/components/StatusCardComponent.vue";
import RecentPayments from "@/components/RecentPaymentComponent.vue";

export default {
  components: { StatsCard, RecentPayments},
  computed: {
    users() { return this.$store.state.users.list; },
    payments() { return this.$store.state.payments.list; },
    activeUsers() { return this.users.filter(u => u.status === "active").length; },
    completedCount() { return this.payments.filter(p => p.status === "completed").length; },
    pendingCount() { return this.payments.filter(p => p.status === "pending").length; },
    totalAmountCompleted() {
      return this.payments
        .filter(p => p.status === "completed")
        .reduce((sum, p) => sum + Number(p.amount || 0), 0)
        .toFixed(2);
    },
    recentPayments() { return this.payments.slice(0, 5); }
  }
};
</script>
