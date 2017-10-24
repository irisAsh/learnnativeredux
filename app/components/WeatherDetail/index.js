import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  View,
} from 'react-native'

import styles from './styles'
import DailyWeather from '../DailyWeather'
import Header from '../Header'
import LocaleWeatherLinks from '../LocaleWeatherLinks'
import WeatherOverview from '../WeatherOverview'

const WeatherDetail = ({ navigation, data }) => {
  const id = navigation.state.params.id
  const info = data[id].info
  return (
    <View style={styles.container}>
      <Header
        text={info.title}
        containerColor='#4CA8FF'
        navigation={navigation}
      />
      <ScrollView>
        <DailyWeather
          forecasts={info.forecasts}
        />
        <WeatherOverview
          title={info.title}
          publicTime={info.publicTime}
          description={info.description.text}
          numberOfLines={0}
          onAccordion={false}
        />
        <LocaleWeatherLinks
          links={info.pinpointLocations}
        />
      </ScrollView>
    </View>
  )
}

WeatherDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

WeatherDetail.navigationOptions = {
  header: null,
}

export default WeatherDetail
