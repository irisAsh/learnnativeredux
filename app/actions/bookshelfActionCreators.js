import * as types from '../constants/bookshelfConstans'

/*
 * Action creater
 */
export const registerBook = () => ({
    type: types.REGISTER_BOOK,
})
export const deleteBook = id => ({
  type: types.DELETE_BOOK,
  id,
})
export const changePostBookName = value => ({
  type: types.CHANGE_POST_BOOKNAME,
  value,
})
export const changePostAuthor = value => ({
  type: types.CHANGE_POST_AUTHOR,
  value,
})
export const changePostGenre = value => ({
  type: types.CHANGE_POST_GENRE,
  value,
})
