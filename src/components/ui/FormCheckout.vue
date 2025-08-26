<script setup ts>
import { ref } from "vue";
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import {
    required,
    min,
    length,
    email,
    regex,
    max,
    integer,
    is,
} from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import ru from "@vee-validate/i18n/dist/locale/ru.json";

ru.names = {
    fio: 'ФИО',
    mail: 'Почта',
    birthday: 'Дата рождения',
    country: 'Страна',
    adress: 'Адрес',
};

configure({
    generateMessage: localize({
        ru
    }),
});

setLocale("ru");

defineRule("required", required);
defineRule("min", min);
defineRule("length", length);
defineRule("email", email);
defineRule("regex", regex);
defineRule("max", max);
defineRule("integer", integer);
defineRule("is", is);

const emit = defineEmits();
const fio = ref("");
const mail = ref("");
const birthday = ref("");
const country = ref("");
const adress = ref("");
const agreement = ref("");
const card = ref({ main: "" }, { second: "" });

function onSubmit(values) {
    emit('checkout-form-submit', values)
}

const countries = [
    { id: 0, name: "Россия" },
    { id: 1, name: "Беларусь" },
    { id: 2, name: "Казахстан" },
    { id: 3, name: "Китай" },
];

</script>

<template>
    <div class="p-3 border bg-light">
        <Form @submit="onSubmit" v-slot="{ values, errors, meta }">
            <div class="row g-3">
                <div class="col-12">
                    <Field name="fio" rules="required|min:4|max:255" v-slot="{ field, meta }">
                        <label for="fio" class="form-label">* ФИО <b>{{ fio }}</b></label>
                        <input v-bind="field" id="fio" class="form-control" type="text" v-model.trim="fio"
                            placeholder="ФИО" :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                    </Field>
                    <ErrorMessage name="fio" />
                </div>
                <div class="col-12">
                    <Field name="mail" rules="required|email|max:255" v-slot="{ field, meta }">
                        <label for="mail" class="form-label">* Почта <b>{{ mail }}</b></label>
                        <input v-bind="field" id="mail" class="form-control" type="text" v-model.trim="mail"
                            placeholder="Почта" :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                    </Field>
                    <ErrorMessage name="mail" />
                </div>
                <div class="col-sm-6">
                    <Field name="birthday" rules="required" v-slot="{ field, meta }">
                        <label for="birthday" class="form-label">* Дата рождения <b>{{ birthday }}</b></label>
                        <input v-bind="field" id="birthday" class="form-control" type="date" v-model.trim="birthday"
                            placeholder="Дата рождения"
                            :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                    </Field>
                    <ErrorMessage name="birthday" />
                </div>
                <div class="col-sm-6">
                    <Field name="country" rules="required" v-model="country" v-slot="{ field, meta }">
                        <label for="country" class="form-label">* Страна <b>{{ country }}</b></label>
                        <select v-bind="field" id="country" class="form-control" placeholder="Дата рождения"
                            :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''">
                            <option v-for="item in countries" :key="item.id" :value="item.name">{{ item.name }}</option>
                        </select>
                    </Field>
                    <ErrorMessage name="country" />
                </div>
                <div class="col-12">
                    <Field name="adress" :rules="{ required: true, min: 20 }" v-slot="{ field, meta }">
                        <label for="adress" class="form-label">Адрес <b> осталось {{ 200 - adress.length }}
                                символов</b></label>
                        <textarea v-bind="field" id="adress" class="form-control" v-model.trim="adress"
                            placeholder="Адрес" maxlength="200"
                            :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                    </Field>
                    <ErrorMessage name="adress" />
                </div>
                <div class="col-6">
                    <div style="height:70px">

                        <Field name="card.main" rules="required|integer|min:16|max:16" v-slot="{ field, meta }">
                            <div style="width: 220px; float: left; margin-right:10px;">
                                <label for="card.main" class="form-label"> * Карта <b>{{ card.main }}</b></label>
                                <input v-bind="field" id="card.main" class="form-control" type="text"
                                    v-model.trim="card.main" maxlength="16" placeholder="xxxx xxxx xxxx xxxx"
                                    :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                            </div>
                        </Field>
                        <Field name="card.second" rules="required|integer|min:3|max:3" v-slot="{ field, meta }">
                            <div style="width: 80px; float: left; ">
                                <label for="card.second" class="form-label"> * CVC <b>{{ card.second }}</b></label>
                                <input v-bind="field" id="card.second" class="form-control" type="password"
                                    v-model.trim="card.second" maxlength="3" placeholder="***"
                                    :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                            </div>
                        </Field>
                    </div>
                    <div v-if="errors['card.main'] !== undefined || errors['card.second'] !== undefined" role="alert">
                        Необходимо
                        правильно заполнить данные карты</div>
                </div>
                <div class="col-6 form-check">
                    <Field id="save-info" class="form-check-input" name="agreement" type="checkbox" v-model="agreement"
                        value="1" rules="is:1"></Field>
                    <label class="form-check-label" for="save-info">соглашаюсь на обработку персональных данных.</label>
                    <ErrorMessage name="agreement">
                        <span role="alert">Необходимо дать согласие</span>
                    </ErrorMessage>
                </div>
                <div class="col-sm-offset-2 col-sm-12 d-flex align-items-center justify-content-center">
                    <button class="btn btn-primary">Отправить</button>
                </div>
            </div>
        </Form>
    </div>
</template>