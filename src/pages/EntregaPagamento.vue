<script setup>

</script>

<template>
    <main>
        <div>
    <h1>Entrega e pagamento</h1>

    <div class="inputInfo">
        <custom-input
        label="Nome"
        v-bind="name"
        type="text"
        placeholder="" />

        <custom-input
        label="Telefone"
        type="number"
        placeholder=""  />
    </div>

    <div class="cardGroup">
            <h2>Retirada ou Entrega</h2>

            <card-select
            imageUrl="../../public/imgs/retirada.png"
            title="Retirada no balcão"
            description="Rua Sete de Setembro, 182 Vila Alzira Santo André - SP"
            :selected="isPickUp"
            @click="selectCardDelivery('entrega')"
            :class="{ 'selected': isPickUp }"
            />

            <card-select
            imageUrl="../../public/imgs/entrega-rapida.png"
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
            />

            <custom-input
            label="Bairro"
            type="text"
            placeholder=""
            value=""
            v-model="neighborhood"
            />
        </div>

            <div class="numero-e-complemento">
            <custom-input
            label="Número"
            type="number"
            placeholder=""
            />
            <custom-input
            label="Complemento"
            type="text"
            placeholder=""
            />
            </div>

    </div>

        <div class="cardGroup">
            <h2>Forma de pagamento</h2>

            <card-select
            imageUrl="../../public/imgs/cartao.png"
            title="Cartão de Crédito"
            description=""
            :v-model="opcaoSelecionada"
            :selected="isCard"
            @click="selectCardPay('cartao')"
            :class="{ 'selected': isCard }"
            />

            <card-select
            imageUrl="../../public/imgs/dinheiro.png"
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
            />
        </div>
    </div>

        <div>
        <div class="card mb-3 CardItem">
            <div class=" g-0  CardContainer ">
                <div class="col-md-3 imga" >
                    <img src="../../public/imgs/pizza5.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8 imga">
                <div class="card-body">
                    <div class="pedido1">

                        <div class="divTitle">
                        <h5 class="card-title">Pizza Caprici</h5>
                        <p>Tamanho</p>
                        <p>Quantidade</p>
                        <p>Observações</p>
                        </div>
                        <div>
                            <p class="pBorda">Borda</p>
                            <h3>R$ 120,00</h3>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="card mb-3 CardItem">
                <div class=" g-0  CardContainer ">
                    <div class="col-md-3 imga" >
                        <img src="../../public/imgs/cocacola.png" class="img-fluid rounded-start imgBebida" alt="...">
                    </div>
                    <div class="col-md-8 imga">
                    <div class="card-body">
                        <div class="pedido1">

                            <div class="divTitle">
                            <h5 class="card-title">Coca-Cola</h5>
                            <p>Tamanho</p>
                            <p>Quantidade</p>
                            <p>Observações</p>
                            </div>
                            <div>
                                <h3>R$ 20,00</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 CardItem">
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

        <a type="button" class="btn btn-lg btnFinalizarPedido" >FINALIZAR PEDIDO</a>
        </div>

    </main>
</template>

<script>
import CustomInput from '../components/CustomInput.vue'
import CardSelect from '../components/CardSelect.vue'
import axios from 'axios'

export default {
  components: {
    CustomInput,
    CardSelect
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
      message: ''
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
    display: flex
.enderecoEntrega
    width: 670px
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
  color: #000000imgIcon
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
.CardItem
    img
        padding-top: 30px
.CardContainer
    display: flex
    justify-content: center
    align-items: center
    min-height: 300px

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
.pedido1
    display: flex
    justify-content: space-between
    align-items: center
.imga
    height: 180px
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
    margin-bottom: 3.5rem
    margin-top: 2rem
.divTitle
    padding-right: 60px
.imgBebida
    padding: 0 !important
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
</style>
