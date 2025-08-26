<script setup>
import { computed, reactive } from "vue";

const props = defineProps({
    store: Object,
    settings: Object,
})

const calculateTotal = computed(() => {
    let round = (x) => (Math.round(x * 100) / 100)
    let sum = 0;

    Object.keys(props.settings).forEach(function (key) {
        sum += props.settings[key].quantity * props.settings[key].product.price;
    });

    let delivery = sum < 1000 ? 500 : 0;

    return { 'price': round(sum), 'delivery': delivery, 'products': Object.keys(props.settings).length, 'finalPrice': round(sum + delivery) };
});

</script>
<template>
    <div class="card card-registration card-registration-2" style="border-radius: 15px">
        <div class="card-body p-0">
            <div class="row g-0">
                <div class="col-lg-8">
                    <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                            <h6 class="mb-0 text-muted">
                                {{ calculateTotal.products }} товаров
                            </h6>
                        </div>
                        <slot v-for="item in props.settings" :item="item" :key="item.product.id">
                        </slot>
                        <div class="pt-5">
                            <h6 class="mb-0">
                                <button type="button" class="btn btn-primary" @click="$router.push('/')">
                                    Go to Каталог товаров
                                </button>
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 bg-body-tertiary">
                    <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                            <h6 class="mb-0 text-muted">
                                Итого
                            </h6>
                        </div>
                        <div class="d-flex justify-content-between mb-4">
                            <h5> Стоимость товаров ₽ {{ calculateTotal.price }}</h5>
                        </div>
                        <div class="d-flex justify-content-between mb-4">
                            <h5 class="mb-3">Доставка ₽ {{ calculateTotal.delivery }}</h5>
                        </div>

                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-5">
                            <h5 class="text-uppercase">Итоговая стоимость</h5>
                            <h5 id="total-price"><b>₽ {{ calculateTotal.finalPrice }}</b></h5>
                        </div>

                        <button type="button" @click="props.store.clear()" data-mdb-button-init data-mdb-ripple-init
                            class="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                            Очистить корзину
                        </button>

                        <button @click="$router.push('/checkout')" type="button" data-mdb-button-init
                            data-mdb-ripple-init class="btn btn-warning btn-block btn-lg" data-mdb-ripple-color="dark"
                            style="float: right">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.card:hover {
    -webkit-box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
    box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3) !important;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
</style>
