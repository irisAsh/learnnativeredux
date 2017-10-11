import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import HomeScreen from '../components/HomeScreen'
import Bookshelf from '../components/Bookshelf'
import WeatherApp from '../components/WeatherApp'

export const AppRoutes = {
  WeatherApp: {
    screen: WeatherApp,
    title: 'WeatherApp',
    description: 'お天気検索アプリサンプル',
  },
  Bookshelf: {
    screen: Bookshelf,
    title: '本棚',
    description: '本を登録してリストに表示するサンプル',
  },
}

export const AppNavigator = StackNavigator(
  {
    ...AppRoutes,
    HomeScreen: {
      screen: HomeScreen
    },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
)

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
