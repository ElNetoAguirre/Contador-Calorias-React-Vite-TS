<div style="display: flex; justify-content: space-between">
  <p align="center">
    <a href="https://react.dev/" target="blank"><img src="public/react.svg" width="200" alt="React Logo"/></a>
  </p>
  
  <p align="center">
    <a href="https://vitejs.dev/" target="blank"><img src="public/vite.svg" width="200" alt="Vite Logo"/></a>
  </p>

  <p align="center">
    <a href="https://www.typescriptlang.org/" target="blank"><img src="public/typescript.svg" width="200" alt="TypeScript Logo"/></a>
  </p>
</div>

# Contador de Calorías, Consumos y Ejercicios - React + Vite + TypeScript + ContextAPI

Aplicación creada con [React](https://react.dev/) y [Vite](https://vitejs.dev/) usando [TypeScript](https://www.typescriptlang.org/), la cual es un Contador de Calorías, Consumos y Ejercicios con el cual puedes agregar las calorías consumidas por tus alimentos, así como las calorías quemadas por tu ejercicio y la App calculará la diferencia entre ambas, dándote una idea de tus consumos diarios, puedes editarlos o eliminarlos si es que así lo de seas, y es persistente hasta que presiones el botón de **Reiniciar App**.

Algunos de los conceptos utilizados para la generación de ésta App, son:

1. [TailwindCSS](https://www.npmjs.com/package/tailwindcss).
2. UseState.
3. useEffect.
4. UseReducer.
5. UseMemo.
6. [uuid](https://www.npmjs.com/package/uuid).
7. Local Storage.
8. [Heroicons](https://www.npmjs.com/package/@heroicons/react).
9. Formularios.
10. Validaciones.
11. ContextAPI.
12. Hooks Personalizados.
13. Y más.

# React + Vite + TypeScript

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
