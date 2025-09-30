interface Clock {
  getClock(): string;
  nextTick(callback: (time: string) => void): void;
}
declare function createClock(): Clock;
export default createClock;
