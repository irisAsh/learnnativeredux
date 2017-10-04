import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  StatusBar,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import BookItems from '../BookItems'
import PostBox from '../PostBox'
import styles from './styles'

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

export default connect()(Bookshelf)
