import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'
import { dateToStrJpn } from '../../lib/formatTime'
import { connect } from 'react-redux'

const LocationList = ({ navigate, locations }) => (
  <ScrollView>
    { Object.keys(locations).map(id =>{
      console.log(locations[id].publicTime)
      console.log(new Date(locations[id].publicTime))
      console.log(dateToStrJpn(new Date(locations[id].publicTime)))
      return (
        <TouchableOpacity
          key={id}
          onPress={() => navigate('WeatherDetail', {
            headerTitle: locations[id].title,
          })}
        >
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{locations[id].title}</Text>
            <Text style={styles.date}>
              {dateToStrJpn(new Date(locations[id].publicTime))}
            </Text>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode='tail'
            >
              {locations[id].description.text}
            </Text>
          </View>
        </TouchableOpacity>
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
