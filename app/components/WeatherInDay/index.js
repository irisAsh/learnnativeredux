import React from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  View,
} from 'react-native'

import styles from './styles'

const TemperatureBox = ({ label, number }) => (
  <View style={styles.temperatureContainer}>
    <Text style={styles.temperatureLabel}>{label}</Text>
    <Text style={styles.temperatureNumber}>{number}</Text>
    <Text style={styles.temperatureDegree}>℃</Text>
  </View>
)

TemperatureBox.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

const WeatherInDay = ({ dateLabel, date, telop, temperature, image }) => (
  <View style={styles.container}>
    <View style={styles.dateLabelContainer}>
      <Text style={styles.dateLabelText}>{dateLabel}</Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>{date}</Text>
    </View>
    <Image
      style={[
        styles.img,
        image.width && {width: image.width},
        image.height && {height: image.height},
      ]}
      source={{uri: image.url}}
    />
    <View style={styles.weatherContainer}>
      <Text style={styles.weatherText}>{telop}</Text>
    </View>
    <TemperatureBox
      label='最高気温'
      number={!!temperature.max ? temperature.max.celsius : '-'}
    />
    <TemperatureBox
      label='最低気温'
      number={!!temperature.min ? temperature.min.celsius : '-'}
    />
  </View>
)

WeatherInDay.propTypes = {
  dateLabel: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  telop: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.shape({ celsius: PropTypes.string }),
    min: PropTypes.shape({ celsius: PropTypes.string }),
  }).isRequired,
  image: PropTypes.shape({
    uri: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
}

export default WeatherInDay
