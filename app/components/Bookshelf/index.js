import React, { Component } from 'react'
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'
import { registerBook } from '../../actions'


export class Bookshelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
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
        <View style={styles.inputContainer}>
          <TextInput
            onChange={(event) => {
              console.log(event.nativeEvent)
              this.setState({
                name: event.nativeEvent.text,
              })
            }}
            onSubmitEditing={this.registerBook}
            placeholder='New To-Do'
            returnKeyType='done'
            style={styles.input}
            value={this.state.name}
          />
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          {renderBooks()}
        </ScrollView>
      </View>
    )
  }

  registerBook = () => {
    const { name } = this.state
    if (name && name != null) {
      this.setState({
        name: '',
      })
      let book = {
        name: name,
        author: 'AAAA',
        genre: 'SF',
      }
      this.props.dispatch(registerBook(book))
      console.log(book)
    }
  }
}

const mapStateProps = (state) => {
  console.log(state)
  return {
    books: state.books,
  }
}

export default connect(mapStateProps)(Bookshelf)
