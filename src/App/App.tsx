import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './App.css'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App"></div>
    </QueryClientProvider>
  )
}

export default App
