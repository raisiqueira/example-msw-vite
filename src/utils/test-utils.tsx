import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

type WrapperProps = { children: React.ReactNode }

export const createCache = () => new QueryCache()

export const createTestClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
    },
    logger: {
      // eslint-disable-next-line no-console
      log: console.log,
      // eslint-disable-next-line no-console
      warn: console.warn,
      // eslint-disable-next-line @typescript-eslint/no-empty-function, no-console
      error: import.meta.env.MODE === 'development' ? () => {} : console.error,
    },
  })

export const createQueryHookWrapper = () => {
  const queryClient = createTestClient()

  const wrapper = ({ children }: WrapperProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  return wrapper
}

export const renderWithQueryClient = (component: React.ReactElement) => {
  const queryClient = createTestClient()
  const { rerender, ...rest } = render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>,
  )
  return {
    ...rest,
    rerender: (comp: React.ReactElement) =>
      rerender(<QueryClientProvider client={queryClient}>{comp}</QueryClientProvider>),
  }
}
