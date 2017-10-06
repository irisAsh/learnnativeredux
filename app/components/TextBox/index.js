import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

import styles from './styles'

const TextBox = ({ placeholder, value, onChange })  => (
  <TextInput
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    style={styles.input}
    returnKeyType='done'
  />
)

TextBox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

TextBox.defaultProps = {
  placeholder: '',
  value: '',
  onChange: null,
}

export default TextBox
