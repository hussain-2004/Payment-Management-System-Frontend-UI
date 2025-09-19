<template>
  <div class="bg-white shadow rounded p-4">
    <h3 class="font-semibold mb-2">Recent Payments</h3>
    <ul>
      <li v-for="p in payments" :key="p.id" class="flex justify-between border-b py-2">
        <span>{{ getUserName(p.userId) }} - {{ p.description }}</span>
        <span>{{ p.amount }} {{ p.currency }} ({{ p.status }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["payments", "users"],
  methods: {
    getUserName(id) {
      const u = this.users.find(x => x.id === id);
      return u ? u.name : "Unknown";
    }
  }
};
</script>
