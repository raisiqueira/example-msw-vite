import { rest } from 'msw'
import { isTest } from '@/utils/env-utils'

export const handlers = [
  rest.get('https://csgo.raisiqueira.io/api/hltv/matches', (_, res, ctx) => {
    return res(
      // ! Trick to disable the delay when running tests
      ctx.delay(isTest ? 0 : 1000),
      ctx.status(200),
      ctx.json([
        {
          id: 2359390,
          stars: 1,
          team1: {
            name: '00NATION',
            id: 11309,
          },
          team2: {
            name: 'VERTEX',
            id: 10672,
          },
          format: 'bo3',
          event: {
            id: 6824,
            name: 'BLAST Premier Fall Showdown 2022 North America',
          },
          live: true,
        },
        {
          id: 2359775,
          stars: 0,
          team1: {
            name: 'Liberty',
            id: 10815,
          },
          team2: {
            name: 'Stars Horizon',
            id: 11412,
          },
          format: 'bo3',
          event: {
            id: 6851,
            name: 'CBCS Elite League 2022 Season 2',
          },
          live: true,
        },
        {
          id: 2359766,
          stars: 0,
          team1: {
            name: 'Daotsu',
            id: 11709,
          },
          team2: {
            name: 'The Union',
            id: 11306,
          },
          format: 'bo1',
          event: {
            id: 6851,
            name: 'CBCS Elite League 2022 Season 2',
          },
          live: true,
        },
        {
          id: 2359762,
          date: 1666396800000,
          stars: 0,
          team1: {
            name: 'Meta BR',
            id: 11249,
          },
          team2: {
            name: 'ARCTIC',
            id: 11561,
          },
          format: 'bo1',
          event: {
            id: 6851,
            name: 'CBCS Elite League 2022 Season 2',
          },
          live: false,
        },
        {
          id: 2359773,
          date: 1666396800000,
          stars: 0,
          team1: {
            name: 'ATK',
            id: 9943,
          },
          team2: {
            name: 'TeamOne',
            id: 6947,
          },
          format: 'bo3',
          event: {
            id: 6667,
            name: 'ESL Challenger League Season 42 North America',
          },
          live: false,
        },
      ]),
    )
  }),
]
