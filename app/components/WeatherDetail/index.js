import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  View,
} from 'react-native'

import Header from '../Header'
import styles from './styles'
import { connect } from 'react-redux'

const WeatherDetail = ({ navigation }) =>
{
  console.log(navigation)
return(
  <View style={styles.container}>
    <Header
      text={
        !!navigation.state.params.headerTitle
        ? navigation.state.params.headerTitle
        : '天気詳細'
      }
      navigation={navigation}
    />
  </View>
)
}

WeatherDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WeatherDetail.navigationOptions = {
  header: null,
}

export default connect()(WeatherDetail)
