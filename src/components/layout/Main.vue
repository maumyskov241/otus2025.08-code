<script setup>
import './styles/style.css'
import { onMounted, computed, ref, reactive } from 'vue'
import Spinner from '../ui/Spinner.vue'
import Wrapper from './Wrapper.vue'
const ls = ref(localStorage.auth);
</script>

<template>
  <Wrapper>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <!-- основное содержание
          <transition name="routing"> -->
          <Transition :duration="550" name="nested">
            <component :is="Component"></component>
          </Transition>
          <!--  </transition>
         - состояние загрузки -->
          <template #fallback>
            <div class="container flex-column" style="text-align:center;margin-top:40%">
              <Spinner />
            </div>
          </template>
        </Suspense>
      </template>
    </RouterView>
  </Wrapper>
</template>

<style>
.routing-leave-active {
  position: absolute;
  z-index: 2;
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out 0.1s;
}

.routing-leave-to {
  transform: translateY(50%);
  opacity: 0;
}



.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;

}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

.outer {
  background-color: #e9e9e9;
}
</style>
