<script setup>
import SelectMultiple from './quasar/SelectMultiple.vue'
import RangeSliderAnimated from './quasar/RangeSliderAnimated.vue'
import DatepickerRange from './quasar/DatepickerRange.vue'
import RangeRating from './quasar/RangeRating.vue'
import { storeToRefs } from 'pinia'
import { useFilter } from '../../store/filter'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const storeFilter = useFilter()

if (storeFilter.settings === null) {
    router.push({ name: '404' })
}

const { settings, categories } = storeToRefs(storeFilter)
const onChange = function (attr, value) {
    settings.value[attr] = value;
    storeFilter.update(settings.value);
    router.push({ name: 'products', params: { filter: storeFilter.queryString } })
}

</script>
<template>
    <div class="q-pl-md">
        <div> 
            <SelectMultiple name="categories" :data="categories" :model="settings.categories" :onChange="onChange" />
            <RangeSliderAnimated name="price" :range="settings.price" :onChange="onChange" />
            <DatepickerRange name="days" :ranges="settings.days" :onChange="onChange" />
            <RangeRating name="rating" :source="settings.rating" :onChange="onChange" />
        </div>
    </div>
</template>
<style>
.q-fiield__inner {
    border: 1px solid grey;
    border-radius: 5px;
}
</style>
