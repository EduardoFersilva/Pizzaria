<template>
<main>
  <div class="LocPhone">
  <div class="divLoc">
  <h1>Localização</h1>
  <div class="card">
    <div class="card-body">
      <h2 class="card-text">Rua Sete de Setembro, 182 Vila Alzira - Santo André - SP</h2>
      <p><i>(ver mapa)</i></p>
    </div>
  </div>
  </div>

  <div class="divPhone">
  <h1>Telefone</h1>
  <div class="card">
    <div class="card-body">
      <h2 class="card-text">11 96696.7435</h2>
    </div>
  </div>
  </div>
  </div>

  <div class="divForm">
  <h1>Formulário</h1>
  <p>Sua opinião é muito importante para seguirmos evoluindo, envie uma mensagem que responderemos em breve!</p>
  <div class="card">
    <div class="card-body">

      <div class="divInputDados">
      <custom-input
      label="Nome Completo"
      type="text"
      placeholder=""
      :background="'#F7F1E8'"
      :width="'350px'"
      :required="true"
      />

      <custom-input
      label="Telefone "
      type="number"
      placeholder=""
      :background="'#F7F1E8'"
      :width="'350px'"
      :required="true"
      />

      <custom-input
      label="Email"
      type="email"
      placeholder=""
      :background="'#F7F1E8'"
      :width="'350px'"
      :required="true"
      />
      </div>
        <div class="textarea">
            <h2>Mensagem</h2>
            <div class="input-group">
                <textarea class="form-control"
                aria-label="With textarea"
                placeholder=""
                :required="true">
              </textarea>
            </div>
        </div>

        <div class="send">
          <p>contato@senhorapizza.com.br</p>
          <a type="button" class="btn btnEnviar">ENVIAR</a>
        </div>

    </div>
  </div>
  </div>

    <div class="divFormMobile">
  <div class="card">
    <div class="card-body">

      <div class="divInputDados">
      <custom-input
      label="Nome Completo"
      type="text"
      placeholder=""
      :background="'#F7F1E8'"
      :width="'280px'"
      :required="true"
      />

      <custom-input
      label="Telefone "
      type="number"
      placeholder=""
      :background="'#F7F1E8'"
      :width="'280px'"
      :required="true"
      />

      <custom-input
      label="Email"
      type="email"
      placeholder=""
      :background="'#F7F1E8'"
      :width="'280px'"
      :required="true"
      />
      </div>
        <div class="textarea">
            <h2>Mensagem</h2>
            <div class="input-group">
                <textarea class="form-controlMobile"
                aria-label="With textarea"
                placeholder=""
                :required="true">
              </textarea>
            </div>
        </div>

        <div class="send">
      <p>contato@senhorapizza.com.br</p>
      <a type="button" class="btn btnEnviar" @click="enviarFormulario">ENVIAR</a>
    </div>

    </div>
  </div>
  </div>
</main>
</template>

<script>
import CustomInput from '../components/CustomInput.vue'
export default {
  name: 'FaleConosno',
  components: {
    CustomInput
  },
  methods: {
    enviarFormulario() {
      console.log('Formulário enviado com sucesso!')
    }
  }
}
</script>

<style lang="sass" scoped>
main
  padding: 150px 0 150px 0
  background: #F6F6F6
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.LocPhone
  display: flex

.card
  width: 568px
  height: 132px
  border-radius: 14px
  border: none
  background: #FFFFFF

.card-body
  display: flex
  flex-direction: column
  justify-content: center

h1
  font-family: Roboto
  font-size: 20px
  font-weight: 900
  line-height: 23px
  letter-spacing: 0em
  color: #000000
h2
  font-family: Roboto
  font-size: 16px
  font-weight: 400
  line-height: 24px
  letter-spacing: 0em
  color: #000000
p
  font-size: 18px
  font-weight: 500
  line-height: 24px
  letter-spacing: 0em
  color: #FC9D0E
.divLoc
  margin-right: 30px
.divPhone
  h2
    font-family: Roboto
    font-size: 20px
    font-weight: 700
    line-height: 23px
    letter-spacing: 0em
    color: #DF3D29
.divFormMobile
  display: none

  .card
      height: 900px
      width: 310px
      padding-left: 25px
  .card-body
      align-items: center

.divForm
  max-width: 1166px
  margin-top: 100px
  display: flex
  flex-direction: column
  align-items: center

  p
    font-family: Roboto
    font-size: 16px
    font-weight: 400
    line-height: 27px
    letter-spacing: 0em
    color: #8E8E8E
  .card
    width: 100%
    min-height: 600px
  .card-body
    justify-content: flex-start
    padding: 0 20px 0 30px

.divInputDados
  display: flex
.form-control
  min-height: 300px
  background: #F7F1E8

.send
  display: flex
  justify-content: space-between
  margin-top: 50px
.btnEnviar
  width: 230px
  height: 56px
  border-radius: 60px
  background: #FC9D0E
  transition: transform 0.5s ease
  display: flex
  align-items: center
  justify-content: center

.btnEnviar:hover
    transform: scale(1.04)
    background: #FC9D0E

@media (max-width: 1195px)
  .LocPhone
    flex-direction: column
  .divPhone
    margin: 50px 0
  .divLoc
    margin-right: 0
  .divInputDados
    flex-direction: column
    align-items: center
  .divForm
    .card
      height: 900px
      width: 568px
      padding-left: 25px
    .card-body
      align-items: center
  .input-group
    width: 350px
    margin-right: 30px
  .send
    flex-direction: column
    align-items: center
    margin-right: 30px
    width: 300px

  p
    text-align: center
    width: 90%
@media (max-width: 600px)
  .card
    width: 400px
  .divForm .card
      width: 400px !important
@media (max-width: 420px)
  .card
    width: 300px
  .divForm .card
     display: none
  .divFormMobile
    flex-direction: column
    display: flex
    align-items: center
  .form-controlMobile
    width: 280px
    min-height: 300px
    border: none
    background: #F7F1E8
  .textarea
    width: 300px
    border-radius: 10px

</style>
