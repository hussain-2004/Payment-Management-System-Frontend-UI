<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="bg-white shadow-lg rounded p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <form @submit.prevent="doRegister" class="space-y-4">
        <div>
          <label class="block mb-1">Full Name</label>
          <input v-model="form.name" class="border rounded w-full px-3 py-2" required />
        </div>
        <div>
          <label class="block mb-1">Email Address</label>
          <input v-model="form.email" type="email" class="border rounded w-full px-3 py-2" required />
        </div>
        <div>
          <label class="block mb-1">Password</label>
          <input v-model="form.password" type="password" class="border rounded w-full px-3 py-2" required />
        </div>
        <button type="submit" class="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Register
        </button>
      </form>
      <p class="mt-4 text-sm text-center">
        Already have an account?
        <router-link to="/login" class="text-blue-600">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: "", email: "", password: "" }
    };
  },
  methods: {
    doRegister() {
      this.$store.commit("users/addUser", {
        name: this.form.name,
        email: this.form.email,
        role: "user",
        status: "active"
      });
      this.$router.push("/dashboard");
    }
  }
};
</script>
