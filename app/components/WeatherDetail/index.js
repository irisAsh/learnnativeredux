import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  View,
} from 'react-native'

import Header from '../Header'
import styles from './styles'
import { connect } from 'react-redux'

const WeatherDetail = ({ navigation }) => (
  <View style={styles.container}>
    <Header
      text='天気検索'
      navigation={navigation}
    />
  </View>
)

WeatherDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WeatherDetail.navigationOptions = {
  header: null,
}

export default connect()(WeatherDetail)
