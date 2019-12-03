import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  // return isPlainObject(data) ? JSON.stringify(data) : data
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (error) {}
  }
  return data
}
