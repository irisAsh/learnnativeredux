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
    { Object.keys(locations).map(id => {
      let info = locations[id].info
      return (
        <WeatherOverview
          key={id}
          onPress={() => navigate('WeatherDetail', {
            headerTitle: info.title,
          })}
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
}
const mapDispatchToProps = dispatch => ({
  navigate: (screen, params) => dispatch({ type: screen, params }),
})

export default connect(null, mapDispatchToProps)(LocationList)
