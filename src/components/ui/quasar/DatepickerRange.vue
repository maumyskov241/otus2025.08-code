<template>
    <div class="q-pa-md">
        <div class="q-pb-sm"></div>

        <q-date v-model="ranges" range multiple mask="YYYY-MM-DD" />
        
    </div><div class="q-pa-md q-field__label no-pointer-events ellipsis">Выберите дату скидки</div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({ name: String, ranges : Array, onChange : Function});

const ranges = computed({
    get: () => props.ranges,
    set: newValue => props.onChange(props.name, newValue)
});

</script>
<style scoped>
.q-date {
    width: 260px;
    min-width: 260px;
    max-width: 100%;
}
</style>