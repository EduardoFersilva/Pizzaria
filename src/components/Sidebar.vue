<script setup>
defineProps({
  menu1: {
    type: String,
    required: false
  },
  subMenu1: {
    type: String,
    required: false
  },
  subMenu2: {
    type: String,
    required: false
  },
  subMenu3: {
    type: String,
    required: false
  },
  menu2: {
    type: String,
    required: false
  },
  menu3: {
    type: String,
    required: false
  },
  menu4: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="side">
    <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
      <div :class="{ verde: !isMenuOpen, vermelho: isMenuOpen }"></div>
      <div class="branco"></div>
      <div class="vermelho"></div>
    </div>

    <ul class="menu" :class="{ active: isMenuOpen }">
      <li>
        <a @click="toggleCardapio">{{menu1}}</a>
        <ul v-if="cardapioOpen">
          <li><a href="/#/pizzas-salgadas" @click="closeMenu">{{subMenu1}}</a></li>
          <li><a href="/#/pizzas-doces" @click="closeMenu">{{subMenu2}}</a></li>
          <li>
            <a @click="toggleBebidas">{{subMenu3}}</a>
            <ul v-if="bebidasOpen" class="ulBebidas">
              <li><router-link to="/refrigerantes" @click="closeMenu">Refrigerantes</router-link></li>
              <li><router-link to="/cervejas" @click="closeMenu">Cervejas</router-link></li>
              <li><router-link to="/sucos" @click="closeMenu">Sucos</router-link></li>
              <li><router-link to="/vinhos" @click="closeMenu">Vinhos</router-link></li>
              <li><router-link to="/drinks" @click="closeMenu">Drinks</router-link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="/#/promoções" @click="closeMenu">{{menu2}}</a></li>
      <li><a href="/#/sobre" @click="closeMenu">{{menu3}}</a></li>
      <li><a href="/#/fale-conosco" @click="closeMenu">{{menu4}}</a></li>
    </ul>
  </div>

  <div
    class="overlay"
    :class="{ 'overlay-visible': isMenuOpen }"
    @click="toggleMenu"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      cardapioOpen: false,
      bebidasOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleCardapio() {
      this.cardapioOpen = !this.cardapioOpen
    },
    toggleBebidas() {
      this.bebidasOpen = !this.bebidasOpen
    },
    closeMenu() {
      this.isMenuOpen = false
      this.bebidasOpen = false
    }
  }
}
</script>

<style lang="sass" scoped>
.hamburger
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 30px
  height: 30px
  cursor: pointer
  transition: transform 0.3s
  margin: -15px 20px 0 20px
  float: right

.side
  margin: 10px 0px
  z-index: 3
  display: none
  height: 0

.hamburger.active
  transform: rotate(0deg)

.hamburger.active div:nth-child(1)
  transform: translateY(7px) rotate(-45deg)

.hamburger.active div:nth-child(2)
  opacity: 0

.hamburger.active div:nth-child(3)
  transform: translateY(-13px) rotate(45deg)

.hamburger div
  display: block
  width: 100%
  transition: transform 0.3s, opacity 0.3s

.menu
  display: none
  list-style: none
  background-color: #fff
  border-radius: 10px
  min-height: 150px
  min-width: 150px
  position: relative
  padding: 10px 10px 10px 20px
  margin-top: 50px

.menu.active
  display: block
.menu a
  font-family: Roboto
  font-size: 16px
  font-weight: 400
  line-height: 31px
  letter-spacing: 0em
  color: #070101
  text-decoration: none
  cursor: pointer
.menu li
  margin: 20px 0

.verde
    width: 50px
    height: 5px
    background: #009247
    border-radius: 20px
    margin-bottom: 5px
.branco
    width: 50px
    height: 5px
    background: #FFFFFF
    border-radius: 20px
    margin-bottom: 5px
.vermelho
    width: 50px
    height: 5px
    background: #CF2B36
    border-radius: 20px
    margin-bottom: 5px

.overlay
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

.overlay-visible
    opacity: 1
    visibility: visible
    transition: opacity 0.3s

@media (max-width: 1115px)
  .side
    display: block

</style>
