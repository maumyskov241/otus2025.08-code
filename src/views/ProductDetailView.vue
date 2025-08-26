<script setup>
import { onMounted, computed, ref, reactive } from 'vue'
import { useQuery } from "@vue/apollo-composable"
import { gql } from "@apollo/client/core";
import Spinner from '../components/ui/Spinner.vue'
const expanded = ref(true)
const props = defineProps({
  id: String,
})
const GET_PRODUCTS  = gql`
query{
  allProducts(condition: {id:${props.id}}) {
    nodes {
      id
      title
      description
      price
      category
      image
    }
  }
}

`
const { result, loading, error } = useQuery(GET_PRODUCTS)

const product = computed(() =>   result?.value?.allProducts?.nodes || false)
</script>
<template>
<div v-if="product && product.length == 1" class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ product[0].title }}</div>
        <div class="text-caption text-grey">
          {{ product[0].category }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ product[0].description }}
          </q-card-section>
        </div>
      </q-slide-transition>
      <q-img
        :src="product[0].image" 
      />
    </q-card>
  </div>
  <div v-else-if="typeof(product) == 'object' && product.length == 0">{{$router.push({name : '404'})}}  </div>
  <div v-else><Spinner/></div>
</template>
<style scoped>

</style>
