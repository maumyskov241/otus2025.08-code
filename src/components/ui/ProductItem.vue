<script setup>

 defineProps(["item"])

 const emit = defineEmits()

</script>
<template>
    <div class="col ">{{ item }}
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3" style="min-height:150px;">
            <h4 class="my-0 fw-normal">{{ item.title }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">₽{{ item.price }}<small class="text-muted fw-light">/шт</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>ID: {{ item.category }}</li>
              <li>Категория: {{ item.category }}</li>
              <li>Оценило товар:{{ item.count }}</li>
              <li>{{ item.rate}}</li>
            </ul>
<div class="mb-3">
              <button type="button" class="btn btn-danger"  @click="$emit('add-to-basket', item)" title="Добавить в корзину">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
</svg>
              </button>
            </div>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary"><!--<RouterLink class="nav-link" :to="{ name: 'product', params: {id : item.id}}" >Подробнее</RouterLink>--></button>
          </div>
        </div>
      </div>
</template>
<style scoped>

</style>
