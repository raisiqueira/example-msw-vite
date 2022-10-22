import { renderWithQueryClient } from '@/utils/test-utils'
import { describe, it } from 'vitest'
import HLTVMatches from './'

describe('HLTVMatches', () => {
  it('should render matches', async () => {
    const result = renderWithQueryClient(<HLTVMatches />)
    const team01 = await result.findByText(/00NATION/i)
    expect(team01).toBeInTheDocument()
  })
  it.todo('should render loading state')
  it.todo('should render error state')
})
