import { AxiosRequestConfig, IAxiosError } from '../types/index'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: any

  constructor(err: IAxiosError) {
    super(err.message)

    this.config = err.config
    this.code = err.code
    this.request = err.request
    this.response = err.response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(err: IAxiosError) {
  return new AxiosError(err)
}
