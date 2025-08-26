<template>
    <div class="q-pa-lg">
        <q-range class="q-mt-xl" v-model="range" color="deep-orange" label-always :max="2900" :step="100"
            track-size="8px" track-color="grey-2" inner-track-color="transparent" :track-img="img" />
        <div class="q-field__label no-pointer-events ellipsis">Отрегулируйте диапазон цен</div>
    </div>
</template>

<script setup>
import { onMounted, computed, ref, reactive, watch } from 'vue'
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg=='

const props = defineProps({ name: String, range: Object, onChange: Function });

const range = computed({
    get: () => props.range,
    set: newValue => props.onChange(props.name, newValue)
});

</script>
<style>
.q-slider__thumb {
    box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;
}
    
</style>
