<template>
    <div class="q-px-lg q-pt-md q-pb-xl">
        <q-range class="q-mt-xl" v-model="source" color="teal"
            :left-thumb-color="source.min === 0 ? 'grey' : 'teal'"
            :track-img="img"
            :right-thumb-color="source.max === 5 ? 'black' : 'teal'" snap :min="0" :max="5" :step="0.5" vertical drag-range dense reverse 
            marker-labels>
            <template v-slot:marker-label-group="{ markerMap }">
                <div class="row items-center no-wrap" :class="markerMap[source.min].classes"
                    :style="markerMap[source.min].style">
                    <q-icon v-if="source.min === 0" size="xs" color="teal" name="star_outline" />

                    <template v-else>
                        <q-icon v-for="i in Math.floor(source.min)" :key="i" size="xs" color="teal"
                            name="star_rate" />

                        <q-icon v-if="source.min > Math.floor(source.min)" size="xs" color="teal"
                            name="star_half" />
                    </template>
                </div>

                <div class="row items-center no-wrap" :class="markerMap[source.max].classes"
                    :style="markerMap[source.max].style">
                    <q-icon v-for="i in Math.floor(source.max)" :key="i" size="xs" color="teal" name="star_rate" />

                    <q-icon v-if="source.max > Math.floor(source.max)" size="xs" color="teal"
                        name="star_half" />
                </div>
            </template>
        </q-range>
    </div>
</template>
<script setup>
import { ref, watch, computed } from 'vue'
const props = defineProps({ name: String, source : Object, onChange : Function});
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg=='

const source = computed({
    get: () => props.source,
    set: newValue => props.onChange(props.name, newValue)
});
</script>