import React, { Component } from 'react'
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import BookItem from '../BookItem'
import PostBox from '../PostBox'
import styles from './styles'

export class Bookshelf extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const renderBooks = () => {
      console.log(this.props)
      return this.props.books.map((item) => {
        console.log(item)
        return (
          <BookItem
            {...item.book}
            key={item.id}
            id={item.id}
          />
        )
      })
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.topBar}>
          <Text style={styles.title}>
            Bookshelf
          </Text>
        </View>
        <PostBox />
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          {renderBooks()}
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    books: state.books,
  }
}

// Providerからdispatch, state(books)を取得
export default connect(mapStateToProps)(Bookshelf)
