<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input filled v-model="model" suffix="@mail.ru" input-class="text-right" label-slot clearable>
        <template v-slot:label>
          <div class="row items-center all-pointer-events">
            <q-icon class="q-mr-xs" color="deep-orange" size="24px" name="mail" />
            Почта (дополнительная)

            <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">Email address</q-tooltip>
          </div>
        </template>
      </q-input>

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