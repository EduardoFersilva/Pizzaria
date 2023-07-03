<script setup>

</script>

<template>
    <main>
    <div class="cont">
    <h1>Entrega e pagamento</h1>

    <div class="inputInfo">
        <h2>Informações</h2>

        <div class="inputsName">
        <custom-input
        label="Nome"
        v-bind="name"
        type="text"
        placeholder=""
        :width="'310px'"
        />

        <custom-input
        label="Telefone"
        type="number"
        placeholder=""
        :width="'310px'"
        />
        </div>
    </div>

    <div class="cardGroup">
            <h2>Retirada ou Entrega</h2>

            <card-select
            imageUrl="./imgs/retirada.png"
            title="Retirada no balcão"
            description="Rua Sete de Setembro, 182 Vila Alzira Santo André - SP"
            :selected="isPickUp"
            @click="selectCardDelivery('entrega')"
            :class="{ 'selected': isPickUp }"
            />

            <card-select
            imageUrl="./imgs/entrega-rapida.png"
            title="Entrega"
            description="R$ 5,00"

            :selected="isDelivery"
            @click="selectCardDelivery('retirada')"
            :class="{ 'selected': isDelivery }"
            />
    </div>

    <div class="enderecoEntrega">

        <div class="inputLoadingCep">
            <custom-input
            label="CEP"
            type="text"
            placeholder=""
            value=""
            @input="searchAddress"
            :width="'310px'"
            />

            <div
            v-if="loading"
            class="spinner-border text-danger spinner" role="status">
            </div>

            <p v-if="message.length > 0" class="error-message">{{message}}</p>

        </div>

        <div class="inputsEndereco">
            <custom-input
            label="Endereço"
            type="text"
            placeholder=""
            value=""
            v-model="address"
            :width="'310px'"
            />

            <custom-input
            label="Bairro"
            type="text"
            placeholder=""
            value=""
            v-model="neighborhood"
            :width="'310px'"
            />
        </div>

            <div class="numero-e-complemento">
            <custom-input
            label="Número"
            type="number"
            placeholder=""
            :width="'310px'"
            />
            <custom-input
            label="Complemento"
            type="text"
            placeholder=""
            :width="'310px'"
            />
            </div>

    </div>

        <div class="cardGroup">
            <h2>Forma de pagamento</h2>

            <card-select
            imageUrl="./imgs/cartao.png"
            title="Cartão de Crédito"
            description=""
            :v-model="opcaoSelecionada"
            :selected="isCard"
            @click="selectCardPay('cartao')"
            :class="{ 'selected': isCard }"
            />

            <card-select
            imageUrl="./imgs/dinheiro.png"
            title="Dinheiro"
            description=""
            :v-model="opcaoSelecionada"
            :selected="isMoney"
            @click="selectCardPay('dinheiro')"
            :class="{ 'selected': isMoney }"
            />
            <custom-input
            v-if="isMoney"
            class="inputTroco"
            label="Levar troco para"
            type="number"
            placeholder=""
            :width="'310px'"
            />
        </div>
    </div>

        <div>
        <div class=" CardItem">
                <div class="divImg" >
                    <img src="../../public/imgs/pizza5.png" class="" alt="...">
                </div>
                <div class="">
                <div class="card-body">
                    <div class="pedido">

                        <div class="divTitle">
                        <h5 class="card-title">Pizza Caprici</h5>
                        <p>Tamanho</p>
                        <p class="pVar">8 pedaços</p>
                        <p>Quantidade</p>
                        <p class="pVar">2</p>
                        <p>Observações</p>
                        <p class="pVar">...</p>
                        </div>
                        <div>
                            <p class="pBorda">Borda</p>
                            <p class="pVar">Sem borda</p>
                            <h3>R$ 120,00</h3>
                        </div>
                    </div>
                </div>
                </div>
        </div>

        <div class=" CardItem">
                    <div class="divImg" >
                        <img src="../../public/imgs/cocacola.png" class="" alt="...">
                    </div>
                    <div class="">
                    <div class="card-body">
                        <div class="pedido">

                            <div class="divTitle">
                            <h5 class="card-title">Coca-Cola</h5>
                            <p>Tamanho</p>
                            <p class="pVar">600ml</p>
                            <p>Quantidade</p>
                            <p class="pVar">1</p>
                            <p>Observações</p>
                            ...
                            </div>
                            <div>
                                <h3>R$ 20,00</h3>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

            <div class="card mb-3 CardItemTotal">
                <div class=" g-0  CardTotal  ">
                    <div class="card-body">

                            <div class="textsTotal" v-if="isDelivery">
                                <h5>Entrega</h5>
                                <h3 class="textsTotalh3">R$ 5,00</h3>
                            </div>
                            <div class="linha" v-if="isDelivery"></div>
                            <div class="textsTotal">
                                <h5>Total</h5>
                                <h3>R$ 20,00</h3>
                            </div>
                    </div>
                </div>
            </div>

            <div>
                <a type="button" class="btn btn-lg btnFinalizarPedido" @click="openModal" >FINALIZAR PEDIDO</a>

            <div
            v-if="loading"
            class="spinner-border text-danger spinner" role="status">
            </div>

            </div>

        </div>

    <modal
     v-if="showModal"
     @overlay:click="showModal = false"
    />

    </main>
</template>

<script>
import CustomInput from '../components/CustomInput.vue'
import CardSelect from '../components/CardSelect.vue'
import Modal from '../components/Modal.vue'
import axios from 'axios'

export default {
  components: {
    CustomInput,
    CardSelect,
    Modal
  },
  data() {
    return {
      name: '',
      email: '',
      opcaoSelecionada: '',
      selectedCardDelivery: '',
      selectedCardPay: '',
      address: '',
      neighborhood: '',
      loading: false,
      message: '',
      showModal: false
    }
  },
  methods: {
    async searchAddress(cep) {
      cep = cep.toString().replace(/[^0-9]/g, '')
      if (cep.length !== 8) {
        return
      }

      this.loading=true
      this.message=''
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        this.address = response.data.logradouro
        this.neighborhood = response.data.bairro
        if (response.data.hasOwnProperty('erro')) {
          this.message='CEP Inválido!'
        }
      } catch (e) {
        this.message='Serviço Indisponível'
      }

      this.loading = false
    },
    selectCardDelivery(card) {
      this.selectedCardDelivery = card
    },
    selectCardPay(card) {
      this.selectedCardPay = card
    },
    openModal() {
      this.showModal = true
    }
  },
  computed: {
    isPickUp() {
      return this.selectedCardDelivery === 'entrega'
    },
    isDelivery() {
      return this.selectedCardDelivery === 'retirada'
    },
    isCard() {
      return this.selectedCardPay === 'cartao'
    },
    isMoney() {
      return this.selectedCardPay === 'dinheiro'
    }
  }
}

</script>

<style lang="sass" scoped>
main
    padding-top: 150px
    padding-bottom: 100px
    background: #F7F7F7
    display: flex
    justify-content: center
h1
    font-family: 'Roboto'
    font-style: normal
    font-weight: 900
    font-size: 40px
    line-height: 47px
    color: #000000
.inputInfo
    margin-top: 50px
.inputsName
    display: flex

.numero-e-complemento
    display: flex

.cardGroup
  display: flex
  flex-direction: column
  justify-content: center
  padding-top: 100px

h2
  font-family: 'Roboto'
  font-style: normal
  font-weight: 900
  font-size: 20px
  line-height: 23px
  color: #000000
  text-align: left
h5
    font-family: Roboto
    font-size: 20px
    font-weight: 900
    line-height: 23px
    letter-spacing: 0em
    text-align: left

.inputTroco
    label
    font-family: 'Roboto'
    font-style: normal
    font-weight: 400
    font-size: 16px
    line-height: 24px
    color: #A5A5A5

.CardItem
    width: 470px
    border-radius: 14px
    border: none
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3)
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px
    margin: 30px 0
.CardItem
    img
        height: 180px
.CardItemTotal
    width: 470px
    border-radius: 14px
    border: none
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3)
    display: flex
    justify-content: space-between
    padding: 10px
    margin: 30px 0
.divImg
    padding: 20px 0
    display: flex
    justify-content: center
    align-items: center
    width: 180px

.card-body
    display: flex
    justify-content: space-between
    padding: 0
.card-body h3
    font-family: 'Roboto'
    font-style: normal
    font-weight: 700
    font-size: 20px
    line-height: 27px
    text-align: right
    color: #DF3D29
    margin-top: 50px
.pedido
    display: flex
    justify-content: space-between
    align-items: end
    p
        margin-bottom: 0

.btnFinalizarPedido
    background: #009247
    border-radius: 60px
    color: #fff !important
    transition: transform 0.5s ease
    width: 230px
    height: 56px
    display: flex !important
    align-items: center !important
    justify-content: center
    float: right
.btnFinalizarPedido:hover
    transform: scale(1.04)
    background: #009247

.pBorda
    margin-top: 2rem
.pVar
    font-family: Roboto
    font-size: 16px
    font-weight: 400
    line-height: 24px
    letter-spacing: 0em
    color: #8E8E8E
.divTitle
    padding-right: 30px
.inputLoadingCep
    display: flex
    align-items: center
.spinner
    margin-left: -20px
    margin-top: 33px
.error-message
  color: red
  font-size: 14px
  margin-top: 5px
.inputsEndereco
    display: flex
.CardTotal
    min-height: 100px
    display: flex
    justify-content: center
    align-items: center
    padding: 30px 20px
.CardTotal
    h3
        font-family: 'Roboto'
        font-style: normal
        font-weight: 700
        font-size: 36px
        line-height: 27px
        text-align: right
        color: #DF3D29
        margin: 0

.textsTotalh3
    font-size: 25px !important
.CardTotal
    h5
        margin: 0

.CardTotal
    .card-body
        flex-direction: column
.textsTotal
    display: flex
    justify-content: space-between
.linha
    width:100%
    height: 1px
    background-color: #ddd
    margin: 35px 0
.selected
    border: 2px solid #009247
.selected::after
  content: ''
  width: 15px
  height: 100%
  position: absolute
  top: 0
  background: #009247
  border-top-left-radius: 10px
  border-bottom-left-radius: 10px

@media (max-width: 1250px)
    main
        flex-direction: column
        align-items: center
        justify-content: center
    h1
        text-align: center
    .inputInfo
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
    .inputsName
        flex-direction: column
        align-items: center
        justify-content: center
    .cardGroup
        align-items: center
    .inputLoadingCep
        justify-content: center
    .inputsEndereco
        flex-direction: column
        align-items: center
        justify-content: center
    .numero-e-complemento
        flex-direction: column
        align-items: center
        justify-content: center
    .cont
        width: 100%
    .btnFinalizarPedido
        float: none
        margin-left:120px

@media (max-width: 500px)
    .CardItem
        flex-direction: column
        width: 300px
    .CardItemTotal
        flex-direction: column
        width: 300px
    .btnFinalizarPedido
        margin-left: 35px

@media (max-width: 400px)
    h1
        font-size: 30px

</style>
