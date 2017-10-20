import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'

import styles from './styles'
import WeatherInDay from '../WeatherInDay'

const DailyWeather = ({ forecasts }) => (
  <View style={styles.container}>
    { forecasts.map((forecast, index) => (
      <WeatherInDay
        {...forecast}
        key={index}
        sideBorderOn={index % 2 === 0}
      />
    ))}
  </View>
)

export default DailyWeather
