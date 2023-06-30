<script setup>
defineProps({
  whatsNumber: {
    type: Number,
    required: true
  },
  whatsLabel: {
    type: String,
    required: true
  }
})
</script>

<template>

    <div class="footer">

        <div class="buttonLogo">
        <logo
        title="SENHORA"
        subtitle="PIZZA"
        />

        <a
        :href="`https://api.whatsapp.com/send/?phone=${whatsNumber}`" target="_blank"
        type="button"
        class="btn btn-outline-light btn-lg buttonWhats">
        <i class="bi bi-whatsapp" style="font-size:20px;"></i>
        {{ whatsLabel }}
        </a>

        </div>

        <div class="list">
             <ul>
              <li>Cardápio</li>
              <li>Promoções</li>
              <li>Sobre nós</li>
              <li>Fale conosco</li>
            </ul>
        </div>

        <div  class="enderecoAtendimento" >
            <div>
            <p class="enderecoh1" >Endereço</p>
            <p class="endereco">Rua Sete de Setembro, 182 <br> Vila Alzira - Santo André - SP </p>
            <p class="verMapa" >(ver mapa)</p>
            </div>

            <div>
                <p class="atendimentoh1" >Atendimento</p>
                <p class="horarioAtendeimento">Segunda a Quinta das 18h às 23h <br> Sexta a Domingo das 18h às 0h </p>
            </div>
        </div>

        <div class="redesSociais">
            <p class="textRedes" >Siga nas redes</p>
            <div class="iconsredes">

            <i class="bi bi-instagram" style="font-size:40px; margin:0px 10px;"></i>
            <i class="bi bi-facebook" style="font-size:40px; margin:0px 10px;"></i>
            <i class="bi bi-linkedin" style="font-size:40px; margin:0px 10px;"></i>

            </div>
        </div>

        <div class="linha"></div>

        <div class="politicas">
        <router-link to="/politica-e-peivacidade">
            <p class="politicaPrivacidade" >Política de privacidade e cookies</p>
        </router-link>
        <p class="copyright">Copyright 2023. Senhora Pizza. Todos os direitos reservados. Desenvolvido por GLMR</p>
        </div>

    </div>

        <div class="blackFooter">

        </div>

</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Footer',
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped >
.footer
    position: absolute
    width: 100%
    height: 440px
    background: rgba(0, 0, 0, 0.75)
    display: flex
    justify-content: space-around
    align-items: center
.blackFooter
    background-image: url(./public/imgs/imageFooter.jpeg)
    background-size: cover
    width: 100%
    height: 440px

.buttonWhats
    margin-top: 50px
    border-radius: 10px
.buttonLogo
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin-left: 120px
ul
    margin: 0
    padding: 0
    color: #fff
li
    margin: 30px 0
    list-style: none
    cursor: pointer
.enderecoh1
    color: #FC9D0E
    margin-bottom: 5px
.endereco
    color: #fff
    margin-bottom: 0
.verMapa
    color: #FC9D0E
.atendimentoh1
    color: #FC9D0E
    margin-top: 50px
    margin-bottom: 5px
.horarioAtendeimento
    color: #fff
.redesSociais
    display: flex
    flex-direction: column
    align-items: center
.textRedes
    color: #FC9D0E
.iconsredes
    display: flex
    align-items: center
    color: #fff
    cursor: pointer
.linha
    position: absolute
    width: 90%
    height: 0px
    top: 370px
    border: 0.5px solid #FFFFFF
.politicaPrivacidade
    position: absolute
    width: 300px
    top: 400px
    left: 10%
    font-family: 'Roboto'
    font-style: normal
    font-size: 15px
    line-height: 18px
    color: #FFFFFF
a
    text-decoration: none
.copyright
    position: absolute
    width: 571px
    height: 23px
    top: 400px
    left: 50%
    font-family: 'Roboto'
    font-style: normal
    font-weight: 400
    font-size: 15px
    line-height: 18px
    text-align: right
    color: #FFFFFF

@media (max-width: 1370px)
    .copyright
        left: 40%

@media (max-width: 1120px)
    .copyright
        left: 35%

@media (max-width: 1020px)
    .footer
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        height: 1000px

    .blackFooter
        display: none
    .linha
        margin-top: 460px
    .politicaPrivacidade
        text-align: center
        margin: 50px 0 0 0
        position: static
        order: 1
    .copyright
        text-align: center
        margin: 0
        position: static
    .politicas
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        padding-top: 70px
    .buttonLogo
        margin: 0

    .enderecoh1,
    .endereco,
    .verMapa,
    .atendimentoh1,
    .horarioAtendeimento,
    .textRedes
        text-align: center
    ul
        text-align: center

@media (max-width: 590px)
    .copyright
        width: 300px

</style>
