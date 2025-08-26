<script setup>
import { onMounted, computed, ref, reactive, watch } from 'vue'
const props = defineProps({ extended : Boolean, onChange : Function});
const extended = ref(props.extended);

</script>
<template>
  <div class="q-pa-md q-gutter-sm flex inline">
    <div>
      <q-toggle
        v-model="extended"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        @click="onChange('extended', extended)"
      />
    </div>
    <div class="description">Добавить себя в нашу рассылку</div>
  </div>
</template>
<style scoped>
.description {
  font-size: 10px;
}
</style>