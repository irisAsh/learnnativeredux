import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import styles from './styles'

const ScreenList = ({ navigate, routes }) => (
  <View>
    { Object.keys(routes).map(routeName => (
        <TouchableOpacity
          key={routeName}
          onPress={() => navigate(routeName)}
        >
          <View style={styles.container}>
            <Text style={styles.title}>{routes[routeName].title}</Text>
            <Text style={styles.description}>{routes[routeName].description}</Text>
          </View>
        </TouchableOpacity>
      ))
    }
  </View>
)

ScreenList.propTypes = {
  navigate: PropTypes.func.isRequired,
  routes: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
}

export default ScreenList
