
<template>
    <div class="slider">
        <div class="carousel">
            <div class="card-container">
                <div class="cards-wrapper" :style="{ transform: `translateX(-${activeIndex * cardWidth}px)` }">

                    <assessment v-for="(card, index) in visibleCards"
                    :key="index"
                    :image-url="card.imageUrl"
                    :description="card.description"
                    :user-name="card.userName"
                    :score="card.score"
                    :class="{ hidden: index !== activeIndex }">
                    </assessment>

                </div>
            </div>
        </div>
        <div class="indicators">
            <span v-for="(card, index) in cards"
            :key="index" class="indicator"
            :class="{ active: activeIndex === index }"
            @click="goToCard(index)">
            </span>
        </div>
    </div>
</template>

<script>
import Assessment from './Assessment.vue'

export default {
  components: {
    Assessment
  },
  data() {
    return {
      cards: [
        {
          imageUrl: './imgs/cliente1.jpeg',
          description: '“A massa é preparada de forma artesanal, resultando em uma textura leve e crocante, e os ingredientes são selecionados com cuidado.”',
          userName: 'Prof. Gilmar',
          score: 4.5
        },
        {
          imageUrl: './imgs/cliente2.jpg',
          description: '“Pizzas maravilhosas, com muito recheio e uma massa impecavél. PALMEIRAS!”',
          userName: 'Gustavo Nunes',
          score: 5.0
        },
        {
          imageUrl: './imgs/cliente3.jpg',
          description: '“Já comi melhores.”',
          userName: 'Eduardo Fernandes',
          score: 3
        }
      ],
      activeIndex: 0,
      cardWidth: 0,
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
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background: #F7F7F7

.carousel
  display: flex
  align-items: center
  justify-content: center

.cards-wrapper
  display: flex
  transition: transform 0.3s ease
  width: 97%

.indicators
  display: flex
  justify-content: center
  margin-bottom: 20px
  margin-right: 10px

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
</style>
