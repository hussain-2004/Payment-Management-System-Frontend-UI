<template>
  <div class="bg-white rounded-xl border border-gray-100 p-8 max-w-2xl mx-auto">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ isEdit ? "Edit Payment" : "Create New Payment" }}</h2>
    <form @submit.prevent="save" class="space-y-6">
      <div>
        <label class="block mb-2 font-medium text-gray-700">User</label>
        <select v-model.number="form.userId" class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" required>
          <option value="">Select a user</option>
          <option v-for="u in users" :key="u.id" :value="u.id">{{ u.name }}</option>
        </select>
      </div>
      <div>
        <label class="block mb-2 font-medium text-gray-700">Amount</label>
        <input 
          v-model="form.amount" 
          type="number" 
          step="0.01"
          min="0"
          placeholder="0.00"
          class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
          required 
        />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-medium text-gray-700">Currency</label>
          <select 
            v-model="form.currency" 
            data-testid="currency"
            class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option>INR</option>
          </select>
        </div>
        <div>
          <label class="block mb-2 font-medium text-gray-700">Status</label>
          <select v-model="form.status" class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-medium text-gray-700">Category</label>
          <select v-model="form.category" class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
            <option value="payment">Payment</option>
            <option value="refund">Refund</option>
            <option value="fee">Fee</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>
        <div>
          <label class="block mb-2 font-medium text-gray-700">Reference</label>
          <input 
            v-model="form.reference" 
            placeholder="Payment reference"
            class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
          />
        </div>
      </div>
      <div>
        <label class="block mb-2 font-medium text-gray-700">Description</label>
        <textarea 
          v-model="form.description" 
          rows="3"
          placeholder="Payment description or notes"
          class="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        ></textarea>
      </div>
      <div class="flex space-x-4 pt-4">
        <button 
          type="submit" 
          class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        >
          {{ isEdit ? 'Update Payment' : 'Create Payment' }}
        </button>
        <router-link 
          to="/payments" 
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
      form: {
        id: null,
        userId: null,
        amount: "",
        currency: "INR",
        status: "pending",
        category: "payment",
        reference: "",
        description: ""
      },
      isEdit: false
    };
  },
  computed: {
    users() {
      return this.$store.state.users.list;
    },
    payments() {
      return this.$store.state.payments.list;
    }
  },
  created() {
    const p = this.payments.find(x => x.id == this.$route.params.id);
    if (p) {
      this.form = Object.assign({}, p);
      this.isEdit = true;
    }
  },
  methods: {
    save() {
      // Convert amount to number and validate
      const amount = parseFloat(this.form.amount);
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
      }

      const paymentData = {
        ...this.form,
        amount: amount
      };

      if (this.isEdit) {
        this.$store.commit("payments/updatePayment", paymentData);
      } else {
        this.$store.commit("payments/addPayment", paymentData);
      }
      this.$router.push("/payments");
    }
  }
};
</script>
