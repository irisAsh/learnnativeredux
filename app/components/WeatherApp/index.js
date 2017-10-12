import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  View,
} from 'react-native'

import Header from '../Header'
import { connect } from 'react-redux'

const WeatherApp = ({ navigation }) => (
  <View>
    <Header
      text='天気検索'
      navigation={navigation}
    />
  </View>
)

WeatherApp.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WeatherApp.navigationOptions = {
  header: null,
}

export default connect()(WeatherApp)
