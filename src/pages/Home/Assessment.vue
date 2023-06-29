<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
})
</script>

<template>
    <div class="card-assessment">

        <img :src="imageUrl" :alt="userName">

        <div class="icones">
        <i class="bi bi-star-fill iconStar" style="font-size: 25px; margin: 10px;"
        v-for="i in 5" :key="i"
        :class="getIcon(i)">
        </i>
        </div>

        <p>{{ description }}</p>
        <p class="nomeDoCliente">{{ userName }}</p>

    </div>
</template>

<script>
export default {
  name: 'Assessment',
  methods: {
    getIcon(i) {
      let icon = 'bi bi-star'
      const currentStarNumber = i + 1
      const prevStarNumber = i

      if (this.score >= currentStarNumber) {
        icon += '-fill'
      }

      if (this.score > prevStarNumber && this.score < currentStarNumber) {
        icon += '-half'
      }
      return icon
    }
  }
}
</script>

<style lang="sass" scoped>
.card-assessment
  flex-shrink: 0
  margin: 10px
  border: none
  transition: opacity 0.3s ease
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  transition: transform 0.3s
  background: #F7F7F7
  width: 100%

.card-assessment.hidden
  display: none

.card-assessment h3
  margin: 50px 10px
  font-size: 16px
  font-family: 'Roboto'
  font-style: normal
  font-size: 16px
  line-height: 27px
  display: flex
  align-items: center
  text-align: center
  color: #000000

.card-assessment p
  margin: 10px
  text-align: center

.card-assessment.active
  opacity: 1

.card-assessment img
  width: 150px
  height: 150px
  border-radius: 100px
  margin-top: 110px

.nomeDoCliente
  color: #DF3D29 !important

.icones
  padding: 30px 0px 20px 0

.iconStar
  color: #FC9D0E
</style>
