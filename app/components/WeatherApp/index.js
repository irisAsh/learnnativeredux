import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'

import Header from '../Header'
import LocationList from '../LocationList'
import styles from './styles'
import * as CONSTANTS from '../../constants/weatherAppConstants'

class WeatherApp extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let { updateDate, fetchPrimaryArea } = this.props
    console.log(updateDate)
    if (Date.now() - Date.parse(updateDate) > CONSTANTS.FETCH_INTERVAL) {
      fetchPrimaryArea()
    }
  }

  render() {
    const { navigation, data } = this.props
    console.log(data)
    const renderList = () => {
      if (Object.keys(data).length > 0) {
        return (
          <LocationList
            locations={data}
          />
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
          text='天気検索'
          containerColor='#4CA8FF'
          navigation={navigation}
        />
        { renderList() }
      </View>
    )
  }
}

WeatherApp.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WeatherApp.navigationOptions = {
  header: null,
}

export default WeatherApp
