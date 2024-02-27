<script setup lang="ts">
import T9Keyboard from '@/components/T9Keyboard.vue'
import MainHeader from '@/components/MainHeader.vue'
import { Input } from '@/components/ui/input'
import useT9 from '@/composables/useT9'
import { Badge } from '@/components/ui/badge'

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
        <div class="bg-white rounded-xl p-4">
          <Input :model-value="t9.input" readonly />
        </div>
      </div>
      <T9Keyboard @keyPress="handleKeyPress" />
      <div class="mx-auto max-w-xl p-4">
        <div class="bg-white rounded-xl p-4">
          <Badge v-for="word in t9.state.value.words" :key="word" variant="secondary" class="mr-1">
            {{ word}}
          </Badge>
        </div>
      </div>
      <div class="mx-auto max-w-xl p-4">
        <div class="bg-white rounded-xl p-4">
          {{ t9.state.value.combinations }}
        </div>
      </div>
    </main>
</template>

<style scoped>

</style>
