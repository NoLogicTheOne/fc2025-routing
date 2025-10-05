export type Prettify<T> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]: T[K];
      }
    : T;
