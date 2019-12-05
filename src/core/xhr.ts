import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'
import { IAxiosError } from '../types/index'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((reslove, reject) => {
    const { url, method = 'get', data = null, headers, responseType, timeout } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }
    request.open(method.toLowerCase(), url!, true)

    request.onreadystatechange = function handleLoad() {
      if (request.status === 0) return
      if (request.readyState !== 4) return
      const responseHeader = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText

      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeader,
        config,
        request
      }
      handleResponse(response)
    }

    request.onerror = function handleError() {
      const error = transformError(config)
      error.message = 'Networt Error'
      error.request = request
      reject(createError(error))
    }

    request.ontimeout = function handleTimeout() {
      const error = transformError(config)
      error.message = `Timeout of ${timeout} ms exceeded`
      error.code = 'ECONNABORTED'
      error.request = request
      reject(createError(error))
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)

    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        reslove(response)
      } else {
        const error = transformError(config)
        error.message = `Request faild with status code ${response.status}`
        error.request = request
        error.response = response
        reject(createError(error))
      }
    }
  })
}

function transformError(config: AxiosRequestConfig): IAxiosError {
  return {
    message: '',
    config,
    code: null,
    isAxiosError: true
  }
}
