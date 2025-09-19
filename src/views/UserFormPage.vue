<template>
  <div class="bg-white shadow rounded p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">{{ isEdit ? "Edit User" : "Create New User" }}</h2>
    <form @submit.prevent="save" class="space-y-4">
      <div>
        <label class="block mb-1">Full Name</label>
        <input v-model="form.name" class="border rounded w-full px-3 py-2" required />
      </div>
      <div>
        <label class="block mb-1">Email Address</label>
        <input v-model="form.email" class="border rounded w-full px-3 py-2" required />
      </div>
      <div>
        <label class="block mb-1">Role</label>
        <select v-model="form.role" class="border rounded w-full px-3 py-2">
          <option>user</option>
          <option>manager</option>
          <option>admin</option>
        </select>
      </div>
      <div>
        <label class="block mb-1">Status</label>
        <select v-model="form.status" class="border rounded w-full px-3 py-2">
          <option>active</option>
          <option>inactive</option>
        </select>
      </div>
      <div class="flex space-x-2">
        <button type="submit" class="bg-black text-white px-4 py-2 rounded">Save</button>
        <router-link to="/users" class="px-4 py-2 border rounded">Cancel</router-link>
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
