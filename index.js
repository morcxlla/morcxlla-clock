const pad = (n) => String(n).padStart(2, "0");

function formatTime(date, format) {
  switch (format) {
    case "HH:MM":
      return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    case "SS":
      return pad(date.getSeconds());
    default:
      return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  }
}

export function createClock(options = {}) {
  const { format = "HH:MM:SS", onError } = options;

  let timerId = null;
  let running = false;
  let destroyed = false;

  function checkAlive() {
    if (destroyed) throw new Error("Clock instance has been destroyed");
  }

  function getClock() {
    checkAlive();
    return formatTime(new Date(), format);
  }

  function getDate() {
    checkAlive();
    return new Date();
  }

  function tick(callback) {
    if (!running || destroyed) return;
    const now = new Date();
    const delay = 1000 - now.getMilliseconds();
    timerId = setTimeout(() => {
      if (!running || destroyed) return;
      try {
        callback(formatTime(new Date(), format), new Date());
      } catch (err) {
        onError?.(err instanceof Error ? err : new Error(String(err)));
      }
      tick(callback);
    }, delay);
  }

  function start(callback) {
    checkAlive();
    if (running) return;
    running = true;
    tick(callback);
  }

  function stop() {
    checkAlive();
    running = false;
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  function isRunning() {
    return running && !destroyed;
  }

  function destroy() {
    stop();
    destroyed = true;
  }

  return { getClock, getDate, start, stop, isRunning, destroy };
}

export default createClock;
