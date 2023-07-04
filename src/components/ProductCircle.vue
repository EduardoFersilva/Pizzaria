<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  actionUrl: {
    type: String,
    required: true
  }

})
</script>

<template>
    <div class="card">
      <a :href="actionUrl">
        <img :src="imageUrl" :alt="title">
        <h3>{{ title }}</h3>
      </a>
    </div>
</template>

<script>
export default {
  name: 'ProductCircle'
}
</script>

<style lang="sass" scoped>
.card
    flex-shrink: 0
    margin: 10px
    border: none
    transition: opacity 0.3s ease
    display: flex
    align-items: center
    justify-content: center
    border-radius: 50%
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
    transition: transform 0.3s
    width: 193px
    height: 193px
    background: #FF7E46

.card:hover
  transform: scale(1.05)
.card h3
    margin: 50px 10px
    font-size: 16px
    font-family: 'Roboto'
    font-style: normal
    font-size: 16px
    line-height: 27px
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    color: #000000
.card p
    margin: 10px
.card.active
    opacity: 1
.card img
  height: 192px
  margin-top: 125px
a
  text-decoration: none
</style>
