export type Team = {
  name: string
  id: number
}

export type Event = {
  id: number
  name: string
}

export type HLTVMatch = {
  id: number
  stars: number
  team1: Team
  team2: Team
  format: string
  event: Event
  live: boolean
  date?: number
  title: string
}
