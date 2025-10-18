export type Equals<T1, T2> = [T1, T2] extends [T2, T1] ? true : false;

export type Assert<T extends true> = T;

export type Not<T extends boolean> = T extends false ? true : false;
