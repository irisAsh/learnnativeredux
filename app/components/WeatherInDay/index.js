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

const WeatherInDay = ({
  dateLabel,
  date,
  telop,
  temperature,
  imageWidth,
  imageHeight,
  imageUrl,
  sideBorderOn
}) => (
  <View style={[
    styles.container,
    sideBorderOn && styles.sideBorderOn,
  ]}>
    <View style={styles.dateLabelContainer}>
      <Text style={styles.dateLabelText}>{dateLabel}</Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>{date}</Text>
    </View>
    <Image
      style={[
        styles.img,
        imageWidth && {width: imageWidth},
        imageHeight && {height: imageHeight},
      ]}
      source={{uri: imageUrl}}
    />
    <View style={styles.weatherContainer}>
      <Text style={styles.weatherText}>{telop}</Text>
    </View>
    <TemperatureBox
      label='最高気温'
      number={!!temperature.maxCelsius ? temperature.maxCelsius : '-'}
    />
    <TemperatureBox
      label='最低気温'
      number={!!temperature.minCelsius ? temperature.minCelsius : '-'}
    />
  </View>
)

WeatherInDay.propTypes = {
  dateLabel: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  telop: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    maxCelsius: PropTypes.string,
    minCelsius: PropTypes.string,
  }).isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  sideBorderOn: PropTypes.bool,
}

WeatherInDay.defaultProps = {
  sideBorderOn: true,
}

export default WeatherInDay
