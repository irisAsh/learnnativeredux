import uuid from 'uuid'
import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import {
  REGISTER_BOOK,
  DELETE_BOOK,
} from '../actions/index'
import { AppNavigator } from '../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('HomeScreen')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
const initialNavState = AppNavigator.router.getStateForAction(tempNavState)

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Back':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    case 'Bookshelf':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Bookshelf'}),
        state
      )
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state;
}

const initialBooksState = { books: [] }

const arrangeBooks = (state = initialBooksState, action) => {
  switch (action.type) {
    case REGISTER_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: uuid.v4(),
            name: action.name,
            author: action.author,
            genre: action.genre,
          },
        ]
      }
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => !(book.id == action.id))
      }
    default:
      return state
  }
}

const AppReducer = combineReducers({
  nav,
  arrangeBooks,
});

export default AppReducer;
