import { combineReducers } from 'redux'

import nav from './navigationReducer'
import bookshelf from './bookshelfReducer'
import weatherApp from './weatherAppReducer'

const AppReducer = combineReducers({
  nav,
  bookshelf,
  weatherApp,
});

export default AppReducer;
