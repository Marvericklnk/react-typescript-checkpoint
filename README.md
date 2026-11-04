# React TypeScript Checkpoint

Conversion of the two supplied React JavaScript components into TypeScript. The source files contain comments explaining each change.

## Code 01 — Greeting

File: `src/Greeting.tsx`

1. Change the file extension to `.tsx` because the component contains JSX.
2. Define `GreetingProps` using `type`, with `name: string`.
3. Apply the props type to the destructured parameter.
4. Keep the greeting and default export.

The Vite JSX setup does not require importing React just to use JSX.

## Code 02 — Counter

File: `src/Counter.tsx`

1. Keep Counter as a class component.
2. Define `CounterState` with `count: number`.
3. Define `CounterProps` for a component with no props.
4. Pass both types to `Component<CounterProps, CounterState>`.
5. Annotate the state and give the increment handler a `void` return type.
6. Use the functional form of setState to calculate the next count from the previous count.
7. Put the opening parenthesis on the same line as `return`. A line break immediately after return would prevent the JSX from being returned.

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown by Vite. Use Node.js 22.12+ or a supported newer LTS version.

```bash
npm test
npm run lint
npm run build
```

The build runs the TypeScript compiler and Vite. The example page displays `Hello, Marvin!` and a counter starting at zero. Clicking Increment increases it by one.

Tests verify the greeting and repeated counter increments. This repository contains source code and is not automatically a deployed website.
