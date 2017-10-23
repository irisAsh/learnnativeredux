import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'

import Header from '../Header'
import LocationList from '../LocationList'
import styles from './styles'

const exampleData = {
  "400040" : {
    "publicTime" : "2013-01-29T11:00:00+0900",
     "title" : "福岡県 久留米 の天気",
     "description" : {
        "text" : " 九州北部地方は、高気圧に覆われて晴れています。\n\n 29日は、九州北部地方では、高気圧に覆われて晴れますが、気圧の谷の\n影響で、昼過ぎから次第に曇りとなるでしょう。\n\n 30日は、気圧の谷の影響ではじめ曇りますが、昼頃からは高気圧に覆わ\nれて概ね晴れるでしょう。\n\n 波の高さは、九州北部地方の沿岸の海域では、29日は1.5メートル、\n30日は1メートルでしょう。豊後水道では、29日と30日は1メートル\nでしょう。\n 福岡県の内海では、29日と30日は0.5メートルでしょう。",
        "publicTime" : "2013-01-29T10:37:00+0900"
     }
  }
}

class WeatherApp extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPrimaryArea()
  }

  render() {
    const { navigation, data } = this.props
    console.log('////////////////')
    console.log(this.props)
    console.log(data)
    const renderList = () => {
      if (Object.keys(data).length > 0) {
        return (
          <LocationList
            locations={data}
          />
        )
      } else {
        return (
          <Text>No Data</Text>
        )
      }
    }
    return (
      <View style={styles.container}>
        <Header
          text='天気検索'
          containerColor='#4CA8FF'
          navigation={navigation}
        />
        { renderList() }
      </View>
    )
  }
}

WeatherApp.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WeatherApp.navigationOptions = {
  header: null,
}

export default WeatherApp
