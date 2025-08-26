<script setup>
import { onMounted, computed, ref, reactive, watch } from 'vue'
import QProductItem from '../components/ui/QProductItem.vue'
import EmptyList from '../components/ui/EmptyList.vue'
import { useQuery } from "@vue/apollo-composable"
import { gql } from "@apollo/client/core";
import Spinner from '../components/ui/Spinner.vue'

const props = defineProps({
  filter: String,
})

import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

import { storeToRefs } from 'pinia'
import { useBasket } from '../store/basket'
import { useFilter } from '../store/filter'

const storeFilter = useFilter()
storeFilter.init(props.filter);
if (storeFilter.settings === null) {
  router.push({ name: '404' })
}

const { settings, queryString } = storeToRefs(storeFilter)

const store = useBasket()

const GET_PRODUCTS = gql`
query{
  allProducts {
    nodes {
    id
    title
    price
    description
    category
    image
    rate
    count
    sale
    }
  }
}`;

const { result, loading, error } = useQuery(GET_PRODUCTS)

const products = computed(() => result.value?.allProducts.nodes || [])

const dataR = reactive({ products: products, search: '' });

const filteredList = computed(() => {
  return dataR.products.filter(function (elem) {
    const searchFilter = () => dataR.search === '' || elem.title.toLowerCase().indexOf(dataR.search.toLowerCase()) > -1 || (elem.price + '').indexOf(dataR.search) > -1;
    return searchFilter() && storeFilter.check(elem);
  })
})

</script>
<template>
  <h1 data-testid="title">Каталог</h1>
  <div>
    <div v-if="products.length == 0" style="z-index:10000000; position: absolute; top:50%; left:50%;">
      <Spinner />
    </div>
    <EmptyList v-if="products.length != 0 && filteredList.length == 0" />
    <TransitionGroup name="list" tag="div" class="q-pa-md row items-end q-gutter-md row list outer">
      <QProductItem :store="store" :product="product" v-for="product in filteredList" :key="product.id"></QProductItem>
    </TransitionGroup>
  </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(1.5);
}

.card:hover {
  -webkit-box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
  box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3) !important;
  -webkit-transition: .3s;
  transition: .3s;
}

#wrapper {
  display: flex;
}

.list {
  align-content: stretch;
  align-items: stretch !important;
  justify-content: center;
}
</style>
