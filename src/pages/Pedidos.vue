<template>
    <main>

    <div class="CardItem">
        <div class="div-img">
          <img src="../../public/imgs/pizza5.png" class="" alt="...">
        </div>
          <div class="card-body">

            <div>
                <h5 class="card-title">Pizza Caprici</h5>
                    <p>Tamanho</p>
                    <p class="pVar">8 pedaços</p>
                    <p>Observações</p>
                    <p class="pVar">...</p>
            </div>

            <div>
                 <p>Borda</p>
                 <p class="pVar">Sem borda</p>
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

    <div class="CardItem">
            <div class="div-img">
              <img src="../../public/imgs/cocacola.png" class=" coca" alt="...">
            </div>
              <div class="card-body">
                <div>
                    <h5 class="card-title">Coca Cola</h5>
                        <p>Tamanho</p>
                        <p class="pVar">600ml</p>
                        <p>Observações</p>
                        <p class="pVar">...</p>
                </div>

                <div>
                     <p>Borda</p>
                     <p class="pVar">Sem borda</p>
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

    <div class="CardItemMobile">
        <div class="div-imgMobile">
          <img src="../../public/imgs/pizza5.png" class="" alt="...">
                <div class="iconsEdit">
                    <i class="bi bi-pencil-square" style="font-size:30px; cursor:pointer;"></i>
                    <i class="bi bi-trash" style="font-size:33px; margin-left:15px; cursor:pointer;"></i>
                </div>
        </div>
          <div class="card-bodyMobile">

            <div>
                <h5 class="card-title">Pizza Caprici</h5>
                <div class="Tamanho">

                    <div class="size">
                        <p>Tamanho</p>
                        <p class="pVar">8 pedaços</p>
                    </div>

                    <div>
                        <p>Borda</p>
                        <p class="pVar">Sem borda</p>
                    </div>

                </div>
            </div>

            <div>
                <p>Observações</p>
                <p class="pVar">...</p>
            </div>

            <div class="precoCount">
                <div class="amount">
                <p>Quantidade</p>
                <Count />
                </div>
                <h1>R$ 120,00</h1>
            </div>

          </div>
    </div>

        <div class="CardItemMobile">
        <div class="div-imgMobile">
          <img src="../../public/imgs/cocacola.png" class=" coca" alt="...">
                <div class="iconsEdit">
                    <i class="bi bi-pencil-square" style="font-size:30px; cursor:pointer;"></i>
                    <i class="bi bi-trash" style="font-size:33px; margin-left:15px; cursor:pointer;"></i>
                </div>
        </div>
          <div class="card-bodyMobile">

            <div>
                <h5 class="card-title">Coca Cola</h5>
                <div class="Tamanho">

                    <div class="size">
                        <p>Tamanho</p>
                        <p class="pVar">600 ml</p>
                    </div>

                    <div>
                        <p>Borda</p>
                        <p class="pVar">Sem borda</p>
                    </div>

                </div>
            </div>

            <div>
                <p>Observações</p>
                <p class="pVar">...</p>
            </div>

            <div class="precoCount">
                <div class="amount">
                <p>Quantidade</p>
                <Count />
                </div>
                <h1>R$ 20,00</h1>
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
    min-height: 250px
    display: flex
    align-items: center
    background: #FFFFFF
    padding: 20px
    margin-bottom: 50px

.CardItem img
    height: 180px
.div-img
    width: 200px
    height: 200px
    display: flex
    justify-content: center
    align-items: center
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
.pVar
    font-family: Roboto
    font-size: 16px
    font-weight: 400
    line-height: 24px
    letter-spacing: 0em
    color: #8E8E8E

.CardTotal
    background: #FFFFFF
    border-radius: 14px
    width: 1161px
    min-height: 117px
    border: none
    display: flex
    justify-content: center
    margin-bottom: 50px !important
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
.iconsEdit
    display: flex
    justify-content: end
.totalText
    display: flex
    align-items: center
    p
        margin-right: 50px
        margin-bottom: 0
a
    text-decoration: none

.CardItemMobile
    border-radius: 14px
    border: none
    max-width: 600px
    min-height: 250px
    display: flex
    flex-direction: column
    justify-content: center
    background: #FFFFFF
    padding: 20px
    margin-bottom: 50px
    display: none
.card-bodyMobile
    display: flex
    flex-direction: column
.CardItemMobile img
    height: 180px
.div-imgMobile
    height: 200px
    display: flex
    justify-content: space-between
.Tamanho
    display: flex
.size
    margin-right: 50px
.precoCount
    display: flex
    justify-content: space-between

@media (max-width: 1360px)
    .CardItem,
    .CardTotal
        width: 95%

@media (max-width: 1000px)
    .CardItem
        display: none
    .CardItemMobile
        display: flex
    .div-imgMobile
        width: 500px

@media (max-width: 550px)
    .CardItemMobile
    .CardTotal
        width: 300px
        .card-body
            flex-direction: column
    .div-imgMobile
        width: 300px

@media (max-width: 350px)
    .div-imgMobile
        width: 100%
    .CardItemMobile img
        margin-right: -15px
    h1
        font-size: 25px
    .amount
        margin-right: 10px

</style>
