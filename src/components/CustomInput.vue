<script setup>
import {defineEmits, defineProps} from 'vue'

defineEmits(['update:modelValue'])
defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: 'white'
  },
  width: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="inputGroup">
    <label>{{ label }}</label>
    <input
      :style="{ background: background, width: width }"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      @input="onInput"
    />
  </div>
</template>

<style lang="sass" scoped>
.inputGroup
    display: flex
    flex-direction: column
    margin: 20px 30px 20px 0

input
    width: 350px
    height: 50px
    border: 1px solid #D9D9D9
    border-radius: 10px
    padding-left: 10px

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button
    -webkit-appearance: none
    margin: 0

input[type="number"]
    -moz-appearance: textfield
    appearance: textfield

@media (max-width: 1250px)
  .inputGroup
    margin: 20px 0 20px 0
</style>
