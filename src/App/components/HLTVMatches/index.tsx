import clsx from 'clsx'
import { useHLTVMatches } from '@/App/hooks/hltv'

const HLTVMatches = () => {
  const { data, isLoading, isError } = useHLTVMatches()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error!</div>
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {data?.map((match) => (
        <div
          key={match.id}
          className={clsx(
            'overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 border-2',
            {
              'border-gray-200': !match.live,
              'border-red-500': match.live,
            },
          )}
        >
          <div className="p-6">
            <p className="text-gray-800 font-bold">{match.team1.name}</p>
            <p>vs</p>
            <p className="text-gray-800 font-bold">{match.team2.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HLTVMatches
