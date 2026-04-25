export type TimeFormat = "HH:MM:SS" | "HH:MM" | "SS";
export type TickCallback = (time: string, date: Date) => void;

export interface ClockOptions {
  format?: TimeFormat;
  onError?: (err: Error) => void;
}

export interface Clock {
  getClock(): string;
  getDate(): Date;
  start(callback: TickCallback): void;
  stop(): void;
  isRunning(): boolean;
  destroy(): void;
}

export declare function createClock(options?: ClockOptions): Clock;
export default createClock;
