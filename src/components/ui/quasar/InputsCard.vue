<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
      <q-badge color="secondary">Дата: {{ id }}</q-badge>
      <q-input
        filled
        v-model="id"
        label="Срок действия карты"
        mask="##/##"
        fill-mask="#"
        unmasked-value
        hint="Mask: ##/##"
      />

      <q-badge color="secondary">Телефон: {{ phone }}</q-badge>
      <q-input
        filled
        prefix="+7"
        v-model="phone"
        label="Телефон"
        mask="(###) ### - ####"
        fill-mask="#"
        unmasked-value
        hint="Mask: (###) ### - ####"
      />

      <q-badge color="secondary">№ карты: {{ card }}</q-badge>
      <q-input
        filled
        v-model="card"
        label="№ карты"
        mask="#### - #### - #### - ####"
        fill-mask="#"
        unmasked-value
        hint="Mask: #### - #### - #### - ####, FillMask: #"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      id: ref(null),
      phone: ref(null),
      card: ref(null)
    }
  }
}
</script>
