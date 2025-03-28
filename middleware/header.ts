import type { Middleware } from '../types'

import { defineEventHandler, setHeaders } from 'h3'

const headerMiddleware: Middleware<[Record<string, string>]> = (headers) => {
  return defineEventHandler((event) => {
    setHeaders(event, headers)
  })
}

export { headerMiddleware }
