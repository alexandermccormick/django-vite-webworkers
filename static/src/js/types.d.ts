
// Utility types
export type Nullable<T> = T | null;
export type Override<T, U> = Omit<T, keyof U> & U;
export type ValueOf<T> = T[keyof T];
export type ReplaceReturnType<T extends (...a: any) => any, R> = (...a: Parameters<T>) => R;

export interface IBackgroundService {
  [key: string]: (...input: Array<any>) => any;
}

