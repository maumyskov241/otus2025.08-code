<template>
  <div class="q-img q-img--menu">


    <q-card class="relative-position card-example" flat bordered>
      <q-card-section class="q-pb-none">
        <div class="text-h6">Выберите</div>
      </q-card-section>

      <q-card-section>
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div v-show="showSimulatedReturnData">
            <q-btn class="category" v-for="category in storeFilter.categories" :key="category.value" outline rounded
              color="primary" :label="category.label" />
          </div>
        </transition>
      </q-card-section>

      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFilter } from '../../store/filter'
const storeFilter = useFilter()

const visible = ref(false)
const showSimulatedReturnData = ref(false)

onMounted(() => {
  visible.value = true
  showSimulatedReturnData.value = false

  setTimeout(() => {
    visible.value = false
    showSimulatedReturnData.value = true
  }, 1000)
})




</script>
<style scoped>
.card-example {
  min-height: 222px;
}

.category {
  margin: 10px;
}
</style>