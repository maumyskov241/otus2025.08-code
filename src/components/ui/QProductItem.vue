<script setup>
import { defineEmits, ref } from 'vue'

import QuantityChange from './QuantityChange.vue'
import Rating from './quasar/Rating.vue'

defineProps(["product", "store"])

const emit = defineEmits()

const userPrice = ref('')
const prompt = ref(false)

</script>
<template>
    <q-card class="my-card inner" flat bordered>
        <q-card-section>
            <q-card-section class="q-pt-xs">
                <div class="text-overline">{{ product.category }}</div>
                <div class="text-h5 q-mt-sm q-mb-xs">
                    <RouterLink class="nav-link" :to="{ name: 'product', params: { id: product.id } }">{{ product.title
                        }}</RouterLink>
                </div>
                <div class="text-caption text-grey">
                    {{ product.description }}
                </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
                <q-img class="rounded-borders" :src="product.image" width="200px" height="150px" />
            </q-card-section>

        </q-card-section>

        <q-card-section class="bottom">
            <Rating :model="Number(product.rate)"></Rating>

            <q-card-actions>
                <q-btn flat @click="prompt = true">
                    {{ userPrice || product.price }} ₽
                </q-btn>
                <!--     <q-btn flat color="primary">
            </q-btn>-->
                <RouterLink class="nav-link" :to="{ name: 'product', params: { id: product.id } }"><q-btn flat
                        color="secondary" label="Подробнее" /></RouterLink>
            </q-card-actions>
            <div class="mb-3 flex">
                <QuantityChange v-if="store.check(product)" :product="product" :store="store" />
                <button type="button" v-else class="btn add btn-danger" @click="store.increment(product)"
                    title="Добавить в корзину">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-basket" viewBox="0 0 16 16">
                        <path
                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z">
                        </path>
                    </svg>
                </button>
            </div>
            </q-card-section>    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Предложить свою цену</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input type="number" min="10" dense v-model="userPrice" autofocus @keyup.enter="prompt = false" />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Отмена" @click="userPrice = ''" v-close-popup />
                <q-btn flat label="Предложить" v-close-popup />
            </q-card-actions>
            
        </q-card>
    </q-dialog>
    </q-card>

</template>
<style scoped>
button:hover {
    background-color: #dfe8ff !important;
}

button.add {
    box-shadow: 2px 3px 10px -5px rgba(0, 0, 0, 0.45);
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
}

.in-basket .dec {
    left: calc(50% - 71px);
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

.q-card.my-card {
    width: 30%;
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

.my-card {
    position: relative;
    padding-bottom:170px;
    background-color: #f5fffb;
}

.q-card__section.bottom {
    position:absolute;
    bottom: 0px;
    width: 100%;
    height:170px;
}
</style>
