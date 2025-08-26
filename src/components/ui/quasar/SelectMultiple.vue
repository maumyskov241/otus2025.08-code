<template>
  <div class="q-pa-md">
    <q-select outlined label="Выберите категории товаров" hint="разделитель [,;|]" v-model="model" use-input use-chips
      multiple input-debounce="0" @new-value="createValue" :options="filterOptions" @filter="filterFn"
      style="width: 350px" />
  </div>
</template>

<script setup>
import { onMounted, computed, ref, reactive, watch } from 'vue'
const props = defineProps({ name: String, model: Array, data: Array, onChange: Function });

const model = computed({
    get: () => props.model,
    set: newValue => props.onChange(props.name, newValue)
});

//const stringOptions = [{ value: 0, label: "men's clothing" }, { value: 1, label: "jewelery" }, { value: 2, label: "electronics" }, { value: 3, label: "women's clothing" }]

const stringOptions = ref(props.data)
const filterOptions = ref(props.model)
const createValue = function (val, done) {
  // Calling done(var) when new-value-mode is not set or is "add", or done(var, "add") adds "var" content to the model
  // and it resets the input textbox to empty string
  // ----
  // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
  // only if is not already set and it resets the input textbox to empty string
  // ----
  // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
  // (adds to model if not already in the model, removes from model if already has it)
  // and it resets the input textbox to empty string
  // ----
  // If "var" content is undefined/null, then it doesn't tampers with the model
  // and only resets the input textbox to empty string

  if (val.length > 0) {
    const modelValue = (model.value || []).slice()

    val
      .split(/[,;|]+/)
      .map(v => v.trim())
      .filter(v => v.length > 0)
      .forEach(v => {
        if (stringOptions.value.includes(v) === false) {
          stringOptions.value.push(v)
        }
        if (modelValue.includes(v) === false) {
          modelValue.push(v)
        }
      })

    done(null)
    model.value = modelValue
  }
}

const filterFn = function (val, update) {
  update(() => {
    if (val === '') {
      filterOptions.value = stringOptions.value
    }
    else {
      const needle = val.toLowerCase()
      filterOptions.value = stringOptions.value.filter(
        v => v.label.toLowerCase().indexOf(needle) > -1
      )
    }
  })
}
</script>
<style scoped>
label {
  width: auto !important;
}
</style>
