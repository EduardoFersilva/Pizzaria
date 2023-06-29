<template>
    <main>

    <div class="card mb-3 CardItem">
      <div class="row g-0">
        <div class="col-md-3">
          <img src="../../public/imgs/pizza5.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">

            <div>
                <h5 class="card-title">Pizza Caprici</h5>
                    <p>Tamanho</p>
                    <p>Observações</p>
            </div>

            <div>
                 <p>Borda</p>
            </div>

            <div class="amount">
                <p>Quantidade</p>
               <Count />
            </div>

            <div>
                <div class="iconsedit">
                    <i class="bi bi-pencil-square" style="font-size:30px; cursor:pointer;"></i>
                    <i class="bi bi-trash" style="font-size:33px; margin-left:15px; cursor:pointer;"></i>
                </div>
                <h1>R$ 120,00</h1>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="card mb-5 CardItem">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="../../public/imgs/cocacola.png" class="img-fluid rounded-start coca" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">

                <div>
                    <h5 class="card-title">Coca Cola</h5>
                        <p>Tamanho</p>
                        <p>Observações</p>
                </div>

                <div>
                     <p>Borda</p>
                </div>

                <div class="amount">
                    <p>Quantidade</p>
                   <Count />
                </div>

                <div>
                    <div class="iconsedit">
                        <i class="bi bi-pencil-square" style="font-size:30px; cursor:pointer;"></i>
                        <i class="bi bi-trash" style="font-size:33px; margin-left:15px; cursor:pointer;"></i>
                    </div>
                    <h1>R$ 20,00</h1>
                </div>

              </div>
            </div>
          </div>
    </div>

        <div class="card  mb-3 CardTotal">
            <div class="card-body">
                <div class="totalText">
                <p class="card-text">Total</p>
                <h1>R$ 140,00</h1>
                </div>
                <router-link to="/entregapagamento">
                <a type="button" class="btn btn-lg btnAvancar" >Avançar</a>
                </router-link>
            </div>
        </div>

    </main>
</template>

<script>
import Count from '../components/Count.vue'

export default {
  name: 'Pedidos',
  components: {
    Count
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
    background: #F7F7F7
.CardItem
    border-radius: 14px
    border: none
    width: 1161px
    height: 250px

.CardItem img
    width: 210px
    height: 200px
    margin: 20px
h5
    font-family: 'Roboto'
    font-style: normal
    font-weight: 600
    font-size: 20px
    line-height: 23px
    color: #000000
    margin: 20px 0
h1
    font-family: 'Roboto'
    font-style: normal
    font-weight: 700
    font-size: 36px
    line-height: 27px
    text-align: right
    color: #DF3D29
    margin: 50px 0
.coca
    width: 83px!important
    height: 213px !important
    margin-left: 80px !important
.CardTotal
    background: #FFFFFF
    border-radius: 14px
    width: 1161px
    height: 117px
    border: none
    display: flex
    justify-content: center
.CardTotal
    .card-body
        display: flex
        justify-content: space-between
        align-items: center
.btnAvancar
    background: #009247
    border-radius: 60px
    color: #fff !important
    transition: transform 0.5s ease
    width: 230px
    height: 56px
    display: flex
    align-items: center
    justify-content: center
.btnAvancar:hover
    transform: scale(1.04)
    background: #009247
.card-body
    display: flex
    justify-content: space-between
    align-items: center
.amount
    display: flex
    flex-direction: column
    align-items: center
.iconsedit
    display: flex
    justify-content: end
.row
    margin-right: -95px !important
.totalText
    display: flex
    align-items: center
    p
        margin-right: 50px
        margin-bottom: 0
a
    text-decoration: none

</style>
