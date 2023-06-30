<template>
    <div class="modal" @click="$emit('close')">
        <div class="icon">
        <i class="bi bi-hand-thumbs-up" style="font-size:90px; color:white; margin-bottom:10px;"></i>
        </div>
        <h1>Pedido realizado com sucesso!</h1>
    </div>
          <div
        class="overlay overlay-visible"
        @click="$emit('overlay:click')"
      ></div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="sass" scoped>
.modal
    display: flex
    align-items: center
    justify-content: space-around
    flex-direction: column
    padding: 10px
    max-width: 700px
    height: 300px
    border-radius: 18px
    background: #009247
    position: fixed
    top: 30%
    left: 50%
    transform: translate(-50%,-50%)
h1
    font-family: Roboto
    font-size: 30px
    font-weight: 900
    line-height: 47px
    letter-spacing: 0em
    text-align: center
    color: #FFFFFF

.overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)
    z-index: 5
    opacity: 0
    visibility: hidden
    transition: opacity 0.3s, visibility 0s linear 0.3s

.overlay-visible
    opacity: 1
    visibility: visible
    transition: opacity 0.3s
.icon
    width: 150px
    height: 150px
    border-radius: 100%
    display: flex
    align-items: center
    justify-content: center
    background: #27B94A

</style>
