<template>

    <div class="bannerr">
    <div class="logo">
        <div class="grids">
            <div class="green"></div>
            <div class="white"></div>
            <div class="red"></div>
        </div>
        <h1>SENHORA</h1>
        <h2>PIZZA</h2>
        <h3>desde 1963</h3>
    </div>
      <img src="../../public/imgs/senhora.png" alt="">
    </div>

    <main>
      <div class="card">
            <div class="grids">
            <div class="verde"></div>
            <div class="branco"></div>
            <div class="vermelho"></div>
        </div>
        <div class="card-body">

          <h5 class="card-title">A mais tradicional pizzaria do ABC</h5>
          <p class="card-text">A Senhora Pizza é uma pizzaria renomada localizada na região do ABC,
            que está no mercado desde 1963 oferecendo as melhores pizzas da região. Com ingredientes
            frescos e selecionados, massa artesanal e um atendimento de excelência,
            a Senhora Pizza é o lugar perfeito para quem busca uma experiência gastronômica única e saborosa.</p>
        </div>
      </div>

    <banner-end
      title="SENHORA MATILDE"
      subtitle="A nona que deu origem a toda nossa história"
      description="
      Nona Matilde veio da Itália com suas receitas exclusivas de pizzas e abriu a pizzaria Senhora Pizza em 1963.
      Ela amava cozinhar e ficava feliz em ver seus clientes fiéis e satisfeitos.
      Todos os dias, ela acordava cedo para preparar a massa fresca e os ingredientes,
      garantindo que cada pizza fosse única e deliciosa.
      Sua paixão pela culinária italiana era evidente em cada mordida.
      A pizzaria prosperou graças ao seu amor pela cozinha e à qualidade de suas pizzas."
      image-url="./imgs/imgMassa.jpeg"
      background="#F6F6F6"
      :containerOrder="2"
      titleColor="#fc9d0e"
      subtitleColor="#000000"
      descriptionColor="#8E8E8E"
    />

      <timeline />

    <slider
    title="O que vai ser hoje?"
    :items="productItems"
    />

    <revenue
    :imageUrlPizza="pizzaImageUrl"
    :imageUrlBandeira="bandeiraImageUrl"
    namePizza="PIZZA NAPOLITANA"
    title="Receita original da Itália"
    description="A massa é preparada de forma artesanal,
     resultando em uma textura leve e crocante,
      e os ingredientes são selecionados com cuidado para garantir o melhor sabor e qualidade.
       Se você procura uma experiência gastronômica autêntica e saborosa,
        experimente a pizza napolitana da Senhora Pizza."
    actionUrl="/#/cardapio-single"
    actionLabel="FAZER PEIDIDO!"
    />

    </main>

</template>

<script>
import BannerEnd from '../components/BannerEnd.vue'
import Timeline from '../components/Timeline.vue'
import Slider from '../components/Slider.vue'
import Revenue from '../components/Revenue.vue'

export default {
  name: 'Sobre',
  components: {
    BannerEnd,
    Timeline,
    Slider,
    Revenue
  },
  data() {
    return {
      productItems: [
        {
          title: 'Muzzarela de Búfala',
          price: '65',
          image: './imgs/pizza2.png'
        },
        {
          title: 'Super Premium',
          price: '75.5',
          image: './imgs/pizza3.png'
        },
        {
          title: 'Super Premium',
          price: '75.69',
          image: './imgs/pizza4.png'
        },
        {
          title: 'Caprici',
          price: '49.99',
          image: './imgs/pizza5.png'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/pizza2.png'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/pizza2.png'
        }
      ],
      pizzaImageUrl: '/public/imgs/pizzaNapolitana.png',
      bandeiraImageUrl: '/public/imgs/bandeira.png'
    }
  }
}
</script>

<style lang="sass" scoped>

.bannerr
  width: 100%
  min-height: 650px
  background-image: url('../../public/imgs/imgBanner.jpeg')
  background-repeat: no-repeat
  background-size: cover
  display: flex
  justify-content: center
  align-items: end
.logo
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: 100px
  margin-left: 50px

img
  margin-left: 100px
.grids
    display: flex
    justify-content: center
.green
    width: 100px
    height: 10px
    background: #009247
.white
    width: 100px
    height: 10px
    background: #FFFFFF
.red
    width: 100px
    height: 10px
    background: #CF2B36
h1
    font-size: 60px
    font-weight: bold
    text-align: center
    color: #FFFFFF
    margin-bottom: 0
    font-family: 'Roboto-Bold', sans-serif
h2
    font-size: 60px
    font-family: 'Roboto-Bold', sans-serif
    text-align: center
    letter-spacing: 30px
    padding-left: 30px
    color: #009247
    margin-bottom: 0
h3
  font-family: Roboto
  font-size: 50px
  font-weight: 900
  line-height: 59px
  letter-spacing: 0em
  color: #FFFFFF

main
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background: #F6F6F6
  padding-bottom: 300px
.card
  max-width: 1160px
  min-height: 319px
  border: none
  margin: 100px 10px
.card-body
  padding: 0
  display: flex
  flex-direction: column
  align-items: center
.card .vermelho,.verde,.branco
  margin-bottom: 70px

.verde
    width: 100%
    height: 10px
    background: #009247
.branco
    width: 100%
    height: 10px
    background: #FFFFFF
.vermelho
    width: 100%
    height: 10px
    background: #CF2B36
.card h5
  font-family: Roboto
  font-size: 40px
  font-weight: 900
  line-height: 47px
  letter-spacing: 0em
  text-align: center
  color: #000000
  width: 90%
.card p
  font-family: Roboto
  font-size: 16px
  font-weight: 400
  line-height: 27px
  letter-spacing: 0em
  text-align: center
  color: #8E8E8E
  width: 80%

@media (max-width: 1060px)
  .bannerr
    flex-direction: column
    align-items: center
    padding-top: 200px
  .logo
    margin-left: 0
  img
    margin-left: 0

@media (max-width: 600px)
  main
    padding-bottom: 450px

@media (max-width: 530px)
  img
    width: 380px
    height: 350px
  .card h5
    font-size: 30px

@media (max-width: 385px)
    img
      width: 300px
      height: 300px
    .green,.white,.red
        width: 80px
    h1
        font-size: 40px
    h2
        font-size: 40px
        letter-spacing: 20px
        padding-left: 20px
    h3
        font-size: 40px

</style>
