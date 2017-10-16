import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'

import styles from './styles'
import WeatherInDay from '../WeatherInDay'

const DailyWeather = () => (
  <View style={styles.container}>
    <WeatherInDay />
    <WeatherInDay />
    <WeatherInDay />
  </View>
)

export default DailyWeather
