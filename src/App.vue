<script>
import Navbar from './components/NavbarComponent.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="px-6 py-8">
      <div class="max-w-7xl mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style>

</style>