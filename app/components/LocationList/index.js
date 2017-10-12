import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'
import { connect } from 'react-redux'

const LocationList = ({ navigate, locations }) => (
  <ScrollView>
    { Object.keys(locations).map(id => (
        <TouchableOpacity
          key={id}
          onPress={() => navigate('WeatherDetail')}
        >
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{locations[id].title}</Text>
            <Text style={styles.description}>{locations[id].description.text}</Text>
          </View>
        </TouchableOpacity>
      ))
    }
  </ScrollView>
)

LocationList.propTypes = {
  navigate: PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => ({
  navigate: (screen) => dispatch({ type: screen }),
})

export default connect(null, mapDispatchToProps)(LocationList)
