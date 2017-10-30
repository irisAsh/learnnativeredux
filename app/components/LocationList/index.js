import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
} from 'react-native'

import styles from './styles'
import WeatherOverview from '../WeatherOverview'

const LocationList = ({ navigate, weathers }) => (
  <ScrollView>
    { weathers.map(weather => {
      return (
        <WeatherOverview
          key={weather.cityId}
          onPress={() => navigate('WeatherDetail', { id: weather.cityId })}
          title={weather.title}
          publicTime={weather.publicTime}
          description={weather.description}
        />
      )})
    }
  </ScrollView>
)

LocationList.propTypes = {
  navigate: PropTypes.func.isRequired,
  weathers: PropTypes.object.isRequired,
}

export default LocationList
