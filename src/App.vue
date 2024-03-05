<script setup lang="ts">
import T9Keyboard from '@/components/T9Keyboard.vue'
import MainHeader from '@/components/MainHeader.vue'
import { Input } from '@/components/ui/input'
import useT9 from '@/composables/useT9'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const t9 = useT9()

function handleKeyPress(key: string) {
  t9.keyPress(key)
}
</script>

<template>
    <header>
      <MainHeader />
    </header>

    <main class="">
      <div class="mx-auto max-w-xl p-4">
        <div class="bg-white rounded-xl p-4 min-h-[100px]">
          <div class="font-semibold leading-none tracking-tight mb-2">Real Words</div>
          <Badge v-for="word in t9.state.value.words" :key="word" variant="secondary" class="mr-1">
            {{ word}}
          </Badge>
        </div>
      </div>
      <T9Keyboard @keyPress="handleKeyPress" />
      <div class="mx-auto max-w-xl p-4">
        <div class="bg-white rounded-xl p-4">
          <div class="font-semibold leading-none tracking-tight mb-2">Input</div>
          <Input :model-value="t9.input" readonly />
        </div>
      </div>
      <div class="mx-auto max-w-xl p-4">
        <div class="bg-white rounded-xl p-4">
          <div class="font-semibold leading-none tracking-tight mb-2">Combinations <Badge variant="outline">
            Debug
          </Badge></div>
          {{ t9.state.value.combinations }}
        </div>
      </div>
    </main>
</template>

<style scoped>

</style>
