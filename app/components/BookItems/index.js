import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

const BookItems = ({ books, deleteBook }) => (
  <ScrollView
    automaticallyAdjustContentInsets={false}
  >
    { books.map(book => (
        <TouchableOpacity
          key={book.id}
          onPress={() => deleteBook(book.id)}
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
  deleteBook: PropTypes.func.isRequired,
}

export default BookItems
