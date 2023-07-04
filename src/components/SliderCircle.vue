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
          <product-circle
            v-for="(card, index) in visibleCards"
            :key="index"
            :image-url="card.image"
            :title="card.title"
            :action-url="card.action"
          />
        </div>
      </div>
    </div>
     <!-- This will work too
    <div class="indicators">
        <span v-for="(card, index) in cards" :key="index" class="indicator" :class="{ active: activeIndex === index }"
                @click="goToCard(index)"></span>
        </div>
        -->
  </div>
</template>

<script>
import ProductCircle from './ProductCircle.vue'

export default {
  components: {
    ProductCircle
  },
  data() {
    return {
      cards: this.items,
      activeIndex: 0,
      cardWidth: 0,
      cardsPerSlide: 5
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
      console.log(goToCard)
    }
  }
}
</script>

<style lang="sass" scoped>
.slider
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background: #F7F7F7
    padding-top: 200px
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
   min-height: 330px
.cards-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    gap: 90px 0
    transition: transform 0.3s ease

.indicators
    display: none
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
p
    color: red

@media (max-width: 1360px)
  .indicators
    display: flex
  .slider
        padding-bottom: 100px

@media (max-width: 1040px)
    .slider
        padding-top: 350px

@media (max-width: 480px)
    .slider
        padding-top: 500px

</style>
