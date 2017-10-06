import * as types from '../constants/bookshelfConstans'

/*
 * Action creater
 */
export const registerBook = (name, author, genre) => ({
    type: types.REGISTER_BOOK,
    name,
    author,
    genre,
})
export const deleteBook = (id) => ({
  type: types.DELETE_BOOK,
  id,
})
