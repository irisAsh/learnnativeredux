import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native'

import styles from './styles'
import DailyWeather from '../DailyWeather'
import Header from '../Header'
import LocaleWeatherLinks from '../LocaleWeatherLinks'
import WeatherOverview from '../WeatherOverview'
import { connect } from 'react-redux'

class WeatherDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log(this.props)
    this.props.fetchWeatherDetail('400040')
  }

  render() {
    const { navigation, isFetching, isError, info } = this.props
    const renderMainScene = () => {
      if (isFetching) {
        return (
          <ScrollView>
            <Text>Loading</Text>
          </ScrollView>
        )
      } else if (isError) {
        return (
          <ScrollView>
            <Text>Error</Text>
          </ScrollView>
        )
      } else {
        if (!!info && Object.keys(info).length !== 0) {
          return (
            <ScrollView>
              <WeatherOverview
                title={info.title}
                publicTime={info.publicTime}
                description={info.description.text}
                onAccordion={true}
              />
              <DailyWeather
                forecasts={info.forecasts}
              />
              <LocaleWeatherLinks
                links={info.pinpointLocations}
              />
            </ScrollView>
          )
        } else {
          return (
            <ScrollView>
              <Text>No Data</Text>
            </ScrollView>
          )
        }
      }
    }
    return (
      <View style={styles.container}>
        <Header
          text={
            !!navigation.state.params.headerTitle
            ? navigation.state.params.headerTitle
            : '天気詳細'
          }
          navigation={navigation}
        />
        {renderMainScene()}
      </View>
    )
  }
}

WeatherDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WeatherDetail.navigationOptions = {
  header: null,
}

export default WeatherDetail
