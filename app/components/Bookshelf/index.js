import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  StatusBar,
  Text,
  View,
} from 'react-native'

import styles from './styles'
import BookItems from '../../containers/BookItemsContainer'
import PostBox from '../PostBox'

const Bookshelf = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle='light-content' />
    <View style={styles.topBar}>
      <Text style={styles.title}>
        Bookshelf
      </Text>
    </View>
    <PostBox />
    <BookItems />
    <Button
      onPress={() => navigation.dispatch({ type: 'Back' })}
      title='Home'
    />
  </View>
)

Bookshelf.propTypes = {
  navigation: PropTypes.object.isRequired,
}

Bookshelf.navigationOptions = {
  header: null,
}

export default Bookshelf
