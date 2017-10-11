import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'
import TextBox from '../TextBox'

const PostBox = ({
  postBookName,
  postAuthor,
  postGenre,
  changePostBookName,
  changePostAuthor,
  changePostGenre,
  registerBook,
}) => (
  <View style={styles.inputContainer}>
    <TextBox
      placeholder='Book Name'
      value={postBookName}
      onChange={event => changePostBookName(event.nativeEvent.text)}
    />
    <TextBox
      placeholder='Author'
      value={postAuthor}
      onChange={event => changePostAuthor(event.nativeEvent.text)}
    />
    <TextBox
      placeholder='Genre'
      value={postGenre}
      onChange={event => changePostGenre(event.nativeEvent.text)}
    />
    <TouchableOpacity
      onPress={() => registerBook(postBookName, postAuthor, postGenre)}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add</Text>
      </View>
    </TouchableOpacity>
  </View>
)

PostBox.propTypes = {
  postBookName: PropTypes.string.isRequired,
  postAuthor: PropTypes.string.isRequired,
  postGenre: PropTypes.string.isRequired,
  changePostBookName: PropTypes.func.isRequired,
  changePostAuthor: PropTypes.func.isRequired,
  changePostGenre: PropTypes.func.isRequired,
  registerBook: PropTypes.func.isRequired,
}

export default PostBox
