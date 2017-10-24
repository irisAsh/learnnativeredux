import { connect } from 'react-redux'

import LocationList from '../components/LocationList'

const mapDispatchToProps = dispatch => ({
  navigate: (screen, params) => dispatch({ type: screen, params }),
})

export default connect(null, mapDispatchToProps)(LocationList)
