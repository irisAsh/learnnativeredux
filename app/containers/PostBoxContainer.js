import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostBox from '../components/PostBox'
import * as Actions from '../actions/bookshelfActionCreators'

const mapStateToProps = state => ({
  postBookName: state.bookshelf.postBookName,
  postAuthor: state.bookshelf.postAuthor,
  postGenre: state.bookshelf.postGenre,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(PostBox)
