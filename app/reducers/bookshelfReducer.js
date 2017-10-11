import uuid from 'uuid'

import * as types from '../constants/bookshelfConstans'

const initialBooksState = {
  books: [],
  postBookName: '',
  postAuthor: '',
  postGenre: '',
}

const bookshelfReducer = (state = initialBooksState, action) => {
  switch (action.type) {
    case types.REGISTER_BOOK:
    console.log(state)
    console.log(action)
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
        ],
        postBookName: '',
        postAuthor: '',
        postGenre: '',
      }
    case types.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => !(book.id == action.id))
      }
    case types.CHANGE_POST_BOOKNAME:
      return {
        ...state,
        postBookName: action.value,
      }
    case types.CHANGE_POST_AUTHOR:
      return {
        ...state,
        postAuthor: action.value,
      }
    case types.CHANGE_POST_GENRE:
      return {
        ...state,
        postGenre: action.value,
      }
    default:
      return state
  }
}

export default bookshelfReducer
