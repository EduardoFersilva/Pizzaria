<script setup>
import Banner from '../../components/Banner.vue'
import Slider from '../../components/Slider.vue'
import SliderCircle from '../../components/SliderCircle.vue'
import Revenue from '../../components/Revenue.vue'
import SliderAssessment from './SliderAssessment.vue'
import BannerEnd from '../../components/BannerEnd.vue'
</script>

<template>
  <div>
    <Banner
    title="Novidade"
    subtitle="BACK BACON"
    description="
    Generosas fatias de back bacon defumado
    e queijo derretido sobre a massa crocante,
    uma delícia para os amantes de bacon e pizza."
    actionUrl="/#/cardapio-single"
    actionLabel="FAZER PEIDIDO!"
    videoUrl="http://www.google.com"
    image-url="./imgs/pizza.png"
    />

    <Slider
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

    <SliderCircle
      title="Bebidas"
      :items="productItemsCircle"
    />

    <banner-end
      title="CONHEÇA NOSSA HISTÓRIA"
      subtitle="Uma Senhora Pizza desde 1963"
      description="
      A Senhora Pizza é uma pizzaria renomada localizada na região do ABC,
       que está no mercado desde 1963 oferecendo as melhores pizzas da região.
        Com ingredientes frescos e selecionados, massa artesanal e um atendimento de excelência,
         a Senhora Pizza é o lugar perfeito para quem busca uma experiência gastronômica única e saborosa."
      actionUrl="/#/cardapio-single"
      actionLabel="SAIBA MAIS"
      image-url="./imgs/imgMassa.jpeg"
      background="#B80818"
      titleColor="#fc9d0e"
      subtitleColor="#ffffff"
      descriptionColor="#ffffff"
    />

    <slider-assessment/>

  </div>

</template>

<script>

export default {
  components: {
    Revenue,
    SliderAssessment,
    BannerEnd

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
      pizzaImageUrl: './imgs/pizzaNapolitana.png',
      bandeiraImageUrl: './imgs/bandeira.png',

      productItemsCircle: [
        {
          title: 'Refrigerantes',
          image: './imgs/refrigerantes.png',
          action: '/#/refrigerantes'
        },
        {
          title: 'Cervejas',
          image: './imgs/cervejas.png',
          action: '/#/cervejas'
        },
        {
          title: 'Sucos',
          image: './imgs/sucos.png',
          action: '/#/sucos'
        },
        {
          title: 'Vinhos',
          image: './imgs/vinhos.png',
          action: '/#/vinhos'
        },
        {
          title: 'Drinks',
          image: './imgs/drinks.png',
          action: '/#/drinks'
        }
      ]
    }
  }
}
</script>

<style lang="sass" >

</style>
