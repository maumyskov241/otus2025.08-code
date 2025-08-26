<template>
  <div class="q-img q-img--menu">
    <q-banner dense class="bg-grey text-white">
      <p>К сожалению по заданным парамерам еще нет товаров.</p> <p>Но Вы можете зарегистрироваться на сайте и настроить рассылку новых товаров под себя.</p>
      <template v-slot:action>
        <RouterLink class="nav-link" :to="{ name: 'register'}"><q-btn flat color="white" label="Зарегистрироваться" /></RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'register'}"><q-btn flat color="white" label="Настроить уведомления о поступлении новых товаров" /></RouterLink>
      </template>
    </q-banner>
  </div>
</template>
<style scoped>
.full-height {
    height: 100% !important;
}
.q-banner--dense {
    height: 100% !important;
}
</style>