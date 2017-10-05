import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles'

const ScreenList = ({ navigate, screenData }) => (
  <View>
    { screenData.map((elem, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigate(elem.screen)}
        >
          <View style={styles.container}>
            <Text style={styles.title}>{elem.screen}</Text>
            <Text style={styles.description}>{elem.description}</Text>
          </View>
        </TouchableOpacity>
      ))
    }
  </View>
)

ScreenList.propTypes = {
  navigate: PropTypes.func.isRequired,
  screenData: PropTypes.arrayOf(PropTypes.shape({
    screen: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
}

const mapDispatchToProps = dispatch => ({
  navigate: (screen) => dispatch({ type: screen }),
})

export default connect(null, mapDispatchToProps)(ScreenList)
