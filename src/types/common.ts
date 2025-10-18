export type Prettify<T> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]: T[K];
      }
    : T;

export type Values<T extends Record<string, unknown>> = T[keyof T];
