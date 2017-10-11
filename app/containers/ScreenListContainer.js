import { connect } from 'react-redux'
import ScreenList from '../components/ScreenList'

const mapDispatchToProps = dispatch => ({
  navigate: (screen) => dispatch({ type: screen }),
})

export default connect(null, mapDispatchToProps)(ScreenList)
