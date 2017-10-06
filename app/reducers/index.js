import { combineReducers } from 'redux'

import nav from './nav'
import bookshelfReducer from './bookshelfReducer'

const AppReducer = combineReducers({
  nav,
  bookshelfReducer,
});

export default AppReducer;
