import type { RouteConfig } from '../types'

const routes: RouteConfig[] = [
  {
    handler: (event) => {
      return { message: 'user home' }
    },
    method: 'get',
    url: '/'
  }
]

export { routes as user }
