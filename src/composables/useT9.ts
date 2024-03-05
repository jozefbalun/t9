import { ref, computed } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { watchDebounced } from '@vueuse/core'


const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, import.meta.env.VITE_APP_SUPABASE_ANON_KEY)

export type T9State = {
  input: string
  combinations: string[]
  words: string[]
}

const wordlist = [
  'a',
  'abilities',
  'ability',
  'ability',
  'able',
  'about',
  'hello',
];

export default function useT9() {
  const realWordList = wordlist;
  const keyToLetter: Record<string, string[]> = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': [' ']
  }
  const state = ref<T9State>({
    input: '',
    combinations: [],
    words: [],
  })

  const keyPress = (value: string) => {
    if (value === 'del') {
      state.value.input = state.value.input.slice(0, -1)
    } else if (value === 'clear') {
      state.value.input = ''
    } else {
      state.value.input = state.value.input + value
    }
  }

  const input = computed(() => state.value.input)

  watchDebounced(input, async (value, oldValue) => {
    if (value !== oldValue) {
      // local generate combinations
      // state.value.combinations = getWordFromInput(value)

      try {
        console.log('input', value)
        const { data, error } = await supabase.functions.invoke('word-from-input', {
          body: { input: value },
        })
        state.value.words = data.words
        state.value.combinations = data.combinations
      } catch (e) {
        console.error('Function invoke error', e)
      }
    }
  }, { debounce: 500, maxWait: 5000 })

  // Used for local generate combinations
  const getWordFromInput = (input: string) => {
    const combinations: string[] = [];

    if (input.length > 0) {
      backtrack(input, 0, [], combinations);
    }

    if (true) {
      state.value.words = []
      combinations.map((word, index) => {
        if (realWordList.indexOf(word) > -1) {
          state.value.words.push(word);
        }
      });
    }

    return combinations
  }

  // Used for local generate combinations
  const backtrack = (input: string, index: number, currentCombination: string[], combinations: string[]) => {
    if (index === input.length) {
      combinations.push(currentCombination.join(''));
      return;
    }

    const digit = input[index];
    const letters = keyToLetter[digit] || [];

    for (const letter of letters) {
      currentCombination.push(letter);
      backtrack(input, index + 1, currentCombination, combinations);
      currentCombination.pop();
    }
  }

  return {
    keyPress,
    input,
    state,
  }
}
