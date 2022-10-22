import '@testing-library/jest-dom'
import { afterAll, afterEach, beforeAll } from 'vitest'

import { server } from '@/mocks/server'
import { createCache } from '@/utils/test-utils'

const queryCache = createCache()

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  server.resetHandlers()
  queryCache.clear()
})

afterAll(() => {
  server.close()
})
