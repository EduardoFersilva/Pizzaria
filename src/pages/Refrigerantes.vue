<template>
  <main>

    <div class="cardsCardapio">
      <div class="texts">
        <div>
        <h1>Cardápio</h1>
        <h2>Refrigerantes</h2>
        </div>

      <div class="divBusca">
        <input
        type="text"
        placeholder="Pesquisar produto"
        />
        <button class="btnBusca"><i class="bi bi-search" style="font-size:20px; margin-right:5px;"></i>Buscar</button>
      </div>

    </div>
    <div class="cards">
    <product-card
      v-for="(card, index) in visibleCards"
      :key="index"
      :image-url="card.image"
      :title="card.title"
      :price="card.price"
      actionUrl="/#/cardapio-single"
      actionLabel="Fazer Pedido!"
    />
    </div>
    </div>

  </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Refrigerantes',
  components: {
    ProductCard

  },
  data() {
    return {
      cards: [
        {
          title: 'Pepsi',
          price: '12,00',
          image: './imgs/pepsi.png'
        },
        {
          title: 'H20',
          price: '8,00',
          image: './imgs/h20.png'
        },
        {
          title: 'Pepsi Twist',
          price: '12,00',
          image: './imgs/pepsiT.png'
        },
        {
          title: 'Coca Cola',
          price: '8,00',
          image: './imgs/cocacola.png'
        },
        {
          title: 'Sukita',
          price: '8,00',
          image: './imgs/sukita.png'
        },
        {
          title: 'Guarana',
          price: '10,00',
          image: './imgs/guarana.png'
        },
        {
          title: 'Pepsi Twist',
          price: '12,00',
          image: './imgs/pepsiT.png'
        },
        {
          title: 'Coca Cola',
          price: '8,00',
          image: './imgs/cocacola.png'
        }
      ]
    }
  },
  computed: {
    visibleCards() {
      return this.cards
    }
  }
}
</script>

<style lang="sass" scoped>
main
  padding-top: 150px
  background: #F6F6F6
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.cards
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap
  max-width: 1300px
  margin: 30px 20px
.cardsCardapio
  display: flex
  flex-direction: column

.texts
  padding: 30px
  display: flex
  justify-content: space-between
h1
  font-family: Roboto
  font-size: 40px
  font-weight: 900
  line-height: 47px
  letter-spacing: 0em

h2
  font-family: Roboto
  font-size: 30px
  font-weight: 900
  line-height: 35px
  letter-spacing: 0em
  color: #DF3D29
.divBusca
  input
    max-width: 390px
    height: 51px
    border-radius:50px 0 0 50px
    border: none
    padding-left: 20px

.btnBusca
  border: none
  height:51px
  width:100px
  border-radius:0 50px 50px 0
  background: #DF3D29
  color: #fff

@media (max-width: 800px)
  .texts
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
  .divBusca
    padding-top: 50px

@media (max-width: 415px)
  .texts
    padding: 30px 0

@media (max-width: 355px)
  .divBusca
    input
      width: 190px
  .cards
    margin: 30px 0

</style>
