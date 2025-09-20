<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">User Management</h2>
      <router-link 
        to="/users/new" 
        class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-sm"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        Add User
      </router-link>
    </div>
    <UserTable :users="users" @delete-user="remove" />
  </div>
</template>

<script>
import UserTable from "@/components/UserTableComponent.vue";

export default {
  components: { UserTable },
  computed: {
    users() {
      return this.$store.state.users.list;
    }
  },
  methods: {
    remove(id) {
      if (confirm("Delete user?")) {
        this.$store.commit("users/deleteUser", id);
      }
    }
  }
};
</script>
