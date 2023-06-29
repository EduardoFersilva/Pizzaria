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
  titleColor: {
    type: String, // Adicione a prop para a cor do título
    required: false
  },
  subtitleColor: {
    type: String, // Adicione a prop para a cor do subtítulo
    required: false
  },
  descriptionColor: {
    type: String, // Adicione a prop para a cor da descrição
    required: false
  },
  actionUrl: {
    type: String,
    required: false
  },
  actionLabel: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: false
  },
  containerOrder: {
    type: Number,
    required: false
  }
})
</script>

<template>
 <div class="banner" :style="{ background: background }">
    <div class="container" :style="{ order: containerOrder }">
      <h1 :style="{ color: titleColor }">{{ title }}</h1>
      <h2 :style="{ color: subtitleColor }">{{ subtitle }}</h2>
      <p :style="{ color: descriptionColor }">{{ description }}</p>
      <a
        v-if="actionUrl !== undefined"
        :href="actionUrl"
        class="btn btnFazerPedido"
      >
        {{ actionLabel }}
      </a>
    </div>
    <img :src="imageUrl" class="imgPizzaBanner" :alt="title" />
  </div>
</template>

<script>
export default {
  name: 'BannerEnd'
}
</script>

<style lang="sass" scoped>
.banner
  width: 100%
  min-height: 672px
  display: flex
  justify-content: center
  align-items: center
  padding: 50px

h1
  font-family: 'Roboto'
  font-style: normal
  font-weight: 700
  font-size: 16px
  line-height: 27px
  color: #fc9d0e

h2
  font-family: 'Roboto'
  font-style: normal
  font-weight: 900
  font-size: 40px
  line-height: 47px
  color: #ffffff

p
  font-family: 'Roboto'
  font-style: normal
  font-weight: 400
  font-size: 16px
  line-height: 27px
  color: #ffffff

img
  width: 569px
  height: 531px
  border-radius: 23px

.btnFazerPedido
  width: 200px
  height: 50px
  font-family: 'Roboto', sans-serif
  font-weight: 500
  transition: transform 0.5s ease
  display: flex
  align-items: center
  justify-content: center
  background: #fc9d0e
  border-radius: 60px

.btnFazerPedido:hover
  transform: scale(1.04)
  background: #fc9d0e

.container
  margin: 0 30px 0 30px
  width: 600px !important
  display: flex
  flex-direction: column
  justify-content: center
  align-items: stretch !important
  padding-top: 50px

@media (max-width: 1070px)
  .banner
    flex-direction: column
    text-align: center
    padding: 20px

  .container
    margin: 0
    order: 2
    align-items: center !important
    width: 90% !important

@media (max-width: 650px)
  img
    width: 400px
    height: 350px

@media (max-width: 475px)
  h2
    font-size: 30px

@media (max-width: 425px)
  img
    width: 350px
    height: 300px

@media (max-width: 360px)
  img
    width: 300px
    height: 250px
</style>
