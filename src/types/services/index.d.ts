export interface IResultAction<T> {
  code: string;
  description: string;
  data?: T;
}
