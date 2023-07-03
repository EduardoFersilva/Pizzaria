
<template>
  <main>
    <div class="container">
      <div class="imgCont">
        <img src="../../public/imgs/pizza5.png" alt="">
      </div>
      <div class="cont">
        <h1>Caprici</h1>

        <div class="icones">
          <i class="bi bi-star-fill iconStar" style="font-size: 25px; margin: 10px;"
            v-for="i in 5" :key="i"
            :class="getIcon(i)">
          </i>
        </div>

        <h2>R$ 60,00</h2>

        <p>
          A massa é preparada de forma artesanal, resultando em uma textura leve e crocante,
          e os ingredientes são selecionados com cuidado para garantir o melhor sabor e qualidade.
        </p>

        <div class="setSize">
          <h3>Tamanho</h3>

          <button type="button" class="btn4"
          :class="{ active: selectedSize === '4' }"
          @click="setSize('4')">
          4 pedaços
          </button>

          <button type="button" class="btn8"
          :class="{ active: selectedSize === '8' }"
          @click="setSize('8')">
          8 pedaços
          </button>
        </div>

        <div class="setBorder">
          <h3>Borda</h3>

          <button type="button" class="btnOption1"
          :class="{ active: selectedBorder === 'sem-borda' }"
          @click="setBorder('sem-borda')">
          Sem borda
          </button>

          <button type="button" class="btnOption2"
          :class="{ active: selectedBorder === 'catupiry' }"
          @click="setBorder('catupiry')">
          Catupiry
          </button>

          <button type="button" class="btnOption3"
          :class="{ active: selectedBorder === 'carne-seca' }"
          @click="setBorder('carne-seca')">
          Carne Seca
          </button>
        </div>

        <div class="quantButton">
          <div>
            <h3>Quantidade</h3>
            <count />
          </div>
          <div class="button">
            <button type="button" class="btn btnAdicionarPedidos" @click="openModal">ADICIONAR A PEDIDOS</button>
          </div>
        </div>

        <h4>Compartilhar</h4>
        <div class="icons">
          <i class="bi bi-facebook" style="font-size:30px; color:#DF3D29; margin-left:5px;"></i>
          <i class="bi bi-linkedin" style="font-size:30px; color:#DF3D29; margin-left:5px;"></i>
          <i class="bi bi-envelope-fill" style="font-size:30px; color:#DF3D29; margin-left:5px;"></i>
          <i class="bi bi-whatsapp" style="font-size:30px; color:#DF3D29; margin-left:5px;"></i>
        </div>

      </div>
    </div>

    <slider-circle
    title="Peça também"
    :items="productItemsCircle"
    class="slide"
    />

    <modal-pedido
     v-if="showModal"
     image-url="./imgs/pizza5.png"
     title="Pizza Caprici"
     info1="8 pedaços"
     info2="sem borda"
     price="R$ 60,00"
     action-url1="/#/pizzas-salgadas"
     action-label1="CONTINUAR COMPRANDO"
     action-url2="/#/pedidos"
     action-label2="IR PARA MEUS PEDIDOS"
     @close="showModal = false"
     @overlay:click="showModal = false"
    />

  </main>

</template>

<script>
import SliderCircle from '../components/SliderCircle.vue'
import Count from '../components/Count.vue'
import ModalPedido from './ModalPedido.vue'

export default {
  name: 'CardapioSingle',
  components: {
    SliderCircle,
    Count,
    ModalPedido
  },
  data() {
    return {
      starScore: 5,
      selectedSize: '',
      selectedBorder: '',
      showModal: false,
      productItemsCircle: [
        {
          title: 'Refrigerantes',
          image: './imgs/refrigerantes.png'
        },
        {
          title: 'Cervejas',
          image: './imgs/cervejas.png'
        },
        {
          title: 'Sucos',
          image: './imgs/sucos.png'
        },
        {
          title: 'Vinhos',
          image: './imgs/vinhos.png'
        },
        {
          title: 'Drinks',
          image: './imgs/drinks.png'
        }
      ]
    }
  },
  methods: {
    getIcon(i) {
      let icon = 'bi bi-star'
      const currentStarNumber = i + 1
      const prevStarNumber = i

      if (this.starScore >= currentStarNumber) {
        icon += '-fill'
      }

      if (this.starScore > prevStarNumber && this.starScore < currentStarNumber) {
        icon += '-half'
      }
      return icon
    },
    setSize(size) {
      this.selectedSize = size
    },
    setBorder(border) {
      this.selectedBorder = border
    },
    toggleBebidas() {
      this.bebidasOpen = !this.bebidasOpen
    },
    openModal() {
      this.showModal = true
    }
  }
}
</script>

<style lang="sass" scoped>
main
    padding-top: 150px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

.container
  display: flex
  width: auto

.imgCont
  display: flex
  align-items: center
  justify-content: center
  max-width: 500px
img
    width: 300px
    height: 300px
    margin-right: 50px

.cont
    max-width: 500px
h1
    font-family: Roboto
    font-size: 40px
    font-weight: 900
    line-height: 47px
    letter-spacing: 0em
.icones
    padding: 0px 0px 40px 0

.iconStar
    color: #FC9D0E

h2
    font-family: Roboto
    font-size: 40px
    font-weight: 700
    line-height: 27px
    letter-spacing: 0em
    color: #DF3D29
p
    font-family: Roboto
    font-size: 16px
    font-weight: 400
    line-height: 27px
    letter-spacing: 0em
h3
    font-family: Roboto
    font-size: 16px
    font-weight: 700
    line-height: 27px
    letter-spacing: 0em

.btn8,
.btn4,
.btnOption1,
.btnOption2,
.btnOption3
  border: 1px solid #D9D9D9
  color: #8E8E8E
  width: 104px
  height: 51px
  border-radius: 10px
  margin: 0 20px 0 0
  background-color: #fff

.btn4.active,
.btn8.active,
.btnOption1.active,
.btnOption2.active,
.btnOption3.active
  border: 2px solid #21B15E
  color: #21B15E

.setBorder
  padding: 30px 0

.quantButton
  display: flex

.button
  margin-left: 40px
  padding-top: 30px
.btnAdicionarPedidos
  width: 212px
  height: 56px
  border-radius: 60px
  background: #FC9D0E
  font-family: Roboto
  transition: transform 0.5s ease
  font-size: 16px
  font-weight: 700
  line-height: 19px
  letter-spacing: 0em
  text-align: center

.btnAdicionarPedidos:hover
    transform: scale(1.04)
    background: #FC9D0E

h4
  font-family: Roboto
  font-size: 20px
  font-weight: 700
  line-height: 27px
  letter-spacing: 0em
  color: #DF3D29
  margin-top: 30px

.slide
  width: 100%
  padding-top: 60px
  margin-top: 50px

@media (max-width: 1000px)
  .container
    flex-direction: column
  .imgCont
    margin: 0 0 40px 0

@media (max-width: 500px)
  img
    width: 200px
    height: 200px
    margin: 0

@media (max-width: 402px)
  .quantButton
    flex-direction: column
  .button
    margin-left: 0
  .btnOption3
    margin-top: 20px

</style>
