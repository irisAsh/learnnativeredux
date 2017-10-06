import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BookItems from '../components/BookItems'
import * as Actions from '../actions/bookshelfActionCreators'

const mapStateToProps = state => ({
  books: state.bookshelf.books,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BookItems)
