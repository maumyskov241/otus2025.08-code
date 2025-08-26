<script setup>
import { storeToRefs } from 'pinia'
import { useBasket } from '../store/basket'
import QBasketItem from '../components/ui/QBasketItem.vue'

const store = useBasket()
const { settings } = storeToRefs(store)


import { watch, reactive } from "vue";
import BasketItem from "../components/ui/BasketItem.vue";
import Basket from "../components/ui/Basket.vue";

</script>

<template>
  <h1 data-testid="basket-title">Корзина товаров</h1>
  <section class="h-100 h-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <Basket :store="store" :settings="settings" v-slot="{item}">
            <QBasketItem :store="store" :item="item"></QBasketItem>
          </Basket>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.card:hover {
  -webkit-box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
  box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3) !important;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
</style>
<style scoped></style>
