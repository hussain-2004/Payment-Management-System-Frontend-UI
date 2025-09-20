<template>
  <div class="bg-white rounded-xl border border-gray-100 p-8 max-w-2xl mx-auto">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ isEdit ? "Edit User" : "Create New User" }}</h2>
    <form @submit.prevent="save" class="space-y-6">
      <div>
        <label class="block mb-2 font-medium text-gray-700">Full Name</label>
        <input 
          v-model="form.name" 
          class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
          placeholder="Enter full name"
          required 
        />
      </div>
      <div>
        <label class="block mb-2 font-medium text-gray-700">Email Address</label>
        <input 
          v-model="form.email" 
          type="email"
          class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
          placeholder="Enter email address"
          required 
        />
      </div>
      <div>
        <label class="block mb-2 font-medium text-gray-700">Role</label>
        <select v-model="form.role" class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div>
        <label class="block mb-2 font-medium text-gray-700">Status</label>
        <select v-model="form.status" class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div class="flex space-x-4 pt-4">
        <button 
          type="submit" 
          class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        >
          {{ isEdit ? 'Update User' : 'Create User' }}
        </button>
        <router-link 
          to="/users" 
          class="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      form: { id: null, name: "", email: "", role: "user", status: "active" },
      isEdit: false
    };
  },
  created() {
    const u = this.$store.state.users.list.find(x => x.id == this.$route.params.id);
    if (u) {
      this.form = Object.assign({}, u);
      this.isEdit = true;
    }
  },
  methods: {
    save() {
      if (this.isEdit) {
        this.$store.commit("users/updateUser", this.form);
      } else {
        this.$store.commit("users/addUser", this.form);
      }
      this.$router.push("/users");
    }
  }
};
</script>
