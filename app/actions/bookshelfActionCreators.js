import * as types from '../constants/bookshelfConstans'

/*
 * Action creater
 */
export const registerBook = (name, author, genre) => {
  if (name && name != '') {
    return { type: types.REGISTER_BOOK, name, author, genre }
  } else {
    return { type: '' }
  }
}
export const deleteBook = id => ({ type: types.DELETE_BOOK, id })
export const changePostBookName = value => ({ type: types.CHANGE_POST_BOOKNAME, value })
export const changePostAuthor = value => ({ type: types.CHANGE_POST_AUTHOR, value })
export const changePostGenre = value => ({ type: types.CHANGE_POST_GENRE, value })
