import * as types from '../constants/weatherAppConstants'

const initailPrimaryAreaState = {
  isFetching: false,
  isError: false,
  data: {},
  updateDate: new Date(0),
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
        updateDate: new Date(),
      }
    case types.FETCH_LOCALE_WEATHER_SUCCESS:
      let datus = {}
      datus[action.id] = {
        isFetching: true,
        info: action.info,
      }
      return {
        ...state,
        data: Object.assign({}, state.data, datus)
      }
    default:
      return state
  }
}
