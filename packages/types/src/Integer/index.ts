export type Integer<T extends number> = `${T}` extends
  | `${string}.${string}`
  | 'NaN'
  ? never
  : T;
