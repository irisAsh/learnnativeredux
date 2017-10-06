import { combineReducers } from 'redux'

import nav from './navigationReducer'
import bookshelf from './bookshelfReducer'

const AppReducer = combineReducers({
  nav,
  bookshelf,
});

export default AppReducer;
