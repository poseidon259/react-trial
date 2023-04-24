import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/provider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { router } from './routes'
import { themeOverride } from './libs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'react-credit-cards/es/styles-compiled.css';

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
          <ToastContainer />
          <RouterProvider router={router} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
