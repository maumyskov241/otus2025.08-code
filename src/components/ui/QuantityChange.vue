<script setup>

defineProps(["product", "store"])

</script>
<template>
    <div class="in-basket">
        <button class="dec btn btn-danger" @click="store.decrement(product)">-</button>
        <span>{{ store.check(product) }}</span>
        <button class="inc btn btn-danger" @click="store.increment(product)">+</button>
        <slot></slot>
    </div>
</template>
<style scoped>
button:hover {
    background-color: #dfe8ff !important;
}

.in-basket {
    position: relative;
    height: 41px;
    width: 100%;
}

.in-basket span,
.in-basket button {
    position: absolute;
    background-color: rgb(255, 255, 255);
    padding: 0.0em 0.3em;
    top: 2px;
    left: calc(50% - 21px);
    min-width: 40px;
    text-align: center;
    border-radius: 8px;
    color: rgb(161, 45, 45);
    opacity: 0.7;
    font-size: 24px;
}

.in-basket .inc {
    left: calc(50% + 29px);
    cursor: pointer;
}

.in-basket .dec {
    left: calc(50% - 71px);
    cursor: pointer;
}

button:focus,
button:focus-visible {
    box-shadow: 0 0 0 .25rem rgba(29, 141, 156, 0.25) inset;
    outline: 1px solid #648ef7;
    transition: 500 ms;
}

button {
    flex: auto;
    box-shadow: 2px 3px 10px -5px rgba(0, 0, 0, 0.45);
}
</style>
