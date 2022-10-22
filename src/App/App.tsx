import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './App.css'

import HLTVMatches from '@/App/components/HLTVMatches'
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
