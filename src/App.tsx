import { RouterProvider} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/provider'

import { QueryClient, QueryClientProvider } from 'react-query'
import { router } from './routes'
import { themeOverride } from './libs'
import { ToastProvider } from '@chakra-ui/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  console.log('app started')
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={themeOverride}>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </ChakraProvider>
      </QueryClientProvider>
      
    </>
  )
}

export default App
