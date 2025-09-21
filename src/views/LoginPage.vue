<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <div class="bg-white shadow-xl rounded-xl border border-gray-100 p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Payment Management System</h1>
        <p class="text-gray-600 mt-2">Sign in to your account</p>
      </div>
      
      <form @submit.prevent="doLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input 
            v-model="form.email" 
            type="email" 
            class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
            placeholder="Enter your email"
            required 
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            v-model="form.password" 
            type="password" 
            class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
            placeholder="Enter your password"
            required 
          />
        </div>
        <button 
          type="submit" 
          class="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-sm"
        >
          Sign In
        </button>
      </form>
      
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Don't have an account?
          <router-link to="/register" class="text-blue-600 hover:text-blue-800 font-medium">Create account</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { email: "", password: "" }
    };
  },
  methods: {
    doLogin() {
      // dummy login - just accept whatever user enters
      this.$store.commit("users/addUser", {
        name: this.form.email.split("@")[0],
        email: this.form.email,
        role: "user",
        status: "active"
      });
      this.$router.push("/dashboard");
    }
  }
};
</script>
