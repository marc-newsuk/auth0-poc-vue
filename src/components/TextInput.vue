<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MDCTextField } from "@material/textfield";

const inputField = ref();

withDefaults(defineProps<{
  type: string;
  label: string;
  modelValue: string;
}>(), {
  type: 'text'
});

defineEmits<{
  'update:modelValue': [value: string]
}>();

onMounted(() => {
  new MDCTextField(inputField.value);
});
</script>

<template>
  <label class="mdc-text-field mdc-text-field--filled" ref="inputField">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="my-label-id">{{ label}}</span>
    <input class="mdc-text-field__input" :type="type" aria-labelledby="my-label-id"
           :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <span class="mdc-line-ripple"></span>
  </label>
</template>

<style scoped lang="scss">
@use "@material/floating-label/mdc-floating-label";
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";

@include textfield.core-styles;

.mdc-text-field {
  background-color: white;
  width: 100%;
}
</style>