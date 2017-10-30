import { Platform } from 'react-native'
import fs from 'react-native-fs'
import Realm from 'realm'

import * as types from '../constants/weatherAppConstants'
import * as WeatherModels from '../models/WeatherModels'

const initailPrimaryAreaState = {
  isFetching: false,
  isError: false,
  data: {},
  realm: null,
  updateDate: new Date(0),
}

export const primaryArea = (state = initailPrimaryAreaState, action) => {
  console.log('at primaryAreaReducer')
  console.log(action)
  switch (action.type) {
    case types.INITIALIZE_REALM:
      if (!!state.realm) {
        return state
      } else {
        const realmDB = new Realm({
          //path: Platform.OS === 'ios'
            //? fs.MainBundlePath + '/default.realm'
            //: fs.DocumentDirectoryPath + '/default.realm',
          schema: Object.keys(WeatherModels).map(key => WeatherModels[key]),
        })
        console.log(realmDB.path)
        return {
          ...state,
          realm: realmDB,
        }
      }
    case types.FETCH_PRIMARY_AREA:
      return {
        ...state,
        isFetching: true,
      }
    case types.FETCH_PRIMARY_AREA_FAILED:
      return {
        ...state,
        isFetching: false,
        isError: true,
      }
    case types.FETCH_PRIMARY_AREA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        updateDate: new Date(),
      }
    case types.FETCH_LOCALE_WEATHER_SUCCESS:
      let result = registerLocaleWeather(action.id, action.info, state.realm)
      return {
        ...state,
        isError: !result,
      }
    default:
      return state
  }
}

const registerLocaleWeather = (cityId, info, realm) => {
  try {
    realm.write(() => {
      let weather = realm.create('Weather', {
        cityId: cityId,
        title: info.title,
        publicTime: info.publicTime,
        description: info.description.text,
      }, true)

      info.forecasts.forEach((elem, index) => {
        let id = cityId + index
        let forecast = realm.create('Forecast', {
          id: id,
          cityId: cityId,
          index: index,
          dateLabel: elem.dateLabel,
          telop: elem.telop,
          date: elem.date,
          imageWidth: elem.image.width,
          imageHeight: elem.image.height,
          imageUrl: elem.image.url,
          temperature: {
            id: id,
            cityId: cityId,
            index: index,
            maxCelsius: elem.temperature.max ? elem.temperature.max.celsius : '',
            maxFahrenheit: elem.temperature.max ? elem.temperature.max.fahrenheit : '',
            minCelsius: elem.temperature.min ? elem.temperature.min.celsius : '',
            minFahrenheit: elem.temperature.min ? elem.temperature.min.fahrenheit : '',
          },
        }, true)
        weather.forecasts.push(forecast)
      })

      info.pinpointLocations.forEach((elem) => {
        let matches = elem.link.match(/.*forecast\/(\d+)/)
        let linkId = matches[1]
        let pinpointLocation = realm.create('PinpointLocation', {
          cityId: linkId,
          link: elem.link,
          name: elem.name,
        }, true)
        weather.pinpointLocations.push(pinpointLocation)
      })
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
