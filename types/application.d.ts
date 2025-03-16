import { AppOptions } from 'h3'

import { RouteConfig } from './router'

interface applicationConfig {
  /** cors */
  cors?: boolean
  /** h3 AppOptions */
  h3Options?: AppOptions
  /** router headers */
  headers?: Record<string, string>
  /** global prefix */
  prefix?: string
  /** router routes */
  routes: RouteConfig[]
}

export type { applicationConfig }
