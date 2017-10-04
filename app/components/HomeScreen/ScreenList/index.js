import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles'
import { screenData } from '../data/screenData'

class ScreenList extends Component {
  render() {
    return (
      <View>
        {this.renderList()}
      </View>
    )
  }

  renderList = () => (
    screenData.map((elem, index) => {
      console.log('888888888888888')
      console.log(this.props)
      return (
        <TouchableOpacity
          key={index}
          onPress={() => this.props.dispatch({ type: elem.screen })}
        >
          <View style={styles.container}>
            <Text style={styles.title}>{elem.screen}</Text>
            <Text style={styles.description}>{elem.description}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  )
}

export default connect()(ScreenList)
