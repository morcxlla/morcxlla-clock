# README

Lightweight production-ready clock utility with zero dependencies.

## Install

```bash
npm install clock-utils
```

## Usage

```js
import createClock from "clock-utils";

const clock = createClock({ format: "HH:MM:SS" });

// Get current time string
console.log(clock.getClock()); // "14:32:07"

// Start ticking
clock.start((time, date) => {
  console.log(time); // "14:32:08"
});

// Stop
clock.stop();

// Cleanup (e.g. on component unmount)
clock.destroy();
```

## API

### `createClock(options?)`

| Option    | Type                            | Default      | Description            |
| --------- | ------------------------------- | ------------ | ---------------------- |
| `format`  | `"HH:MM:SS" \| "HH:MM" \| "SS"` | `"HH:MM:SS"` | Output format          |
| `onError` | `(err: Error) => void`          | `undefined`  | Callback error handler |

### Instance methods

| Method            | Description                                |
| ----------------- | ------------------------------------------ |
| `getClock()`      | Returns current time as formatted string   |
| `getDate()`       | Returns current `Date` object              |
| `start(callback)` | Starts ticking, fires callback each second |
| `stop()`          | Stops the ticker                           |
| `isRunning()`     | Returns `true` if active                   |
| `destroy()`       | Stops and marks instance as destroyed      |

## License

MIT
