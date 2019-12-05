import { type } from 'os'

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export type AxiosRequestConfig = {
  url?: string
  method?: Method
  headers?: any
  params?: any
  data?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export type AxiosResponse = {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

export type IAxios = {
  message: string
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: any
}

export type IAxiosError = Error &
  IAxios & {
    isAxiosError?: boolean
  }

export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise

  get(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string, config?: AxiosRequestConfig): AxiosPromise

  options(url: string, config?: AxiosRequestConfig): AxiosPromise

  head(url: string, config?: AxiosRequestConfig): AxiosPromise

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise

  put(url: string, config?: AxiosRequestConfig): AxiosPromise

  patch(url: string, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise
}
