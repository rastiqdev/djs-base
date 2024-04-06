export type Event = {
  name: string;
  once?: boolean;
  execute: (...args: any[]) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
};
