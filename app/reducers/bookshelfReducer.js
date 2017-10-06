import uuid from 'uuid'

import * as types from '../constants/bookshelfConstans'

const initialBooksState = { books: [] }

const bookshelfReducer = (state = initialBooksState, action) => {
  switch (action.type) {
    case types.REGISTER_BOOK:
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
    case types.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => !(book.id == action.id))
      }
    default:
      return state
  }
}

export default bookshelfReducer
