import { Platform } from 'react-native'
import fs from 'react-native-fs'
import Realm from 'realm'

import * as types from '../constants/realmConstants'
import * as WeatherModels from '../models/WeatherModels'

const initailRealm = {
  realm: null,
}

const realm = (state = initailRealm, action) => {
  console.log('at realm reducer')
  console.log(action)
  switch (action.type) {
    case types.INITIALIZE_REALM:
      if (!!state.realm) {
        return state
      } else {
        console.log('@@@@@@@@@@@')
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
    default:
      return state
  }
}

export default realm
