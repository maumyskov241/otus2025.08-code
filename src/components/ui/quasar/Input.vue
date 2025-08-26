<script setup>
const props = defineProps({ invalid: Boolean, label: String, errorMessage: String, field: Object })
</script>
<template>
    <q-input type="text" outlined rounded minlength="3" maxlength="128" hint="" 
        :label="props.label"
        :aria-invalid="props.invalid" v-bind="field" :error-message="props.errorMessage"
        :error="!!props.errorMessage" />
</template>
<style >
.q-field--outlined {
    font-family: cursive;
}
.q-field--outlined  .q-field__control:after{
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
}

.q-field--error div .q-field__control:after{
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(233, 128, 102, 0.6);
}

.q-field--outlined.q-field--highlighted div .q-field__control:after {
    border-color: currentColor;
    border-width: 3px;
    transform: scale3d(1, 1, 1);
    opacity: 0.5;
}

</style>