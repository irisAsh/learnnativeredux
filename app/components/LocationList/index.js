import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
} from 'react-native'

import styles from './styles'
import WeatherOverview from '../WeatherOverview'

const LocationList = ({ navigate, locations }) => (
  <ScrollView>
    { Object.keys(locations).map(id => {
      let info = locations[id].info
      return (
        <WeatherOverview
          key={id}
          onPress={() => navigate('WeatherDetail', { id })}
          title={info.title}
          publicTime={info.publicTime}
          description={info.description.text}
        />
      )})
    }
  </ScrollView>
)

LocationList.propTypes = {
  navigate: PropTypes.func.isRequired,
  locations: PropTypes.object.isRequired,
}

export default LocationList
