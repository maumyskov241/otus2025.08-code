<script setup ts>
import router from '../router'
import FormLogin from '../components/ui/FormLogin.vue';

function onSubmit(values) {
  localStorage.setItem("auth", true);
  if (localStorage.getItem("auth")) {
    router.push('/product/create')
  }
}
</script>
<template>
  <div class="container">
    <div class="alert alert-warning" style="margin-top:50px;">
      <strong>Внимание!</strong> На сайте содержится конфиденциальная информация. Для просмотра нужно ввести любые
      символы в два поля ниже.
    </div>
    <div class="row margin10">
      <div class="col">
        <FormLogin @login-form-submit="onSubmit"/>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>