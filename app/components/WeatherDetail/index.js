import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  View,
} from 'react-native'

import styles from './styles'
import DailyWeather from '../DailyWeather'
import Header from '../Header'
import LocaleWeatherLinks from '../LocaleWeatherLinks'
import WeatherOverview from '../WeatherOverview'

const WeatherDetail = ({ navigation, realm }) => {
  const id = navigation.state.params.id
  const weather = realm.objects('Weather').filtered(`cityId = "${id}"`)[0]

  const renderScene = () => {
    if (!!weather) {
      return (
        <ScrollView>
          <DailyWeather
            forecasts={weather.forecasts}
          />
          <WeatherOverview
            title={weather.title}
            publicTime={weather.publicTime}
            description={weather.description}
            numberOfLines={0}
            onAccordion={false}
          />
          <LocaleWeatherLinks
            links={weather.pinpointLocations}
          />
        </ScrollView>
      )
    } else {
      return (
        <Text>No Data</Text>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header
        text={!!weather ? weather.title : '天気詳細'}
        containerColor='#4CA8FF'
        navigation={navigation}
      />
      { renderScene() }
    </View>
  )
}

WeatherDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
  realm: PropTypes.object.isRequired,
}

WeatherDetail.navigationOptions = {
  header: null,
}

export default WeatherDetail
