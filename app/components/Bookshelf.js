import React, { Component } from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import {
  registerBook,
  deleteBook,
} from '../actions'

class Book extends Component {
  render() {
    console.log(this.props)
    return (
      <TouchableOpacity
        onPress={this.deleteBook}
      >
        <View style={styles.bookContainer}>
          <Text style={styles.bookName}>
            {this.props.name}
          </Text>
          <Text style={styles.bookAuthor}>
            {this.props.author}
          </Text>
          <Text style={styles.bookGenre}>
            {this.props.genre}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  deleteBook = () => {
    this.props.dispatch(deleteBook(this.props.id))
  }
}

const BookItem = connect()(Book)

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  bookContainer: {
    padding: 16,
    borderWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookName: {
  },
  bookAuthor: {
  },
  bookGenre: {
  },
})
