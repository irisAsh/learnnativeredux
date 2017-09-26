import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'
import { deleteBook } from '../../actions'

class Book extends Component {
  render() {
    console.log(this.props)
    return (
      <TouchableOpacity
        onPress={this.deleteBook}
      >
        <View style={styles.bookContainer}>
          <Text style={styles.bookName}>
            {this.props.name}
          </Text>
          <Text style={styles.bookAuthor}>
            {this.props.author}
          </Text>
          <Text style={styles.bookGenre}>
            {this.props.genre}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  deleteBook = () => {
    this.props.dispatch(deleteBook(this.props.id))
  }
}

// Providerからdispatchのみを取得
export default const BookItem = connect()(Book)

Book.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}
