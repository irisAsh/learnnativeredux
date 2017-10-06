import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostBox from '../components/PostBox'
import * as Actions from '../actions/bookshelfActionCreators'

const mapStateToProps = state => ({
  postBookName: state.bookshelfReducer.postBookName,
  postAuthor: state.bookshelfReducer.postAuthor,
  postGenre: state.bookshelfReducer.postGenre,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(PostBox)
