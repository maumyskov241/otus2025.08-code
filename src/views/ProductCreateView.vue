<script setup ts>
import { ref } from 'vue'
import FormProduct from '../components/ui/FormProduct.vue'
const emit = defineEmits()
const show = ref(false)

const onSubmit = function (values) {
  show.value = true;

  emit('create-product', values);

  window.setTimeout(() => (show.value = false), 1000);
}
</script>

<template>
  <div class="container" style="margin-top:15px;">
    
    <div style="height:80px">
      <div class="alert alert-success" v-show="show">
        <strong>Осторожно!</strong> Товар добавлен.
      </div>
    </div>
    <FormProduct @create-product-form-submit="onSubmit"></FormProduct>
  </div>
</template>
