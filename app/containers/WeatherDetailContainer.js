import { connect } from 'react-redux'

import WeatherDetail from '../components/WeatherDetail'
import * as api from '../api'
import * as Actions from '../actions/weatherAppActionCreator'

const mapStateToProps = state => ({
  isFetching: state.weatherApp.isFetching,
  isError: state.weatherApp.isError,
  info: state.weatherApp.info,
})

const mapDispatchToProps = dispatch => ({
  fetchWeatherDetail: async (id) => {
    dispatch(Actions.fetchDetail())
    const response = await api.fetchWeatherDetail(id)
    if (!response.ok) {
      console.log('Response NG')
      dispatch(Actions.fetchDetailFailed(response.statusText))
    } else {
      console.log('Response OK')
      const result = await response.json()
      console.log(result)
      dispatch(Actions.fetchDetailSuccess(result))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail)
