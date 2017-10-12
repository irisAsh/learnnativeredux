import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import HomeScreen from '../components/HomeScreen'
import AppRoutes from './AppRoutes'

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
