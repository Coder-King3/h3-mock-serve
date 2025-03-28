import type { Middleware } from '../types'

import { defineEventHandler, getHeaders, setHeaders } from 'h3'

const headerMiddleware: Middleware<[Record<string, string>]> = (headers) => {
  return defineEventHandler((event) => {
    setHeaders(event, headers)

    console.log('headers', getHeaders(event))
  })
}

export { headerMiddleware }
