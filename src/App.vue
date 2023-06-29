<script setup>
import Header from './components/Header.vue'
import Index from './pages/Home/Index.vue'
import Footer from './components/Footer.vue'
</script>

<template>

    <Header
          action-url="/#/pedidos"
          action-label="Meus Pedidos"
          :whats-number="5511912154278"
          whats-label="(11) 91215-4278"
    />
    <main>
        <router-view></router-view>
    </main>

    <Footer
        :whats-number="5511912154278"
        whats-label="(11) 91215-4278"
    />

</template>

<script>
export default {
  components: {
    Header,
    Index,
    Footer
  }
}
</script>

<style lang="sass" scoped>

a
    text-decoration: none
    color: #000

</style>
