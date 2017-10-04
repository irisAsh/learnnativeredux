import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppWithNavigationState from './navigators/AppNavigator'
import AppReducer from './reducers'

const App = () => (
  <Provider store={createStore(AppReducer)}>
    <AppWithNavigationState />
  </Provider>
)

export default App
