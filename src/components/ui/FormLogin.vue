<script setup ts>
import { ref } from "vue";
/**import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import {
    required,
    min,
    max,
} from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import ru from "@vee-validate/i18n/dist/locale/ru.json";

configure({
    generateMessage: localize({
        ru,
    }),
});

setLocale("ru");

defineRule("required", required);
defineRule("min", min);
defineRule("max", max);

const emit = defineEmits();
const login = ref("");
const password = ref("");

function onSubmit(values) {
    emit('login-form-submit', values)
}*/
</script>
<template>
    <div class="form">
      <!--  <Form @submit="onSubmit" v-slot="{ values, errors, meta }">
            <div class="p-3 border bg-light">
                <div class="row g-3">
                    <div class="col-12">
                        <Field name="login" rules="required|min:4|max:255" v-slot="{ field, meta }">
                            <label for="login" class="form-label">* Логин <b>{{ login }}</b></label>
                            <input v-bind="field" id="login" class="form-control" type="text" v-model.trim="login"
                                placeholder="ФИО" :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                        </Field>
                        <ErrorMessage name="login" />
                    </div>
                    <div class="col-12">
                        <Field name="password" rules="required|min:4|max:255" v-slot="{ field, meta }">
                            <label for="password" class="form-label">* Пароль</label>
                            <input v-bind="field" id="password" class="form-control" type="password"
                                v-model.trim="password" placeholder="Пароль"
                                :class="meta.touched ? (meta.valid ? 'valid' : 'invalid') : ''" />
                        </Field>
                        <ErrorMessage name="password" />
                    </div>
                </div>
                <div class="form-group p-3">
                    <div class="col-sm-offset-2 col-sm-12 d-flex align-items-center justify-content-center">
                        <button type="submit" class="btn btn-primary">Войти</button>
                    </div>
                </div>
            </div>
        </Form> -->
    </div>
</template>

<style scoped></style>