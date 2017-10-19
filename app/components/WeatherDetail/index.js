import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  ScrollView,
  View,
} from 'react-native'

import styles from './styles'
import DailyWeather from '../DailyWeather'
import Header from '../Header'
import LocaleWeatherLinks from '../LocaleWeatherLinks'
import WeatherOverview from '../WeatherOverview'
import { connect } from 'react-redux'

const exampleData = {
    "publicTime" : "2013-01-29T11:00:00+0900",
     "title" : "福岡県 久留米 の天気",
     "description" : {
        "text" : " 九州北部地方は、高気圧に覆われて晴れています。\n\n 29日は、九州北部地方では、高気圧に覆われて晴れますが、気圧の谷の\n影響で、昼過ぎから次第に曇りとなるでしょう。\n\n 30日は、気圧の谷の影響ではじめ曇りますが、昼頃からは高気圧に覆わ\nれて概ね晴れるでしょう。\n\n 波の高さは、九州北部地方の沿岸の海域では、29日は1.5メートル、\n30日は1メートルでしょう。豊後水道では、29日と30日は1メートル\nでしょう。\n 福岡県の内海では、29日と30日は0.5メートルでしょう。",
        "publicTime" : "2013-01-29T10:37:00+0900"
     },
  "forecasts" : [
      {
         "dateLabel" : "今日",
         "telop" : "晴のち曇",
         "date" : "2013-01-29",
         "temperature" : {
            "min" : null,
            "max" : {
               "celsius" : "11",
               "fahrenheit" : "51.8"
            }
         },
         "image" : {
            "width" : 50,
            "url" : "http://weather.livedoor.com/img/icon/5.gif",
            "title" : "晴のち曇",
            "height" : 31
         }
      },
      {
         "dateLabel" : "明日",
         "telop" : "晴れ",
         "date" : "2013-01-30",
         "temperature" : {
            "min" : {
               "celsius" : "3",
               "fahrenheit" : "37.4"
            },
            "max" : {
               "celsius" : "13",
               "fahrenheit" : "55.4"
            }
         },
         "image" : {
            "width" : 50,
            "url" : "http://weather.livedoor.com/img/icon/1.gif",
            "title" : "晴れ",
            "height" : 31
         }
      },
      {
         "dateLabel" : "明後日",
         "telop" : "晴時々曇",
         "date" : "2013-01-31",
         "temperature" : {
            "min" : null,
            "max" : null
         },
         "image" : {
            "width" : 50,
            "url" : "http://weather.livedoor.com/img/icon/2.gif",
            "title" : "晴時々曇",
            "height" : 31
         }
      }
   ],
   "pinpointLocations" : [
      {
         "link" : "http://weather.livedoor.com/area/forecast/4020200",
         "name" : "大牟田市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4020300",
         "name" : "久留米市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4020700",
         "name" : "柳川市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4021000",
         "name" : "八女市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4021100",
         "name" : "筑後市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4021200",
         "name" : "大川市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4021600",
         "name" : "小郡市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4022500",
         "name" : "うきは市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4022800",
         "name" : "朝倉市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4022900",
         "name" : "みやま市"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4044700",
         "name" : "筑前町"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4044800",
         "name" : "東峰村"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4050300",
         "name" : "大刀洗町"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4052200",
         "name" : "大木町"
      },
      {
         "link" : "http://weather.livedoor.com/area/forecast/4054400",
         "name" : "広川町"
      }
   ],
}

class WeatherDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('uuuuuuuuuuuuu')
    console.log(this.props)
    this.props.fetchWeatherDetail('400040')
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Header
          text={
            !!navigation.state.params.headerTitle
            ? navigation.state.params.headerTitle
            : '天気詳細'
          }
          navigation={navigation}
        />
        <ScrollView>
          <WeatherOverview
            title={exampleData.title}
            publicTime={exampleData.publicTime}
            description={exampleData.description.text}
            onAccordion={true}
          />
          <DailyWeather
            forecasts={exampleData.forecasts}
          />
          <LocaleWeatherLinks
            links={exampleData.pinpointLocations}
          />
        </ScrollView>
      </View>
    )
  }
}

WeatherDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
}

WeatherDetail.navigationOptions = {
  header: null,
}

export default WeatherDetail
