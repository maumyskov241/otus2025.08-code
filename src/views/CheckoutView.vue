<script setup ts>
/**import axios, * as others from 'axios'
import router from '../router'
import FormCheckout from '../components/ui/FormCheckout.vue';
 
const emit = defineEmits();

function onSubmit(values) {
  axios.post('https://httpbin.org/delay/1', values)
    .then((response) => {
      alert('Status ' + response.status);
      window.setTimeout(function () {
        router.push('/');
      }, 500)
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
} */
</script>

<template>
  <div class="container px-4 text-center">
    <div class="row gx-5">
      <div class="col">
        <div class="p-3">
          <h3>Checkout</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-5 h-100">
 <!--   <FormCheckout @checkout-form-submit="onSubmit"/> -->
  </div>
</template>