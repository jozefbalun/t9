import { ref, computed, watch } from 'vue'

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
    } else {
      state.value.input = state.value.input + value
    }
  }

  const input = computed(() => state.value.input)

  watch(input, (value, oldValue, onCleanup) => {
    console.log('input changed', value, oldValue)
    if (value !== oldValue) {
      state.value.combinations = getWordFromInput(value)
      console.log('getWordFromInput', state.value.combinations)
    }
  })

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
