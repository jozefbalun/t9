<script setup lang="ts">
import T9Keyboard from '@/components/T9Keyboard.vue'
import MainHeader from '@/components/MainHeader.vue'

</script>

<template>
    <header>
      <MainHeader />
    </header>

    <main class="">

      <T9Keyboard @keyPress="handleKeyPress" />
    </main>
</template>

<style scoped>

</style>
