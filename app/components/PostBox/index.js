import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'
import { registerBook } from '../../actions'

class PostBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author: '',
      genre: '',
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        {this.renderTextInput('name', 'Book Name')}
        {this.renderTextInput('author', 'Author')}
        {this.renderTextInput('genre', 'Genre')}

        <TouchableOpacity
          onPress={() => this.registerBook()}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderTextInput = (key, placeholder = '') => {
    return (
      <TextInput
        onChange={(event) => {
          this.setState({
            [key]: event.nativeEvent.text,
          })
        }}
        placeholder={placeholder}
        returnKeyType='done'
        style={styles.input}
        value={this.state[key]}
      />
    )
  }

  registerBook = () => {
    const { name, author, genre, } = this.state
    if (name && name != '') {
      this.setState({
        name: '',
        author: '',
        genre: '',
      })
      this.props.dispatch(registerBook(name, author, genre))
    }
  }
}

// Providerからdispatchのみを取得
export default connect()(PostBox)
