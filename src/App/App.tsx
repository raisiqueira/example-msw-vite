import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import HLTVMatches from '@/App/components/HLTVMatches'

import './App.css'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <HLTVMatches />
      </div>
    </QueryClientProvider>
  )
}

export default App
