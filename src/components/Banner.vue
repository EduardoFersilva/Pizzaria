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
  actionUrl: {
    type: String,
    required: true

  },
  actionLabel: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: false
  },
  videoLabel: {
    type: String,
    required: false,
    default: 'ASSISTIR VIDEO'
  },
  imageUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
        <div class="banner" >

            <div class="container">
                <h1>{{ title }}</h1>
                <h2>{{ subtitle }}</h2>
                <p>{{ description }}</p>

                <div class="btnsBanner">

                    <a type="button" class="btn btnFazerPedido"
                    v-if="actionUrl !== undefined"
                    :href="actionUrl">
                    {{ actionLabel }}

                    </a>

                    <div class="videoBanner" >
                        <i class="bi bi-play-circle-fill iconplay"
                        v-if="videoUrl !== undefined"
                        style="margin-left: 20px; font-size:50px;">
                        </i>
                        <p class="pVideo">{{ videoLabel }}</p>
                    </div>

                </div>
            </div>
            <img :src="imageUrl" class="imgPizzaBanner" :alt="title">

        </div>
</template>

<script>

export default {
  name: 'Banner'
}
</script>

<style lang="sass" scoped>
.banner
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 700px
    background-image: url('../../public/imgs/imgBanner.jpeg')
    background-repeat: no-repeat
    background-size: cover
    opacity: 0.9
    z-index: 2

.container
    margin: 0 150px 0 50px
    max-width: 550px

h1
    font-family: 'Roboto'
    font-style: normal
    font-weight: 900
    font-size: 50px
    color: #FC9D0E
    font-family: 'Roboto', sans-serif
h2
    font-family: 'Roboto', sans-serif
    -webkit-text-stroke-width: 2px
    -webkit-text-stroke-color: #fff
    font-size: 3em
    color: transparent
    font-style: normal
    font-weight: 700
    font-size: 80px
p
    font-family: 'Roboto', sans-serif
    font-style: normal
    font-weight: 400
    font-size: 16px
    color: #FFFFFF
    max-width: 500px
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
    background-color: #FC9D0E

.iconplay
    color: #FFFFFF
    cursor: pointer
    transition: transform 0.5s ease
.iconplay:hover
    transform: scale(1.07)
.pVideo
    font-family: 'Roboto'
    font-style: normal
    font-weight: 500
    font-size: 16px
    color: #FFFFFF
    margin: 0 15px

.videoBanner
    display: flex
    align-items: center
.btnsBanner
    display: flex
    align-items: center

@media (max-width: 1360px)
    .banner
        flex-direction: column
        height: 950px
    .imgPizzaBanner
        order: -1
        width: 350px
        height: 250px
    .btnsBanner
        flex-direction: column
    .container
        margin: 30px 0
        display: flex
        flex-direction: column
        align-items: center
        text-align: center
    .iconplay
        margin: 0 !important
    .videoBanner
        margin-top: 20px

@media (max-width: 580px)
    h2
        font-size: 60px
    .btnFazerPedido
        margin-top: 30px

@media (max-width: 400px)
     .imgPizzaBanner
        width: 250px
        height: 200px

@media (max-width: 380px)
    h2
        font-size: 50px

@media (max-width: 320px)
    .imgPizzaBanner
        width: 300px
        height: 200px

</style>
