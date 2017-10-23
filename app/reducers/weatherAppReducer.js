import * as types from '../constants/weatherAppConstants'

const initailPrimaryAreaState = {
  isFetching: false,
  isError: false,
  data: {},
}

export const primaryArea = (state = initailPrimaryAreaState, action) => {
  console.log('at primaryAreaReducer')
  console.log(action)
  switch (action.type) {
    case types.FETCH_PRIMARY_AREA:
      return {
        ...state,
        isFetching: true,
      }
    case types.FETCH_PRIMARY_AREA_FAILED:
      return {
        ...state,
        isFetching: false,
        isError: true,
      }
    case types.FETCH_PRIMARY_AREA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      }
    case types.FETCH_LOCALE_WEATHER_SUCCESS:
      let datus = {}
      datus[action.id] = {
        isFetching: true,
        info: action.info,
      }
      let rrrr = {
        ...state,
        data: Object.assign({}, state.data, datus)
      }
      console.log(rrrr)
      return rrrr
    default:
      return state
  }
}

const initialWeatherState = {
  isFetching: false,
  isError: false,
  info: {},
}

export const weatherApp = (state = initialWeatherState, action) => {
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
