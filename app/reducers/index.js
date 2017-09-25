import uuid from 'uuid'

import {
  REGISTER_BOOK,
  DELETE_BOOK,
} from '../actions/index'

const arrangeBooks = (state, action) => {
  switch (action.type) {
    case REGISTER_BOOK:
      var books = [
        ...state.books,
        {
          id: uuid.v4(),
          book: action.book,
        }
      ]
      return { books }

    case DELETE_BOOK:
      var books = state.books.filter((book) => {
        return !(book.id == action.id)
      })
      return { books }

    default:
      return state
  }
}

export default arrangeBooks
