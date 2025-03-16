import type { applicationConfig } from '../types'

import {
  appendCorsHeaders,
  appendHeaders,
  createApp as createH3App,
  defineEventHandler,
  type H3CorsOptions
} from 'h3'

import { isObject } from '../utils/inference'
import { createRouter } from './router'

const DEFAULT_CORS_CONFIG: H3CorsOptions = {
  allowHeaders: '*',
  maxAge: '0',
  methods: '*',
  origin: '*'
}

function defineApplication(config: applicationConfig) {
  const { cors = false, h3Options = {}, headers = {}, prefix, routes } = config
  const h3App = createH3App(h3Options)

  const router = createRouter({
    prefix,
    routes
  })

  // use router
  h3App.use(router)

  // 如果开启 CORS，注册对应的中间件
  if (cors) {
    h3App.use(
      defineEventHandler((event) => {
        appendCorsHeaders(event, DEFAULT_CORS_CONFIG)
      })
    )
  }

  // 只有 headers 对象非空时才注册 header 中间件
  if (isObject(headers) && Object.keys(headers).length > 0) {
    h3App.use(
      defineEventHandler((event) => {
        appendHeaders(event, headers)
      })
    )
  }

  return h3App
}

export { defineApplication }
