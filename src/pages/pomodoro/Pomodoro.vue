<script setup lang="ts">
import { reactive } from "vue"
import { PomodoroState as State } from "./PomodoroState"
import PomodoroTimer from "./PomodoroTimer.vue"

const state = reactive(new State())
</script>

<template>
  <div class="h-screen w-screen bg-red-400 text-white">
    <div class="h-full flex flex-col justify-center items-center">
      <PomodoroTimer :state="state" />
    </div>
  </div>
</template>
