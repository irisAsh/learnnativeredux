import { NavigationActions } from 'react-navigation'

import { AppNavigator } from '../navigators/AppNavigator'
import AppRoutes from '../navigators/AppRoutes'

const firstAction = AppNavigator.router.getActionForPathAndParams('HomeScreen')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
const initialNavState = AppNavigator.router.getStateForAction(tempNavState)

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Back':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    default:
      console.log('999999999999')
      console.log(action)
      if (!!AppRoutes[action.type]) {
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({
            routeName: action.type,
            params: !!action.params ? action.params : {},
          }),
          state
        )
      } else {
        nextState = AppNavigator.router.getStateForAction(action, state)
      }
      break
  }

  return nextState || state;
}

export default nav
