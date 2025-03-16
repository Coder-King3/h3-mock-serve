import type { RouteConfig } from '../types'

import { readBody, setResponseStatus } from 'h3'

import {
  clearRefreshTokenCookie,
  setRefreshTokenCookie
} from '../utils/cookie-utils'
import { generateAccessToken, generateRefreshToken } from '../utils/jwt-util'
import { MOCK_USERS } from '../utils/mock-data'
import {
  forbiddenResponse,
  useResponseError,
  useResponseSuccess
} from '../utils/response'

const routes: RouteConfig[] = [
  {
    handler: async (event) => {
      const { password, username } = await readBody(event)
      if (!password || !username) {
        setResponseStatus(event, 400)
        return useResponseError(
          'BadRequestException',
          'Username and password are required'
        )
      }

      const findUser = MOCK_USERS.find(
        (item) => item.username === username && item.password === password
      )

      if (!findUser) {
        clearRefreshTokenCookie(event)
        return forbiddenResponse(event, 'Username or password is incorrect.')
      }

      const accessToken = generateAccessToken(findUser)
      const refreshToken = generateRefreshToken(findUser)

      setRefreshTokenCookie(event, refreshToken)

      const { password: _pwd, ...userinfo } = findUser
      return useResponseSuccess({
        ...userinfo,
        accessToken
      })
    },
    method: 'post',
    url: '/login'
  },
  {
    handler: (event) => {
      // Implement logout logic here
    },
    method: 'get',
    url: '/logout'
  }
]

export { routes as auth }
