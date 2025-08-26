<script setup>
import Carousel from './Carousel.vue';
</script>
<template>
  <div class="q-card q-card--bordered q-card--flat no-shadow my-card inner">
    <div class="q-card__section q-card__section--vert">
      <div class="q-card__section q-card__section--vert q-pt-xs">
        <div class="text-overline">Не найдено элементов по указанным параметрам. </div>

        <div class="text-caption text-grey">
          <Carousel />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
