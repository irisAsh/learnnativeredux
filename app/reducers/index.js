import { combineReducers } from 'redux'

import nav from './navigationReducer'
import realm from './realmReducer'
import bookshelf from './bookshelfReducer'
import { primaryArea } from './weatherAppReducer'

const AppReducer = combineReducers({
  nav,
  realm,
  bookshelf,
  primaryArea,
});

export default AppReducer;
