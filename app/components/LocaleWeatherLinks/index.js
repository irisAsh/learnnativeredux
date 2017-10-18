import React from 'react'
import PropTypes from 'prop-types'
import {
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'
import WeatherOverview from '../WeatherOverview'

const LocaleWeatherLinks = ({ links }) => (
  <View style={styles.container}>
    <Text style={styles.title}>livedoor天気情報で周辺の天気を見る</Text>
    { links.map(({link, name}) => (
      <View
        key={link}
        style={styles.linkContainer}
      >
        <Text style={styles.city}>{name}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(link)}
        >
          <Text style={styles.link}>{link}</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
)

export default LocaleWeatherLinks
