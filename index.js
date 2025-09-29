function createClock() {
  let current = new Date();

  function getClock() {
    current = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(current.getHours())}:${pad(current.getMinutes())}:${pad(
      current.getSeconds()
    )}`;
  }

  function nextTick(callback) {
    const now = new Date();
    const delay = 1000 - now.getMilliseconds(); // tiempo hasta el próximo segundo
    setTimeout(() => {
      callback(getClock());
      nextTick(callback);
    }, delay);
  }

  return { getClock, nextTick };
}

export default createClock;
