import { useHLTVMatches } from '@/App/hooks/hltv'

const HLTVMatches = () => {
  const { data, isLoading, isError } = useHLTVMatches()
  if (isError) {
    return <h1>Error to get matches</h1>
  }

  if (isLoading) {
    return <h1>loading...</h1>
  }

  return (
    <>
      {data.map((m) => (
        <div key={m.id}>
          <p>{m.team1.name}</p>
        </div>
      ))}
    </>
  )
}

export default HLTVMatches
