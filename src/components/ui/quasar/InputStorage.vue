<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">

      <q-input outlined v-model="model" prefix="₽" label-slot clearable>
        <template v-slot:prepend>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>

        <template v-slot:label>
          <span class="text-weight-bold text-deep-orange">Вы</span> можете указать <span class="q-px-sm bg-deep-orange text-white text-italic rounded-borders">бюджет</span>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
const props = defineProps({ name: String, model : String|Number, onChange : Function});
const model = ref(props.model);

watch(model, (newModel) => {
   props.onChange(props.name, newModel)
});
</script>