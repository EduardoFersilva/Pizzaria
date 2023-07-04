<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  selected: {
    type: Boolean,
    defaut: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="card">

        <input class="radio" type="radio" :checked="selected">

        <div class="iconImg">
            <img :src="imageUrl"
            class="img" :alt="title">
        </div>

        <div>
            <p class="subtitle">{{ title }}</p>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardSelect',
  data() {
    return {
    }
  }

}
</script>

<style lang="sass" scoped>
.card
  border-radius: 14px
  border: none
  width: 600px
  height: 150px
  margin: 20px 0px
  display: flex
  flex-direction: row
  align-items: center
  cursor: pointer
  transition: transform 0.5s ease

.card:hover
    transform: scale(1.02)
.radio
    width: 30px
    height: 30px
    margin: 0 20px
    cursor: pointer
.iconImg
    width: 60px
    height: 60px
    background: #F6F6F6
    border-radius: 100px
    display: flex
    justify-content: center
    align-items: center
    margin-right: 30px
label
    margin-bottom: 0 !important
.img
    width: 40px
    height: 40px
.subtitle
    color: #A5A5A5

p
    font-family: 'Roboto'
    font-style: normal
    font-weight: 400
    font-size: 16px
    line-height: 21px
    color: #000000

@media (max-width: 680px)
  .card
    width: 400px
  p
    font-size: 10px
    width: 150px

@media (max-width: 420px)
  .card
    width: 310px
</style>
