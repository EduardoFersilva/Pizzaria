<template>
  <main>

    <div class="cardsCardapio">
      <div class="texts">
        <div>
        <h1>Cardápio</h1>
        <h2>Pizzas Doces</h2>
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
      actionUrl="http://www.google.com"
      actionLabel="Fazer Pedido!"
    />
    </div>
    </div>

    <div>
    <revenue
    class="receita"
    :imageUrlPizza="pizzaImageUrl"
    :imageUrlBandeira="bandeiraImageUrl"
    namePizza="PIZZA NAPOLITANA"
    title="Receita original da Itália"
    description="A massa é preparada de forma artesanal,
    resultando em uma textura leve e crocante,
    e os ingredientes são selecionados com cuidado para garantir o melhor sabor e qualidade.
    Se você procura uma experiência gastronômica autêntica e saborosa,
    experimente a pizza napolitana da Senhora Pizza."
    actionUrl="http://www.google.com"
    actionLabel="FAZER PEIDIDO!"
    />
    </div>

     <div class="cards">
    <product-card
      v-for="(card, index) in visibleCards"
      :key="index"
      :image-url="card.image"
      :title="card.title"
      :price="card.price"
      actionUrl="http://www.google.com"
      actionLabel="Fazer Pedido!"
    />
    </div>

  </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Revenue from '../components/Revenue.vue'

export default {
  name: 'Pizzas-Doces',
  components: {
    ProductCard,
    Revenue
  },
  data() {
    return {
      cards: [

      ],
      pizzaImageUrl: '/public/imgs/pizzaNapolitana.png',
      bandeiraImageUrl: '/public/imgs/bandeira.png'
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
.receita
  padding-bottom: 300px !important
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

@media (max-width: 1040px)
    .receita
      padding: 400px 0 !important

@media (max-width: 800px)
  .texts
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
  .divBusca
    padding-top: 50px
  .receita
      padding: 500px 0 !important

@media (max-width: 385px)
  .texts
    padding: 30px 0

@media (max-width: 330px)
  .divBusca
    input
      width: 190px

</style>
