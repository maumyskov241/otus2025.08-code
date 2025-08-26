<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
      <q-badge color="secondary">Телефон: {{ model }}</q-badge>
      <q-input
        filled
        prefix="+7"
        v-model="model"
        label="Телефон"
        mask="(###) ### - ####"
        fill-mask="#"
        unmasked-value
        hint="Mask: (###) ### - ####"
      />

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from "vue";
const props = defineProps({ name: String, model : String, onChange : Function});
const model = ref(props.model);

watch(model, (newModel) => {
   props.onChange(props.name, newModel)
});
</script>
