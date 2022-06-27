<script setup lang="ts">
import { reactive } from "vue"
import { PomodoroState as State } from "./PomodoroState"

const state = reactive(new State())
</script>

<template>
  <div class="h-screen w-screen bg-red-400 text-white"></div>
</template>
