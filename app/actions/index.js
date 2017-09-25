/*
 * Action type
 */
export const REGISTER_BOOK = 'REGISTER_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'

/*
 * Action creater
 */
export const registerBook = (book) => {
  return {
    type: REGISTER_BOOK,
    book,
  }
}
export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    id,
  }
}
