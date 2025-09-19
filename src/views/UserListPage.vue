<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">User Management</h2>
      <router-link to="/users/new" class="bg-black text-white px-4 py-2 rounded">+ Add User</router-link>
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
