<script setup>
const props = defineProps({ invalid: Boolean, label: String, errorMessage: String, field: Object })
</script>
<template>
  <q-checkbox color="secondary" :label="props.label" :aria-invalid="props.invalid" v-bind="field"
    :error-message="props.errorMessage" :error="!!props.errorMessage" />
</template>
<style >
.q-checkbox__label {
  font-size: 10px;
}
[aria-invalid='true'] .q-checkbox__label.q-anchor--skip {
  color: red;
}
</style>