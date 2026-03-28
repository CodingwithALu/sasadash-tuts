export interface IResponse<T> {
  code: number
  data: T
  error_message: string
}
