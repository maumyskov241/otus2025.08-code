<script setup>
import { defineEmits, ref } from 'vue'
import QuantityChange from './QuantityChange.vue'

defineProps(["item", "store"])

const emit = defineEmits()

</script>
<template>
    <q-card class="my-card flex flex-center" flat bordered>
        <q-card-section class="q-pt-xs text">
            <div class="text-overline">{{ item.product.category }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs ">
                <RouterLink class="nav-link" :to="{ name: 'product', params: { id: item.product.id } }">{{
                    item.product.title }}</RouterLink>
            </div>

            <q-btn flat>
                {{ userPrice || item.product.price }} ₽
            </q-btn>

        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
            <q-img class="rounded-borders" :src="item.product.image" width="200px" height="150px" />
        </q-card-section>
        <q-card-section class="q-pt-xs m">
            <QuantityChange :product="item.product" :store="store">
                <button class="inc delete btn-danger" @click="store.delete(item.product)">x</button>
            </QuantityChange>
        </q-card-section>

        <q-separator />



    </q-card>
</template>
<style scoped>
.text {
    width: 50%;
}

button:hover {
    background-color: #dfe8ff !important;
}

.in-basket {
    position: relative;
    height: 41px;
    width: 100%;
}

.in-basket span,
.in-basket button {
    position: absolute;
    background-color: rgb(255, 255, 255);
    padding: 0.0em 0.3em;
    top: 2px;
    left: calc(50% - 21px);
    min-width: 40px;
    text-align: center;
    border-radius: 8px;
    color: rgb(161, 45, 45);
    opacity: 0.7;
    font-size: 24px;
}

.in-basket .inc {
    left: calc(50% + 29px);
    cursor: pointer;
    box-shadow: 2px 3px 10px -5px rgba(0, 0, 0, 0.45);
}

.in-basket .dec {
    left: calc(50% - 71px);
    cursor: pointer;
}

.in-basket .delete {
    left: calc(50% - 21px);
    top: 44px;
    cursor: pointer;
}

.my-card button:focus,
.my-card button:focus-visible {
    box-shadow: 0 0 0 .25rem rgba(29, 141, 156, 0.25) inset;
    outline: 1px solid #648ef7;
    transition: 500 ms;
}

.q-card .text-caption {
    min-height: 180px;
}

.q-card .text-h5 {
    min-height: 65px;
}

html .bg-grey-9 {
    background-color: #a9a9a9 !important;
}

button {
    flex: auto
}

.m>div {
    width: 100px;
    height: 90px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.m {
    padding: 0px !important;
    width: 100px;
    height: 90px;
}

.my-card {
    margin-top: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    background-color: #f5fffb;
}
</style>
