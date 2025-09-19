<script>
import Navbar from './components/NavbarComponent.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
    <main class="p-6 bg-gray-50 min-h-screen">
      <router-view />
    </main>
  </div>
</template>

<style>

</style>