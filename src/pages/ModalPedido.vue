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
  info1: {
    type: String,
    required: false
  },
  info2: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: true
  },
  actionUrl1: {
    type: String,
    required: true
  },
  actionLabel1: {
    type: String,
    required: true
  },
  actionUrl2: {
    type: String,
    required: true
  },
  actionLabel2: {
    type: String,
    required: true
  }

})
</script>

<template>

      <div class="modalWrap">

      <div
        class="overlay overlay-visible"
        @click="$emit('overlay:click')"
      ></div>

    <div class="modal" >
        <i class="bi bi-x-circle-fill iconClose" style="color:#8E8E8E; font-size:30px;" @click="$emit('close')"></i>

        <div class="divImg">
            <img :src="imageUrl" :alt="title">
        </div>

        <div class="cont">
        <div class="infos">

            <div>
            <h1>{{title}}</h1>
            <h2>Tamanho</h2>
            <p>{{info1}}</p>
            </div>
            <div class="infoBorda">
            <h2>Borda</h2>
            <p>{{info2}}</p>
            </div>

        </div>

        <div class="textarea">
            <h2>Observações</h2>
            <div class="input-group">
                <textarea class="form-control" aria-label="With textarea"
                placeholder="Utilize este campo para suas observações sobre o pedido"></textarea>
            </div>
        </div>

        <div class="quantPreco">
        <div>
        <h2>Quantidade</h2>
        <Count />
        </div>
        <h3>{{price}}</h3>
        </div>

        <div class="buttons">

            <a
            type="button"
            :href="actionUrl1"
            class="btn btn-outline-success btn-sm btnContinuar">
            {{actionLabel1}}
            </a>

            <a
            type="button"
            :href="actionUrl2"
            class="btn btn-sm btnPedidos" >
            {{actionLabel2}}
            </a>

        </div>
        </div>

    </div>
    </div>

</template>

<script>
import Count from '../components/Count.vue'

export default {
  name: 'ModalPedido',
  data() {
    return {
    }
  },
  components: {
    Count
  },
  methods: {
  }
}

</script>

<style lang="sass" scoped>
.modal
    display: flex
    align-items: center
    max-width: 750px
    height: 673px
    border-radius: 18px
    background: #FFFFFF
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)

img
    width: 150px
    height: 150px
    margin: 0 20px
.divImg
    height: 100%
    display: flex
    padding-top: 100px
.cont
    width: 65%
h1
    font-family: Roboto
    font-size: 20px
    font-weight: 900
    line-height: 23px
    letter-spacing: 0em
    padding-bottom: 10px
h2
    font-family: Roboto
    font-size: 16px
    font-weight: 400
    line-height: 24px
    letter-spacing: 0em
h3
    font-family: Roboto
    font-size: 40px
    font-weight: 700
    text-align: right
    color: #DF3D29
    margin: 0

p
    font-family: Roboto
    font-size: 16px
    font-weight: 400
    line-height: 24px
    letter-spacing: 0em
    color: #8E8E8E

.infos
    display: flex
.infoBorda
    padding-top: 40px

.quantPreco
    display: flex
    justify-content: space-between
    align-items: center
    padding-top: 10px
    h3
        padding-top: 10px
.btnPedidos
    background: #009247
    border-radius: 60px
    color: #fff !important
    transition: transform 0.5s ease
    width: 200px
    height: 50px
    display: flex
    align-items: center
    justify-content: center

.btnPedidos:hover
    transform: scale(1.04)
    background: #009247
.btnContinuar
    width: 200px
    height: 50px
    border-radius: 60px
    transition: transform 0.5s ease
    display: flex
    justify-content: center
    align-items: center

.btnContinuar:hover
    transform: scale(1.04)
a
    text-decoration: none
    color: #009247
.buttons
    display: flex
    justify-content: space-between
    padding-top: 10px
    padding-bottom: 10px
.iconClose
    position: absolute
    top: 10px
    left: 93%
    cursor: pointer

.overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)
    z-index: 5
    opacity: 0
    visibility: hidden
    transition: opacity 0.3s, visibility 0s linear 0.3s

.overlay-visible
    opacity: 1
    visibility: visible
    transition: opacity 0.3s

@media (max-width: 780px)
  .modal
    max-width: 90%

@media (max-width: 700px)
  .modal
    flex-direction: column
    align-items: stretch
    padding-left: 20px
  .divImg
    padding-top: 10px
    padding-bottom: 20px
    height: 30%
  .textarea
    width: 350px

@media (max-height: 600px)
  .modal
    height: 500px

@media (max-width: 500px)
  .buttons
    flex-direction: column
  .btnContinuar
    margin-bottom: 10px
  .quantPreco
    flex-direction: column
    align-items: stretch
  h3
    text-align: left
  .iconClose
    left: 80%
@media (max-width: 430px)
    .textarea
      width: 250px
</style>
