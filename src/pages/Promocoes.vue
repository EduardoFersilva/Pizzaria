
<template>
  <main>
    <card-promotion
    title="Segunda fora da dieta"
    subtitle="BROTINHO + REFRI"
    description="Aproveite a segunda-feira para pedir pizza brotinho mais refrigerante 600ml.
    Afinal,quem  disse que segunda precisa ser triste?"
    :price= 40
    action-url="/#/pedidos"
    action-label="FAZER PEDIDO!"
    image-url1="../../public/imgs/pizza8.png"
    image-url2="../../public/imgs/refrigerantes.png"
    background-image="../../public/imgs/imgBanner.jpeg"
    image1Width="300px"
    image1Height="300px"
    image2Width="200px"
    image2Height="250px"
    />
<!--  -->
    <card-promotion
    title="Combo Completinho"
    subtitle="SALGADA + DOCE"
    description="Nem só do salgado vive o homem,
    faça seu pedido do nosso combo completinho e aproveite o melhor dos dois mundos"
    :price= 80
    action-url="/#/pedidos"
    action-label="FAZER PEDIDO!"
    image-url1="../../public/imgs/pizza7.png"
    image-url2="../../public/imgs/pizza6.png"
    background-image="../../public/imgs/imgPromocao.jpeg"
    image1Width="260px"
    image1Height="260px"
    image2Width="260px"
    image2Height="250px"
    />

  </main>
</template>

<script>
import CardPromotion from '../components/CardPromotion.vue'

export default {
  name: 'Promocoes',
  components: {
    CardPromotion
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

</style>
