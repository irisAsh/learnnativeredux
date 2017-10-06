import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  View,
} from 'react-native'
import { connect } from 'react-redux'

const WeatherApp = ({ navigation }) => (
  <View>
    <Button
      title='Home'
      onPress={() => navigation.dispatch({ type: 'Back' })}
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
