import { renderWithQueryClient } from '@/utils/test-utils'
import { describe, it } from 'vitest'
import HLTVMatches from './'
import { server } from '@/mocks/server'
import { rest } from 'msw'

describe('HLTVMatches', () => {
  it('should render matches', async () => {
    const result = renderWithQueryClient(<HLTVMatches />)
    const team01 = await result.findByText(/00NATION/i)
    expect(team01).toBeInTheDocument()
  })
  it('should render loading state', async () => {
    const result = renderWithQueryClient(<HLTVMatches />)
    const loading = await result.findByText(/Loading/i)
    expect(loading).toBeInTheDocument()
  })
  it('should render error state', async () => {
    server.use(
      rest.get('https://csgo.raisiqueira.io/api/hltv/matches', (_, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    const result = renderWithQueryClient(<HLTVMatches />)
    const error = await result.findByText(/Error/i)
    expect(error).toBeInTheDocument()
  })
})
