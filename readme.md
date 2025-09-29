# README

A simple digital clock synchronized to the second, easy to use in **JavaScript**, **React**, **Vue**, or **Node.js**.

---

## Installation

```bash
npm install @morcxlla/clock
```

## Usage in JavaScript / Node

```js
import createClock from "@morcxlla/clock";

const clock = createClock();

console.log(clock.getClock()); // current time, e.g., "17:35:25"

// Synchronized updates every second
clock.nextTick(console.log);
```

## Usage in React

```jsx
"use client";

import { useEffect, useState } from "react";
import createClock from "@morcxlla/clock";

export default function ClockDisplay() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const clock = createClock();
    setTime(clock.getClock()); // set initial time
    clock.nextTick(setTime); // update every second
  }, []);

  return <div>{time}</div>;
}
```

## Usage in Vue

```vue
<template>
  <div>{{ time }}</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import createClock from "@morcxlla/clock";

const time = ref("");

onMounted(() => {
  const clock = createClock();
  time.value = clock.getClock(); // inicializa la hora
  clock.nextTick((val) => {
    time.value = val; // actualiza cada segundo
  });
});
</script>
```

## Features

- Clock synchronized to the second, no accumulated delay.
- Works in Vanilla JS, React, Vue/Nuxt, and Node.js.
- Lightweight and easy to integrate.

## Install from Git (optional)

You can also install directly from Git for testing:

```bash
npm install git+https://github.com/morcxlla/@morcxlla-clock.git
```
