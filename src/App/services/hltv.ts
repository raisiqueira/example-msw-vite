import axios from 'axios'

import { HLTVMatch } from '@/App/types'

export const getMatches = async () => {
  const response = await axios.get<HLTVMatch[]>('https://csgo.raisiqueira.io/api/hltv/matches')
  return response?.data
}
