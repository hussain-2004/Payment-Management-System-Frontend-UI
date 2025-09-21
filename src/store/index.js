import { createStore } from 'vuex'
import { initialUsers, initialPayments } from "@/data/sampleData.js"

function loadFromLocalStorage(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  return storedValue ? JSON.parse(storedValue) : defaultValue
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export default createStore({
  modules: {
    users: {
      namespaced: true,
      state: () => ({ list: loadFromLocalStorage("pms_users", initialUsers) }),
      mutations: {
        addUser(state, user) {
          user.id = state.list.length ? Math.max(...state.list.map(u => u.id)) + 1 : 1
          user.createdAt = new Date().toISOString().split('T')[0] // Add current date
          state.list.push(user)
          saveToLocalStorage("pms_users", state.list)
        },
        updateUser(state, updatedUser) {
          const index = state.list.findIndex(u => u.id === updatedUser.id)
          if (index !== -1) {
            state.list[index] = updatedUser
            saveToLocalStorage("pms_users", state.list)
          }
        },
        deleteUser(state, userId) {
          state.list = state.list.filter(u => u.id !== userId)
          saveToLocalStorage("pms_users", state.list)
        }
      }
    },
    payments: {
      namespaced: true,
      state: () => ({ list: loadFromLocalStorage("pms_payments", initialPayments) }),
      mutations: {
        addPayment(state, payment) {
          // Generate string ID for payments like existing data
          const existingIds = state.list.map(p => p.id);
          const numericIds = existingIds
            .filter(id => typeof id === 'string' && id.startsWith('pay_'))
            .map(id => parseInt(id.replace('pay_', '')))
            .filter(num => !isNaN(num));
          
          const nextNum = numericIds.length ? Math.max(...numericIds) + 1 : 1;
          payment.id = `pay_${String(nextNum).padStart(3, '0')}`;
          payment.createdAt = new Date().toISOString();
          state.list.push(payment);
          saveToLocalStorage("pms_payments", state.list);
        },
        updatePayment(state, updatedPayment) {
          const index = state.list.findIndex(p => p.id === updatedPayment.id)
          if (index !== -1) {
            state.list[index] = updatedPayment
            saveToLocalStorage("pms_payments", state.list)
          }
        },
        deletePayment(state, paymentId) {
          state.list = state.list.filter(p => p.id !== paymentId)
          saveToLocalStorage("pms_payments", state.list)
        }
      }
    }
  }
})