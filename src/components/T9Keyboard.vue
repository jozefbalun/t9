<script setup lang="ts">

import { Button } from '@/components/ui/button'

const emit = defineEmits<{
  keyPress: [key: string]
}>()
function handleButtonClick(key: string) {
  console.log('handleButtonClick', key)
  emit('keyPress', key)
}
</script>

<template>
  <div class="py-10">

    <div class="mx-auto max-w-xl px-4">
      <div class="bg-white rounded-xl p-4">
        <div class="grid grid-cols-3 gap-2">
          <Button @click="handleButtonClick('1')">1</Button>
          <Button @click="handleButtonClick('2')">2 <span class="ml-1 text-xs">ABC</span></Button>
          <Button @click="handleButtonClick('3')">3 <span class="ml-1 text-xs">DEF</span></Button>
          <Button @click="handleButtonClick('4')">4 <span class="ml-1 text-xs">GHI</span></Button>
          <Button @click="handleButtonClick('5')">5 <span class="ml-1 text-xs">JKL</span></Button>
          <Button @click="handleButtonClick('6')">6 <span class="ml-1 text-xs">MNO</span></Button>
          <Button @click="handleButtonClick('7')">7 <span class="ml-1 text-xs">PQRS</span></Button>
          <Button @click="handleButtonClick('8')">8 <span class="ml-1 text-xs">TUV</span></Button>
          <Button @click="handleButtonClick('9')">9 <span class="ml-1 text-xs">WXYZ</span></Button>
          <Button @click="handleButtonClick('')"></Button>
          <Button @click="handleButtonClick('0')">0 <span class="ml-1 text-xs">SPACE</span></Button>
          <Button @click="handleButtonClick('del')"><span class="ml-1 text-xs">DEL</span></Button>
        </div>
      </div>
    </div>
  </div>
</template>
