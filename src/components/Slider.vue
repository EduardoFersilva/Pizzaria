<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
    <div class="slider">
        <h1>{{ title }}</h1>
        <div class="carousel">
            <div class="card-container">
                <div class="cards-wrapper" :style="{ transform: `translateX(-${activeIndex * cardWidth}px)` }">

                    <product-card
                    v-for="(card, index) in visibleCards" :key="index"
                    :image-url="card.image"
                    :title="card.title"
                    :price="card.price"
                    actionUrl="/#/cardapio-single"
                    actionLabel="Fazer Pedido!"
                    />

                </div>
            </div>
        </div>
        <div class="indicators">
        <span v-for="(card, index) in cards" :key="index" class="indicator" :class="{ active: activeIndex === index }"
                @click="goToCard(index)"></span>
        </div>

        <a type="button" class="btn btn-danger btnVerCardapio" href="/#/pizzas-salgadas">
            VER CARDÁPIO COMPLETO
            <i class="bi bi-arrow-up-right" style="font-size:20px; margin-left:5px;"></i>
        </a>
        <p>São mais de 80 sabores!</p>

      </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      cards: this.items,
      activeIndex: 0,
      cardWidth: 320,
      cardsPerSlide: 4

    }
  },
  computed: {
    visibleCards() {
      return this.cards.slice(0, this.cardsPerSlide)
    }
  },

  methods: {
    goToCard(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="sass" scoped>
.slider
    padding-top: 50px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background: #F7F7F7
h1
    font-family: 'Roboto-Bold', sans-serif
    font-style: normal
    font-weight: 900
    font-size: 40px
    text-align: center
    margin-bottom: 50px
.carousel
    display: flex
    align-items: center
    justify-content: center

.card-container
    width: 1285px
    height: 530px
    overflow: hidden
    position: relative
.cards-wrapper
    display: flex
    transition: transform 0.3s ease

.indicators
    display: flex
    justify-content: center
    margin-bottom: 20px
.indicator
    width: 10px
    height: 10px
    background-color: #ccc
    border-radius: 50%
    margin: 0 5px
    cursor: pointer
    transition: background-color 0.3s ease
.indicator.active
    background-color: #ff0000

.btnVerCardapio
    height: 54px
    width: 260px
    margin: 50px 0 10px 0
    font-size: 14px
    transition: transform 0.5s ease
    display: flex
    align-items: center
    justify-content: center
    background: #DF3D29
    border-radius: 60px

.btnVerCardapio:hover
    transform: scale(1.04)
    background: #DF3D29
p
    color: red

@media (max-width: 1275px)
    .card-container
        width: 950px

@media (max-width: 940px)
    .card-container
        width: 630px

@media (max-width: 620px)
    .card-container
        width: 310px
</style>
