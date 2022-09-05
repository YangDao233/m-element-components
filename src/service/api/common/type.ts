export interface DataType {
  name: string;
}
export interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}
