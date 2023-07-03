<script setup>
defineProps({

  actionUrl: {
    type: String,
    required: true

  },
  actionLabel: {
    type: String,
    required: true
  },
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
  <header>
    <router-link to="/">
      <logo
      title="SENHORA"
      subtitle="PIZZA"
      />
    </router-link>

    <ul>
      <li @click="toggleSidebarMenu">Cardápio</li>
      <li><router-link to="/promoções">Promoções</router-link></li>
      <li><router-link to="/sobre">Sobre nós </router-link></li>
      <li><router-link to="/fale-conosco">Fale conosco</router-link></li>
    </ul>

    <div class="buttons">

    <a
    type="button" class="btn btn-lg  btn-outline-dark buttonPedidos"
    :href="actionUrl"
    v-if="actionUrl !== undefined">
    {{ actionLabel }}
    <i class="bi bi-cart3" style="font-size:25px; margin-left:5px;"></i>
    </a>

      <a type="button"  class="btn btn-lg  buttonWhats"
        :href="`https://api.whatsapp.com/send/?phone=${whatsNumber}`" target="_blank">
        <i class="bi bi-whatsapp" style="font-size:25px; margin-right:5px;"></i>
        {{ whatsLabel }}
      </a>

    </div>

    <div class="iconGrids">
      <a :href="actionUrl" class="bi bi-cart3 iconCartMobile " style="font-size:40px;"></a>

      <sidebar
        menu1="Cardápio"
        sub-menu1="Pizzas salgadas"
        sub-menu2="Pizzas doces"
        sub-menu3="Bebidas"
        menu2="Promoções"
        menu3="Sobre nós"
        menu4="Fale conosco"
        />
    </div>

      <div class="sidebarMenu sidebarMenu-centered" :class="{ 'sidebarMenu-open': sidebarMenuOpen }">
         <ul>
            <li><router-link to="/pizzas-salgadas" @click="closeSidebarMenu">Pizzas Salgadas</router-link></li>
            <li><router-link to="/pizzas-doces" @click="closeSidebarMenu">Pizzas Doces</router-link></li>
             <li @click="toggleBebidas">Bebidas
              <ul v-if="bebidasOpen" class="ulBebidas">
                <li><router-link to="/refrigerantes" @click="closeSidebarMenu">Refrigerantes</router-link></li>
                <li><router-link to="/cervejas" @click="closeSidebarMenu">Cervejas</router-link></li>
                <li><router-link to="/sucos" @click="closeSidebarMenu">Sucos</router-link></li>
                <li><router-link to="/vinhos" @click="closeSidebarMenu">Vinhos</router-link></li>
                <li><router-link to="/drinks" @click="closeSidebarMenu">Drinks</router-link></li>
              </ul>
            </li>
          </ul>
      </div>

      <div
      class="overlayMenu"
      :class="{ 'overlayMenu-visible': sidebarMenuOpen }"
      @click="toggleSidebarMenu"
    ></div>

  </header>
</template>

<script>
import Logo from './Logo.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    Sidebar
  },
  data() {
    return {
      sidebarOpen: false,
      sidebarMenuOpen: false,
      bebidasOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    toggleSidebarMenu() {
      this.sidebarMenuOpen = !this.sidebarMenuOpen
    },
    toggleBebidas() {
      this.bebidasOpen = !this.bebidasOpen
    },
    closeSidebarMenu() {
      this.sidebarMenuOpen = false
    }
  }
}
</script>

<style lang="sass" scoped>
header
    width: 100%
    height: 108px
    margin-top: 5px
    background: #F7F1E8
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1)
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    z-index: 3
ul
    display: flex
    margin: 0 100px
    padding: 0
li
    margin: 0 20px
    list-style: none
    cursor: pointer
li:active
  color: #009247

a
  color: #000000
  text-decoration: none
.buttons
    display: flex
    flex-direction: row
.buttonPedidos
    display: flex
    align-items: center
    transition: transform 0.5s ease
    border-radius: 10px
.buttonWhats
    margin-left: 20px
    display: flex
    align-items: center
    transition: transform 0.5s ease
    border-radius: 10px
    background: #DF3D29
    color: #fff
.buttonPedidos:hover
    transform: scale(1.04)
.buttonWhats:hover
    transform: scale(1.04)
    background-color: #DF3D29
    color: #fff

.logoMobile,
.iconCartMobile
  display: none
  margin-bottom: 10px
  position: absolute
  top: 15px
  right: 80px
.iconGrids
  display: flex
  margin-right: 10px

.sidebarMenu
  min-width: 185px
  min-height: 124px
  background: #FFFFFF
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15)
  border-radius: 10px
  position: fixed
  top: -600px
  left: 600px
  transition: top 0.5s ease
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  z-index: 2
.sidebarMenu-centered
  left: 0
  right: 0
  margin: auto
  width: 0
.sidebarMenu-open
  top:100px
.sidebarMenu
  ul
    display: block
    margin: 0

  li
    margin: 20px 0

.ulBebidas
  margin-left: 30px !important

.overlayMenu
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)
    z-index: 1
    opacity: 0
    visibility: hidden
    transition: opacity 0.3s, visibility 0s linear 0.3s
    margin-top: 114px

.overlayMenu-visible
    opacity: 1
    visibility: visible
    transition: opacity 0.3s

@media (max-width: 1360px)
  ul
    margin: 0
  .buttonWhats
    margin: 0 20px 0 10px

@media (max-width: 1115px)
  ul
    display: none
  .buttons
    display: none
  header
    justify-content: space-between

  .iconCartMobile
    display: block

</style>
