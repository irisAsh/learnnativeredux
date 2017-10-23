import * as types from '../constants/weatherAppConstants'

/*
 * Action creater
 */
export const fetchPrimaryArea = () => ({ type: types.FETCH_PRIMARY_AREA })
export const fetchPrimaryAreaSuccess = () => ({ type: types.FETCH_PRIMARY_AREA_SUCCESS })
export const fetchPrimaryAreaFailed = error => ({ type: types.FETCH_PRIMARY_AREA_FAILED, error })

export const fetchLocaleWeather = () => ({ type: types.FETCH_LOCALE_WEATHER })
export const fetchLocaleWeatherSuccess = (id, info) => ({ type: types.FETCH_LOCALE_WEATHER_SUCCESS, id, info })
export const fetchLocaleWeatherFailed = error => ({ type: types.FETCH_LOCALE_WEATHER_FAILED, error })

export const fetchDetail = () => ({ type: types.FETCH_DETAIL })
export const fetchDetailSuccess = info => ({ type: types.FETCH_DETAIL_SUCCESS, info })
export const fetchDetailFailed = error => ({ type: types.FETCH_DETAIL_FAILED, error })
