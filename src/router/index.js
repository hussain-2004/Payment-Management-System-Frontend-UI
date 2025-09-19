import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/LoginPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import PaymentDetailsInformation from '@/views/PaymentDetailsInformation.vue'
import PaymentInitiationForm from '@/views/PaymentInitiationForm.vue'
import PaymentListSection from '@/views/PaymentListSection.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import UserFormPage from '@/views/UserFormPage.vue'
import UserListPage from '@/views/UserListPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/dashboard", component: DashboardPage },
    { path: "/users", component: UserListPage },
    { path: "/users/new", component: UserFormPage },
    { path: "/users/edit/:id", component: UserFormPage, props: true },
    { path: "/payments", component: PaymentListSection },
    { path: "/payments/new", component: PaymentInitiationForm },
    { path: "/payments/edit/:id", component: PaymentInitiationForm, props: true },
    { path: "/payments/:id", component: PaymentDetailsInformation, props: true }
  ]
})