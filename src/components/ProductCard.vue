<script setup>

defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  actionUrl: {
    type: String,
    required: true
  },
  actionLabel: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img :src="imageUrl" :alt="title">
    <h3>{{ title }}</h3>
    <p>{{ priceFormatted }}</p>
    <a type="button" class="btn btnFazerPedido" v-if="actionUrl !== undefined" :href="actionUrl">
      {{ actionLabel }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  computed: {
    priceFormatted() {
      const value = parseFloat(this.price)
      if (isNaN(value)) {
        return this.price
      }
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return formatter.format(value)
    }
  }
}
</script>

<style lang="sass" scoped>
.card
    flex-shrink: 0
    width: 300px
    height: 480px
    background: #F7F7F7
    margin: 10px
    background: #FFFFFF
    border: none
    border-radius: 18px
    transition: opacity 0.3s ease
    display: flex
    align-items: center
    justify-content: center

.card h3
    margin: 10px
.card p
    margin: 10px
    color: #DF3D29
    font-family: 'Roboto'
    font-style: normal
    font-weight: 500
    font-size: 16px
    line-height: 27px
    text-align: center
.card.active
    opacity: 1
.card img
  height: 200px
.btnFazerPedido
    height: 50px
    width: 200px
    font-size: 16px
    transition: transform 0.5s ease
    display: flex
    align-items: center
    justify-content: center
    background: #FC9D0E
    border-radius: 60px

.btnFazerPedido:hover
    transform: scale(1.04)
    background: #FC9D0E

</style>
