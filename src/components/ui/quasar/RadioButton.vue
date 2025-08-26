<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio keep-color v-model="model" val="female" label="Женщина" color="red" />
      <q-radio keep-color v-model="model" val="male" label="Мужчина" color="cyan" />
    </div>
    <div class="q-px-sm q-mt-sm">
      Выберите интересующие для себя товары с учетом своего пола
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
const props = defineProps({ name: String, model : String, onChange : Function});
const model = ref(props.model);

watch(model, (newModel) => {
   props.onChange(props.name, newModel)
});
</script>