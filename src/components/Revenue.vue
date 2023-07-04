<script setup>
defineProps({
  imageUrlPizza: {
    type: String,
    required: true
  },
  imageUrlBandeira: {
    type: String,
    required: true
  },
  namePizza: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
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
  }
})
</script>

<template>
    <div class="receita" >
        <div class="imgsReceita">
            <img class="imgBandeira" :src="imageUrlBandeira">
            <img class="imgPizzaNapolitana" :src="imageUrlPizza">
        </div>

        <div class="passosDaReceita">
            <p class="nomePizza">{{ namePizza }}</p>
            <h1 class="titulo" >{{ title }}</h1>
            <p class="descrição">{{ description }}</p>

            <a
             type="button" class="btn btnFazerPedido"
            v-if="actionUrl !== undefined"
            :href="actionUrl">
            {{ actionLabel }}
            </a>

        </div>
    </div>
</template>

<script>

</script>

<style lang="sass" scoped>

.receita
    display: flex
    justify-content: center
    align-items: center
    padding-top: 500px
    background: #F7F7F7
    height: 600px

.passosDaReceita
    margin: 0 150px 0 50px
p
    font-family: 'Roboto'
    font-style: normal
    font-weight: 700
    font-size: 16px
    line-height: 27px
    color: #DF3D29
.imgPizzaNapolitana
    width: 400px
    height: 200px

.imgBandeira
    width: 300px
    height: 100px
    top: 130px

.imgsReceita
  display: flex
  flex-direction: column
  position: relative
  top: -200px
  margin-left: 150px

.imgsReceita img
  width: 500px
  height: 300px
  z-index: 1

.imgsReceita img:first-child
  position: relative
  width: 250px
  height: 500px

.titulo
    font-family: 'Roboto'
    font-style: normal
    font-weight: 900
    font-size: 40px
    line-height: 47px
    color: #000000

.descrição
    font-family: 'Roboto'
    font-style: normal
    font-weight: 400
    font-size: 16px
    line-height: 27px
    color: #8E8E8E
    width: 470px
.btnFazerPedido
    width: 200px
    height: 50px
    font-family: 'Roboto', sans-serif
    font-weight: 500
    transition: transform 0.5s ease
    display: flex
    align-items: center
    justify-content: center
    background: #FC9D0E
    border-radius: 60px

.btnFazerPedido:hover
    transform: scale(1.04)
    background: #FC9D0E

@media (max-width: 1220px)
    .imgsReceita
        margin-left: 50px
    .passosDaReceita
        margin: 0 50px 0 50px

@media (max-width: 1040px)
    .receita
        flex-direction: column
        align-items: center
        padding-top: 300px
    .imgPizzaNapolitana
        width: 370px !important
        height: 150px !important
    .imgBandeira
        width: 190px !important
        height: 400px !important
        top: 80px
    .passosDaReceita
        margin: 0 10px 0 20px
    .imgsReceita
        margin: 0
        top: -50px
    .passosDaReceita
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
    .descrição
        text-align: center
        width: 90%
    .titulo
        text-align: center
        font-size: 35px

@media (max-width:420px)
    .receita
        padding-top: 450px

@media (max-width: 360px)
    .imgPizzaNapolitana
        width: 320px !important
        height: 140px !important
    .receita
        padding-top: 400px

@media (max-width: 330px)
    .imgPizzaNapolitana
        width: 305px !important
        height: 140px !important

</style>
