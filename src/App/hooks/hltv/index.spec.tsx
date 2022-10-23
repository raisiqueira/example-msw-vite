import { renderHook, waitFor } from '@testing-library/react'
import { createQueryHookWrapper } from '@/utils/test-utils'
import { useHLTVMatches } from '.'

describe('useHLTVMatches', () => {
  it('should return matches', async () => {
    const { result } = renderHook(() => useHLTVMatches(), {
      wrapper: createQueryHookWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    const matches = result.current.data

    expect(matches).toHaveLength(5)
    expect(matches?.filter((m) => m.live)).toHaveLength(3)
  })
})
