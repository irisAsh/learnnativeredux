import * as types from '../constants/weatherAppConstants'

/*
 * Action creater
 */
export const fetchDetail = () => ({ type: types.FETCH_DETAIL })
export const fetchDetailSuccess = info => ({ type: types.FETCH_DETAIL_SUCCESS, info })
export const fetchDetailFailed = error => ({ type: types.FETCH_DETAIL_FAILED, error })
