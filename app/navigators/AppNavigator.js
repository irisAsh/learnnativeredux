import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import HomeScreen from '../components/HomeScreen'
import Bookshelf from '../components/Bookshelf'
import WeatherApp from '../components/WeatherApp'

export const AppNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  Bookshelf: { screen: Bookshelf },
  WeatherApp: { screen: WeatherApp },
})

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav})} />
)

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
