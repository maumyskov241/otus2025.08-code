<script setup ts>
import { ref } from 'vue'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, min, length, email, regex, max } from "@vee-validate/rules"
import { localize, setLocale } from '@vee-validate/i18n'
import ru from '@vee-validate/i18n/dist/locale/ru.json'

configure({
  generateMessage: localize({
    ru
  })
});

setLocale('ru');

defineRule('required', required);
defineRule('min', min);
defineRule('length', length);
defineRule('email', email);
defineRule('regex', regex);
defineRule('max', max);

const emit = defineEmits()
const title = ref('')
const image = ref('')
const price = ref(0)
const description = ref('')
const category = ref('')

const onSubmit = function (values) {
  emit('create-product-form-submit', values);
}

const itemCategory = [{ id: 0, name: "men's clothing" }, { id: 1, name: "jewelery" }, { id: 2, name: "electronics" }, { id: 3, name: "women's clothing" }]
</script>

<template>
    <div class="p-3 border bg-light" style="margin-top:0;">
      <Form @submit="onSubmit" v-slot="{ values }">
        <div class="row g-3">
          <div class="col-12">
            <Field name="title" rules="required|min:4|max:255" v-slot="{ field, meta }">
              <label for="title" class="form-label">* Заголовок <b>{{ title }}</b></label>
              <input v-bind="field" id="title" class="form-control" type="text" v-model.trim="title"
                placeholder="Заголовок" :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
            </Field>
            <ErrorMessage name="title" />
          </div>
          <div class="col-12">
            <Field name="price" rules="required|max:20|regex:^([0-9]+)((\.[0-9])?)$" v-slot="{ field, meta }">
              <label for="price" class="form-label">* Стоимость <b>{{ price }}</b></label>
              <input v-bind="field" id="price" class="form-control" type="text" v-model.trim="price"
                placeholder="Стоимость" :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
            </Field>
            <ErrorMessage name="price" />
          </div>
          <div class="col-12">
            <Field name="image" rules="required|min:24" v-slot="{ field, meta }">
              <label for="image" class="form-label">* Изображение <b>{{ image }}</b></label>
              <input v-bind="field" id="image" class="form-control" type="text" v-model.trim="image"
                placeholder="Изображение" :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
            </Field>
            <ErrorMessage name="image" />
          </div>
          <div class="col-12">
            <Field name="category" rules="required" v-model="category" v-slot="{ field, meta }">
              <label for="category" class="form-label">* Категория <b>{{ category }}</b></label>
              <select v-bind="field" id="category" class="form-control" placeholder="Категория"
                :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''">
                <option v-for="item in itemCategory" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </Field>
            <ErrorMessage name="category" />
          </div>
          <div class="col-12">
            <Field name="description" :rules="{ required: true, min: 20, max: 255 }" v-slot="{ field, meta }">
              <label for="description" class="form-label">Описание</label>
              <textarea v-bind="field" id="description" class="form-control" v-model.trim="description"
                placeholder="Описание" maxlength="255"
                :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
            </Field>
            <ErrorMessage name="description" />
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-12 d-flex align-items-center justify-content-center">
              <button type="submit" class="btn btn-primary">Добавить</button>
            </div>
          </div>
        </div>
      </Form>
    </div>
</template>