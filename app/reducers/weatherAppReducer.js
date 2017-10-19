import * as types from '../constants/weatherAppConstants'

const initialWeatherState = {
  isFetching: false,
  isError: false,
  info: {},
}

const weatherAppReducer = (state = initialWeatherState, action) => {
  console.log('at weatherAppReducer')
  console.log(action)
  switch (action.type) {
    case types.FETCH_DETAIL:
      return {
        ...state,
        isFetching: true,
      }
    case types.FETCH_DETAIL_FAILED:
      return {
        ...state,
        isFetching: false,
        isError: true,
      }
    case types.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        info: action.info,
      }
    default:
      return state
  }
}

export default weatherAppReducer
