<template>
  <section class="sectionDesktop">
    <div class="container py-5" :class="{ 'timeline-left': screenWidth <= 1100 }">
      <div class="main-timeline">
        <div class="timeline left">
          <div class="card">
            <div class="card-body p-4">
              <div>
                <h3>1963</h3>
                <p class="mb-0">Nona Matilde veio da Itália com suas receitas exclusivas
                  de pizzas e abriu a pizzaria "Senhora Pizza" em 1963</p>
              </div>
              <img src="../../public/imgs/bandeira.png" alt="">
            </div>
          </div>
        </div>
        <div class="timeline right">
          <div class="card">
            <div class="card-body p-4">
              <img src="../../public/imgs/pizzaNapolitana.png" alt="">
              <div>
                <h3>1980</h3>
                <p class="mb-0">Senhora Pizza foi eleita a pizzaria que mais representa a culinária italiana no ABC</p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline left">
          <div class="card">
            <div class="card-body p-4">
              <div>
                <h3>1994</h3>
                <p class="mb-0">Na final da copa entre Brasil e Itália, o salão da pizzaria foi palco do principal
                  evento da cidade de Santo André, ganhando repercussão nacional</p>
              </div>
              <img src="../../public/imgs/bola.png" alt="">
            </div>
          </div>
        </div>
        <div class="timeline right">
          <div class="card">
            <div class="card-body p-4">
              <img src="../../public/imgs/coração.png" alt="">
              <div>
                <h3>2020</h3>
                <p class="mb-0">A marca Senhora Pizza é escolhida a marca mais amada entre os Paulistanos!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

          <section class="sectionMobile">
            <div class="main-timeline">
            <div class="timeline right">
          <div class="card">
            <div class="card-body p-4">
              <img src="../../public/imgs/bandeira.png" alt="">
              <div>
                <h3>1963</h3>
                <p class="mb-0">Nona Matilde veio da Itália com suas receitas exclusivas
                  de pizzas e abriu a pizzaria "Senhora Pizza" em 1963</p>
              </div>
            </div>
          </div>
        </div>

                <div class="timeline right">
          <div class="card">
            <div class="card-body p-4">
              <img src="../../public/imgs/pizzaNapolitana.png" alt="">
              <div>
                <h3>1980</h3>
                <p class="mb-0">Senhora Pizza foi eleita a pizzaria que mais representa a culinária italiana no ABC</p>
              </div>
            </div>
          </div>
        </div>

                <div class="timeline right">
          <div class="card">
            <div class="card-body p-4">
              <img src="../../public/imgs/bola.png" alt="">
              <div>
                <h3>1994</h3>
                <p class="mb-0">Na final da copa entre Brasil e Itália, o salão da pizzaria foi palco do principal
                  evento da cidade de Santo André, ganhando repercussão nacional</p>
              </div>
            </div>
          </div>
        </div>

                <div class="timeline right">
          <div class="card">
            <div class="card-body p-4">
              <img src="../../public/imgs/coração.png" alt="">
              <div>
                <h3>2020</h3>
                <p class="mb-0">A marca Senhora Pizza é escolhida a marca mais amada entre os Paulistanos!</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      screenWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth)
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  font-family: Roboto
  font-size: 40px
  font-weight: 900
  line-height: 47px
  letter-spacing: 0em
  text-align: right
  color: #000000
p
  font-family: Roboto
  font-size: 16px
  font-weight: 400
  line-height: 27px
  letter-spacing: 0em
  text-align: right
  color: #8E8E8E
  width: 300px
img
  width: 100px
  height: 215px

.container
  width: 1000px
.card
  background-color: #F6F6F6
  border: none
.card-body
  display: flex
  height: 250px
.card img
  width: 100px
  height: 100px
  margin: 0 20px
.main-timeline
  position: relative
.main-timeline::after
  content: ""
  position: absolute
  width: 3px
  background-color: #CF2B36
  top: 65px
  height: 820px
  bottom: 0
  left: 50%
.timeline
  position: relative
  background-color: inherit
  width: 50%
.timeline::after
  content: ""
  position: absolute
  width: 25px
  height: 25px
  right: -13px
  background-color: #CF2B36
  top: 60px
  border-radius: 50%
  z-index: 1
.left
  padding: 0px 40px 20px 0px
  left: 0
  text-align: right
  h3
    width: 300px
.right
  padding: 0px 0px 20px 40px
  left: 50%
  text-align: left
  p
    text-align: left
.left::before
  content: " "
  position: absolute
  top: 18px
  z-index: 1
  right: 30px
  border-width: 10px 0 10px 10px
  border-color: transparent transparent transparent white
.right::before
  content: " "
  position: absolute
  top: 18px
  z-index: 1
  left: 30px
  border-width: 10px 10px 10px 0
  border-color: transparent white transparent transparent
.right::after
  left: -12px

.sectionMobile
  display: none

@media (max-width: 1100px)
  .main-timeline::after
    left: 31px
    di
  .timeline
    width: 100%
    padding-left: 70px
    padding-right: 25px
  .left
    text-align: left
    width: 600px
    p
      text-align: left
  .timeline::before
    left: 60px
    border-width: 10px 10px 10px 0
    border-color: transparent white transparent transparent
  .left::after,
  .right::after
    left: 18px
  .left::before
    right: auto
  .right
    left: 0%
  .timeline-left .timeline.left .card-body
    display: flex
    flex-direction: row-reverse
    justify-content: flex-start
  .timeline-left .timeline.left .card-body > *:first-child
    margin-right: 20px
    margin-left: 0

@media (max-width: 690px)
  .sectionDesktop
    display: none
  .sectionMobile
    display: block

@media (max-width: 590px)
  .right
    padding: 0 0 20px 0
  .sectionMobile
    p
      width: 200px

@media (max-width: 400px)
  .card-body
    flex-direction: column
    align-items: baseline
  .main-timeline::after
    left: 0
  .right
    left: -30px
  .main-timeline
    left: -20px

</style>
