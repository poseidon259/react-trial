import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Box } from '@chakra-ui/react'
import { usePromiseTracker } from 'react-promise-tracker'

import { ScrollToTop } from '~/hoc'
import { SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_WIDTH } from '~/configs'
import { LoadingOverlay } from '~/components'

export const DefaultLayout = () => {
  const { promiseInProgress } = usePromiseTracker()
  const [isCollapsed, setIsCollapsed] = useState(false)
  console.log('default layout')
  
  return (
    <ScrollToTop>
      <Box>
        <Box
          w={isCollapsed ? `calc(100% - ${SIDEBAR_COLLAPSED_WIDTH})` : `calc(100% - ${SIDEBAR_WIDTH})`}
          minH='100vh'
          pos='relative'
          float='right'
          p={4}
          paddingTop='100px'
          bgColor='grey.100'
          transition='.3s ease-in-out'
        >
          {promiseInProgress && (
            <LoadingOverlay />
          )}
          <Outlet />
        </Box>
      </Box>
    </ScrollToTop>
  )
}
