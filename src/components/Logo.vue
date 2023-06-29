<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="logo">
        <div class="grids">
            <div class="verde"></div>
            <div class="branco"></div>
            <div class="vermelho"></div>
        </div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
    </div>
</template>

<script>

export default {
  name: 'Logo'
}
</script>

<style lang="sass" scoped>
.grids
    display: flex
    justify-content: center
.verde
    width: 32px
    height: 5px
    background: #009247
.branco
    width: 32px
    height: 5px
    background: #FFFFFF
.vermelho
    width: 32px
    height: 5px
    background: #CF2B36
h1
    font-size: 20px
    font-weight: bold
    text-align: center
    color: #C02532
    margin-bottom: 0
    font-family: 'Roboto-Bold', sans-serif
h2
    font-size: 20px
    font-family: 'Roboto-Bold', sans-serif
    text-align: center
    letter-spacing: 10px
    padding-left: 10px
    color: #009247
    margin-bottom: 0
</style>
