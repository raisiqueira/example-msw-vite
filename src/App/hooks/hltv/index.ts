import { useQuery } from '@tanstack/react-query'

import { getMatches } from '@/App/services/hltv'

export const useHLTVMatches = () => {
  return useQuery(['matches'], getMatches, {
    retry: false,
  })
}
