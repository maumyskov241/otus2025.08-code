<template>
    <div class="q-pa-lg">
        <q-range class="q-mt-xl" v-model="range"   color="deep-orange" label-always markers marker-labels :min="0"
            :max="130" :step="5" :inner-min="5" :inner-max="110">
            <template v-slot:marker-label-group="scope">
                <div v-for="marker in scope.markerList" :key="marker.index"
                    :class="[`text-deep-orange-${2 + Math.ceil(marker.value / 2)}`, marker.classes]"
                    :style="marker.style" @click="model = marker.value;">{{ marker.value }} </div>
            </template>
        </q-range>
        <div class="q-field__label no-pointer-events ellipsis">Выберите возрастной диапазон продукции</div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from "vue";
const props = defineProps({ name: String, range : Object, onChange : Function});

const range = computed({
    get: () => props.range,
    set: newValue => props.onChange(props.name, newValue)
});
</script>
