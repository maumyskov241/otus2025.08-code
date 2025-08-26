<script setup>
import { Form, Field, defineRule } from "vee-validate";
import { required, email, min, max, confirmed, is } from "@vee-validate/rules";
import { ref, reactive, watch } from "vue";
import UiQuasarInput from "../components/ui/quasar/Input.vue"
import UiQuasarCheckbox from "../components/ui/quasar/Checkbox.vue"
import UiQuasarToggle from "../components/ui/quasar/Toggle.vue"
import UiQuasarRadioButton from "../components/ui/quasar/RadioButton.vue"
import UiQuasarSelectMultiple from "../components/ui/quasar/SelectMultiple.vue"
import UiQuasarInputEmail from "../components/ui/quasar/InputEmail.vue"
import UiQuasarInputStorage from "../components/ui/quasar/InputStorage.vue"
import UiQuasarRangeSliderSteps from "../components/ui/quasar/RangeSliderSteps.vue"
import UiQuasarRangeSliderAnimated from "../components/ui/quasar/RangeSliderAnimated.vue"
import UiQuasarDatepickerRange from "../components/ui/quasar/DatepickerRange.vue"
import UiQuasarRangeRating from "../components/ui/quasar/RangeRating.vue"
import UiQuasarInputCardExpire from "../components/ui/quasar/InputCardExpire.vue"
import UiQuasarInputCardNumber from "../components/ui/quasar/InputCardNumber.vue"
import UiQuasarInputPhone from "../components/ui/quasar/InputPhone.vue"
import { storeToRefs } from 'pinia'
import { useFilter } from '../store/filter'
const storeFilter = useFilter()
const {  categories } = storeToRefs(storeFilter)
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification()

defineRule("required", (value) => (required(value) ? true : "Заполните!"));
defineRule("is", (value) => (is(value) ? true : "Заполните!"));
defineRule("email", (value) => (email(value) ? true : "Не емейл!"));
defineRule("min", (value, [length]) =>
    min(value, [length]) ? true : `${length} символа или более, краткость не всегда сестра таланта!`
);
const create = ref(true)
const mode = ref(true)
const formData = reactive({
    last: null,
    first: null,
    email: null,
    notes: null,
    agree: false,
    extended: false,
    gender: 'male',
    categories: [{ value: 3, label: "men's clothing" }],
    email2: 'john.doe',
    phone: '9261020008',
    cardExpire: '0729',
    cardNumber: '1234567887654321',
    storage: 100000,
    days: [
        { from: '2025/07/01', to: '2025/07/10' },
        { from: '2025/07/21', to: '2025/07/25' }
    ],
    age: {
        min: 5,
        max: 110,
    },
    price: {
        min: 30,
        max: 50,
    },
    rating: {
        min: 2.5,
        max: 4.5,
    }
})
const onSubmit = function (values, actions) {
    //actions.resetForm();
    notify({
        title: "FormData",
        text:  "Успех!",
        type: "success",
    });
}

const onChange = function (attr, value) {
    formData[attr] = value;
}

watch(formData, (newModel) => {
    notify({
        title: "FormData",
        text: JSON.stringify(newModel),
        type: "warn",
        ignoreDuplicates: true,
    });
});


</script>
<template>
    <notifications position="top right" max="2" />
    <div class="q-pl-md">
        <h1 class="text-h4 text-weight-bold">Quasar + vee-validate v4</h1>
        <div class="q-mt-md q-gutter-md">
            <slide-up-down v-model="create" :duration="450" style="position: relative">
                         <Form @submit="onSubmit" ref="obs" name="formDataForm" v-slot="{ meta: formeta, submitted }">
                <br />
                {{ formeta }} --{{ submitted }}
                <br />
                <div class="row items-center justify-between" style="padding: 4px 12px 10px 12px">
                    <div class="column col-5">
                        <Field as="div" name="last" rules="required|min:3" v-slot="{ errorMessage, field, meta }">
                            <UiQuasarInput v-model="formData.last" label="Фамилия"
                                :invalid="meta.touched ? !meta.valid : null" :field="field"
                                :errorMessage="errorMessage" />
                        </Field>
                    </div>
                    <div class="column col-5">
                        <Field as="div" name="first" rules="required|min:3" v-slot="{ errorMessage, field, meta }">
                            <UiQuasarInput v-model="formData.first" label="Имя"
                                :invalid="meta.touched ? !meta.valid : null" :field="field"
                                :errorMessage="errorMessage" />
                        </Field>
                    </div>
                </div>
                <div class="row items-center justify-between" style="padding: 4px 12px 10px 12px">
                    <div class="column col-5">
                        <Field as="div" name="email" rules="required|min:3|email"
                            v-slot="{ errorMessage, field, meta }">
                            <UiQuasarInput v-model="formData.email" label="Почта"
                                :invalid="meta.touched ? !meta.valid : null" :field="field"
                                :errorMessage="errorMessage" />
                        </Field>
                    </div>
                    <div class="column col-5">
                        <Field as="div" name="notes" v-slot="{ field }">
                            <q-input type="textarea" v-model="formData.notes" counter maxlength="512" rows="5" autogrow
                                label="Notes" style="background: rgba(255, 255, 255, 0.05)" hint="" v-bind="field" />
                        </Field>
                    </div>
                </div>
                <br />
                <div style="padding: 4px 12px 10px 12px">
                    <Field as="div" name="agree" rules="required|min:3" v-slot="{ errorMessage, field, meta }">
                        <UiQuasarCheckbox v-model="formData.agree" label="Даю согласие на обработку персональных данных"
                            :invalid="meta.touched ? !meta.valid : null" :field="field" :errorMessage="errorMessage" />
                    </Field>
                </div>
                <UiQuasarToggle :onChange="onChange" :extended="formData.extended"></UiQuasarToggle>
                <div class="row items-center justify-end" style="padding: 20px 12px 10px 0px">
                    <!-- :disable="!formeta.valid || submitted" -->
                    <q-btn type="submit" :loading="!!submitted" rounded
                        raised size="lg" color="primary" class="float-right submit q-px-lg q-py-xs" label="Отправить"
                        :aria-label="mode ? 'Update' : 'Submit'">
                        <template v-slot:loading>
                            <q-spinner-gears />
                        </template>
                    </q-btn>
                </div>
                <div v-if="formData.extended">
                    <div class="flex ">
                        <div>
                            <UiQuasarRadioButton name="gender" :model="formData.gender" :onChange="onChange" />
                        </div>
                        <div>
                            <UiQuasarSelectMultiple name="categories" :data="categories" :model="formData.categories"
                                :onChange="onChange" />
                                
                        </div>
                        <div>
                            <UiQuasarInputEmail name="email2" :model="formData.email2" :onChange="onChange" />
                            <UiQuasarInputStorage name="storage" :model="formData.storage" :onChange="onChange" />
                        </div>

                    </div>
                    <div class="flex ">
                        <div style="width:50%">
                            <UiQuasarRangeSliderSteps name="age" :range="formData.age" :onChange="onChange" />
                        </div>
                        <div style="width:50%">
                            <UiQuasarRangeSliderAnimated name="price" :range="formData.price" :onChange="onChange" />
                        </div>
                    </div>
                    <div class="flex " style="width:100%">
                        <div>
                            <UiQuasarDatepickerRange name="days" :ranges="formData.days" :onChange="onChange" />
                        </div>
                        <div style="width:300px">
                            <UiQuasarRangeRating name="rating" :source="formData.rating" :onChange="onChange" />
                        </div>

                        <div>
                            <UiQuasarInputCardExpire name="cardExpire" :model="formData.cardExpire"
                                :onChange="onChange" />
                            <UiQuasarInputCardNumber name="cardNumber" :model="formData.cardNumber"
                                :onChange="onChange" />
                            <UiQuasarInputPhone name="phone" :model="formData.phone" :onChange="onChange" />
                        </div>
                    </div>
                </div>
            </Form>
            </slide-up-down>
        </div>
    </div>

</template>
<style>
.q-fiield__inner {
    border: 1px solid grey;
    border-radius: 5px;
}

</style>
