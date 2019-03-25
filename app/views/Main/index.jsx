import React from 'react'

import TabNavigator from '../../Routes/index'
import * as styles from './styles'

const Main = () => {
  const { MainView } = styles
  return (
    <MainView>
      <TabNavigator />
    </MainView>
  )
}

export default Main
