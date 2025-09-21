<script>
import Navbar from './components/NavbarComponent.vue';

export default {
  components: {
    Navbar
  },
  computed: {
    shouldShowNavbar() {
      const authRoutes = ['/login', '/register'];
      return !authRoutes.includes(this.$route.path);
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar v-if="shouldShowNavbar" />
    <main :class="shouldShowNavbar ? 'px-6 py-8' : ''">
      <div :class="shouldShowNavbar ? 'max-w-7xl mx-auto' : ''">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style>

</style>