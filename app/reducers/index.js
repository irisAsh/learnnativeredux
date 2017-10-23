import { combineReducers } from 'redux'

import nav from './navigationReducer'
import bookshelf from './bookshelfReducer'
import { primaryArea, weatherApp } from './weatherAppReducer'

const AppReducer = combineReducers({
  nav,
  bookshelf,
  primaryArea,
  weatherApp,
});

export default AppReducer;
