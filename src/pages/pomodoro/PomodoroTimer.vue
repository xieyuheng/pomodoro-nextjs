<script setup lang="ts">
import { PomodoroState as State } from "./PomodoroState"
import { onMounted } from "vue"

const props = defineProps<{ state: State }>()
const { state } = props

onMounted(() => {
  state.start()
})
</script>

<template>
  <div class="text-9xl">
    {{ state.formatMinutes() }}:{{ state.formatSeconds() }}
  </div>
</template>
