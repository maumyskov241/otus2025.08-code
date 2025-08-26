<template>
  <div class="q-pa-md">
    <q-rating
      v-model="props.model"
      max="5"
      size="1.5em"
      color="orange"
      icon="star_border"
      icon-selected="star"
      icon-half="star_half"
      no-dimming
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ model : Number});

</script>