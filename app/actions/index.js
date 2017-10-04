/*
 * Action type
 */
export const REGISTER_BOOK = 'REGISTER_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'

/*
 * Action creater
 */
export const registerBook = (name, author, genre) => ({
    type: REGISTER_BOOK,
    name,
    author,
    genre,
})
export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
})
