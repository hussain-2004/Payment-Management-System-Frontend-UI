<template>
  <div class="bg-white shadow rounded p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">{{ isEdit ? "Edit Payment" : "Create New Payment" }}</h2>
    <form @submit.prevent="save" class="space-y-4">
      <div>
        <label class="block mb-1">User</label>
        <select v-model.number="form.userId" class="border rounded w-full px-3 py-2" required>
          <option v-for="u in users" :key="u.id" :value="u.id">{{ u.name }}</option>
        </select>
      </div>
      <div>
        <label class="block mb-1">Amount</label>
        <input v-model.number="form.amount" type="number" class="border rounded w-full px-3 py-2" required />
      </div>
      <div>
        <label class="block mb-1">Currency</label>
        <select v-model="form.currency" class="border rounded w-full px-3 py-2">
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
      <div>
        <label class="block mb-1">Status</label>
        <select v-model="form.status" class="border rounded w-full px-3 py-2">
          <option>pending</option>
          <option>completed</option>
          <option>failed</option>
        </select>
      </div>
      <div>
        <label class="block mb-1">Category</label>
        <select v-model="form.category" class="border rounded w-full px-3 py-2">
          <option>payment</option>
          <option>refund</option>
          <option>fee</option>
          <option>transfer</option>
        </select>
      </div>
      <div>
        <label class="block mb-1">Reference</label>
        <input v-model="form.reference" class="border rounded w-full px-3 py-2" />
      </div>
      <div>
        <label class="block mb-1">Description</label>
        <textarea v-model="form.description" class="border rounded w-full px-3 py-2"></textarea>
      </div>
      <div class="flex space-x-2">
        <button type="submit" class="bg-black text-white px-4 py-2 rounded">Save</button>
        <router-link to="/payments" class="px-4 py-2 border rounded">Cancel</router-link>
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
        amount: 0,
        currency: "USD",
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
      if (this.isEdit) {
        this.$store.commit("payments/updatePayment", this.form);
      } else {
        this.$store.commit("payments/addPayment", this.form);
      }
      this.$router.push("/payments");
    }
  }
};
</script>
