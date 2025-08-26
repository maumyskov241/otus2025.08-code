<script setup>
const props = defineProps({ item: Object, productRemove: Function });
</script>
<template>
  <div class="row mb-4 d-flex justify-content-between align-items-center" :id="'id' + props.item.product.id">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img :src="props.item.product.image" class="img-fluid rounded-3" :alt="props.item.product.title" />
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <h6 class="text-muted">{{ props.item.product.category }}</h6>
      <h6 class="mb-0">{{ props.item.product.title }}</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link down px-2" @click="props.item.quantity--">
        <i class="fas fa-minus"></i>
      </button>
      <input id="form1" min="1" v-model="props.item.quantity" type="number" class="form-control form-control-sm" />
      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link up px-2" @click="props.item.quantity++">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h6 class="mb-0">₽ {{ item.product.price }}</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <button type="button" class="btn btn-danger" @click="productRemove(props.item)" title="убрать из корзины">
        х
      </button>
    </div>
  </div>

  <hr class="my-4" />
</template>
<style scoped></style>