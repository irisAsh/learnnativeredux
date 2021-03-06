import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'
import { isoToStrJpn } from '../../lib/formatTime'

export default class WeatherOverview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openAccordion: false,
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={this.props.onAccordion || !!this.props.onPress ? 0.2 : 1.0}
        onPress={
          this.props.onAccordion ? () => this.toggleAccordion() :
          !!this.props.onPress ? () => this.props.onPress() : null
        }
      >
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.date}>
            {isoToStrJpn(this.props.publicTime)}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={ this.state.openAccordion ? 0 : this.props.numberOfLines }
            ellipsizeMode='tail'
          >
            {this.props.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  toggleAccordion = () => {
    this.setState(previousState => {
      return {
        openAccordion: !previousState.openAccordion,
      }
    })
  }
}

WeatherOverview.propTypes = {
  title: PropTypes.string.isRequired,
  publicTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numberOfLines: PropTypes.number,
  onAccordion: PropTypes.bool,
  onPress: PropTypes.func,
}

WeatherOverview.defaultProps = {
  numberOfLines: 2,
  onAccordion: false,
}
