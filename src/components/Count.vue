<script setup>
defineProps({

})

</script>

<template>
    <div class="counter">
        <i class="bi bi-chevron-left" style="font-size:20px; cursor:pointer;" @click="decrement"></i>
        <span>{{ count }}</span>
        <i class="bi bi-chevron-right" style="font-size:20px; cursor:pointer;" @click="increment"></i>
    </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      if (this.count > 1) {
        this.count--
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.counter
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid #D9D9D9
    border-radius: 10px
    width: 104px
    height: 51px
span
    margin: 0 10px
    font-size: 18px
</style>
