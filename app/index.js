import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { configureStore } from './store'
import Bookshelf from './components/Bookshelf'

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Bookshelf />
      </Provider>
    )
  }
}
