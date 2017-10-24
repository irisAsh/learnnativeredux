import { combineReducers } from 'redux'

import nav from './navigationReducer'
import bookshelf from './bookshelfReducer'
import { primaryArea } from './weatherAppReducer'

const AppReducer = combineReducers({
  nav,
  bookshelf,
  primaryArea,
});

export default AppReducer;
