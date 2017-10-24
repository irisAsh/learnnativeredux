import { connect } from 'react-redux'

import WeatherDetail from '../components/WeatherDetail'

const mapStateToProps = state => ({
  data: state.primaryArea.data,
})

export default connect(mapStateToProps)(WeatherDetail)
