import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'

import styles from './styles'

const WeatherInDay = () => (
  <View style={{flex: 1}}>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>10/10(土)</Text>
    </View>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>晴れ</Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Text style={{fontSize: 16}}>最高気温</Text>
      <Text style={{fontSize: 16}}>24</Text>
      <Text style={{fontSize: 16}}>℃</Text>
    </View>
  </View>
)

export default WeatherInDay
