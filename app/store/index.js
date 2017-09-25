import { createStore, compose } from 'redux'
import reducer from '../reducers'

const defaultState = {
  books: [],
}

export const configureStore = (initailState=defaultState) => {
  const store = createStore(reducer, initailState)
  return store
}
