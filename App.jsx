/* global __DEV__ */

import React from 'react'

import Index from './app/index'

if (__DEV__) {
  console.disableYellowBox = true
}

const App = () => <Index />

export default App
