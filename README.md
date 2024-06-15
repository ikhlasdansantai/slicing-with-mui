# Website Overview ( ReactTs-vite-MUI)
![image](https://github.com/ikhlasdansantai/slicing-with-mui/assets/95151018/1d2db900-2415-401f-ae3c-bf26a8c6025e)

Memang benar kata pepatah, typescript itu ribet, tapi ketika kamu udah coba typescript, maka akan muncul rasa nyaman disetiap ketikan keyboardnya.

## Kalo kamu mau cloning, gak tau nih cek aja di bawah caranya.
Btw, web ini belum responsive yak, nanti klo udah responsive dikabarin, dan sebenernya belum 100% jadi juga, karena ada beberapa bagian yang harus di refactor, dari sisi kodenya, supaya menimbulkan rasa harmonis ketika ada orang yang liat kode nya, udah segitu aja, selamat malam, jangan lupa tidur.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
