import type { RouteConfig } from '../types'

import { setResponseStatus } from 'h3'

const routes: RouteConfig[] = [
  {
    handler: (event) => {
      setResponseStatus(event, 404, 'Not Found')
      return 'Not Found'
    },
    method: 'get',
    url: '/'
  }
]

export { routes as menu }
