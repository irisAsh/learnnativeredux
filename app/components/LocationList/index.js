import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'
import WeatherOverview from '../WeatherOverview'
import { dateToStrJpn } from '../../lib/formatTime'
import { connect } from 'react-redux'

const LocationList = ({ navigate, locations }) => (
  <ScrollView>
    { Object.keys(locations).map(id => (
        <WeatherOverview
          key={id}
          onPress={() => navigate('WeatherDetail', {
            headerTitle: locations[id].title,
          })}
          title={locations[id].title}
          publicTime={locations[id].publicTime}
          description={locations[id].description.text}
        />
      ))
    }
  </ScrollView>
)

LocationList.propTypes = {
  navigate: PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => ({
  navigate: (screen, params) => dispatch({ type: screen, params }),
})

export default connect(null, mapDispatchToProps)(LocationList)
