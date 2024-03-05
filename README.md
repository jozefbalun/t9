# T9 Frontend

This is frontend for enter t9 input and show generated combinations and matched real words.  
Project is based on Vue3 and vite.

## Screenshot
![localhost_5173_ (1).png](..%2F..%2F..%2FDownloads%2Flocalhost_5173_%20%281%29.png)

## Constraints
- Work just for one word input (0/space, 1 are not handled)
- Match only with ~4000K most common English words
- Word Matching Not working for long words (primitive solution for supabase text search)
- For input can use only keypad buttons
- Long input can consume all RAM

## Improvements
- Better component hierarchy (keypad, keys)
- UI for config values

## Future work
- Word suggestions
- Next word prediction
- Fuzziness

## Project Setup

```sh
npm install
```

### Env
required env variables for init supabase client SDK 
- `VITE_APP_SUPABASE_URL=`
- `VITE_APP_SUPABASE_ANON_KEY=`

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run preview
```sh
npm run preview
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
