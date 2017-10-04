import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'
import { deleteBook } from '../../actions'

const BookItems = ({ books, deleteItem }) => (
  <ScrollView
    automaticallyAdjustContentInsets={false}
  >
    { books.map(book => (
        <TouchableOpacity
          key={book.id}
          onPress={() => deleteItem(book.id)}
        >
          <View style={styles.bookContainer}>
            <Text style={styles.bookName}>
              {book.name}
            </Text>
            <View style={styles.subtitle}>
              <Text style={styles.bookAuthor}>
                {book.author}
              </Text>
              <Text style={styles.bookGenre}>
                {book.genre}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))
    }
  </ScrollView>
)

BookItems.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
  })).isRequired,
}

const mapStateToProps = (state) => ({
  books: state.arrangeBooks.books,
})

const mapDispatchToProps = dispatch => ({
  deleteItem: (id) => dispatch(deleteBook(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookItems)
