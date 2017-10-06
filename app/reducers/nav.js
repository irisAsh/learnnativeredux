import { NavigationActions } from 'react-navigation'

import { AppNavigator } from '../navigators/AppNavigator'

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
    case 'Bookshelf':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Bookshelf'}),
        state
      )
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state;
}

export default nav
