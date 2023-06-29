<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
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
  imageUrl1: {
    type: String,
    required: true
  },
  imageUrl2: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  },
  image1Width: {
    type: String,
    required: false
  },
  image1Height: {
    type: String,
    required: false
  },
  image2Width: {
    type: String,
    required: false
  },
  image2Height: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="card">
    <div class="card-background" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"></div>
    <div class="card-body">
      <div class="cont">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <p>{{ description }}</p>

        <div class="precoButton">
          <h3>{{ priceFormatted }}</h3>
          <a type="button" class="btn btn-warning btnFazerPedido" :href="actionUrl">{{ actionLabel }}</a>
        </div>
      </div>

      <div class="imgs">
        <img :src="imageUrl1" :alt="title" :style="{ width: image1Width, height: image1Height }" class="img1">
        <img :src="imageUrl2" :alt="title" :style="{ width: image2Width, height: image2Height }" class="img2">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardPromotion',
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
  max-width: 90%
  min-height: 410px
  position: relative
  z-index: 2
  margin: 50px 0
.card-background
  background-size: cover
  background-position: center
  width: 100%
  height: 100%
  position: absolute
  top: 0
  left: 0
  opacity: 1
.card-body
  z-index: 2
  display: flex
  align-items: center
h1
  font-family: Roboto
  font-size: 40px
  font-weight: 900
  line-height: 59px
  letter-spacing: 0em
  color: #FC9D0E
  width: 90%
h2
    font-family: 'Roboto', sans-serif
    -webkit-text-stroke-width: 2px
    -webkit-text-stroke-color: #fff
    font-size: 3em
    color: transparent
    font-style: normal
    font-weight: 700
    font-size: 60px
    width: 90%
p
  font-family: Roboto
  font-size: 16px
  font-weight: 400
  line-height: 27px
  letter-spacing: 0em
  color: #FFFFFF
  width: 90%

.precoButton
  display: flex
  align-items: center
  width: 90%
h3
  font-family: Roboto
  font-size: 50px
  font-weight: 700
  line-height: 27px
  letter-spacing: 0em
  color: #FFFFFF
  margin-right: 40px
  margin-bottom: 0

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

.imgs
  display: flex

.img1
    width: 300px
    height: 300px
    position: relative
    left: 50px
    bottom: 20px
.img2
    width: 200px
    height: 250px
    z-index: 2
    position: relative
    top: 30px

@media (max-width: 1250px)
    .card-body
        flex-direction: column
    .card
        min-height: 800px
    .imgs
        order: 1
        height: 200px
    .img1
        top: 5px
        width: 200px !important
        height: 200px !important
    .img2
        top: 50px
        width: 190px !important
        height: 200px !important
    .cont
        order: 2
        text-align: center
        margin-top: 50px
        display: flex
        flex-direction: column
        align-items: center

    .precoButton
        flex-direction: column
        h3
            margin-bottom: 30px
            margin-right: 0

@media (max-width: 500px)
    .img1
        left: 15px
        width: 150px !important
        height: 150px !important
    .img2
        right: 15px
        width: 150px !important
        height: 150px !important

@media (max-width: 420px)
    h2
        font-size: 40px
</style>
