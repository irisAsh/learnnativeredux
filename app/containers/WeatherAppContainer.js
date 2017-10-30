import { connect } from 'react-redux'
import { DOMParser } from 'xmldom'

import WeatherApp from '../components/WeatherApp'
import * as api from '../api'
import * as Actions from '../actions/weatherAppActionCreator'

const mapStateToProps = state => ({
  isFetching: state.primaryArea.isFetching,
  isError: state.primaryArea.isError,
  realm: state.primaryArea.realm,
  updateDate: state.primaryArea.updateDate,
})

const mapDispatchToProps = dispatch => ({
  fetchPrimaryArea: async () => {
    dispatch(Actions.fetchPrimaryArea())
    const response = await api.fetchPrimaryArea()
    if (!response.ok) {
      console.log('Primary Area : Response NG')
      dispatch(Actions.fetchPrimaryAreaFailed(response.statusText))
    } else {
      console.log('Primary Area : Response OK')
      const result = await response.text()
      const xmlDoc = new DOMParser().parseFromString(result, 'text/xml')
      const pref = xmlDoc.getElementsByTagName('pref')
      dispatch(Actions.fetchPrimaryAreaSuccess())
      //for (let key = 0; key < pref.length; key++) {
      for (let key = 0; key < 1; key++) {
        let elem = pref[key]
        let childNodes = elem.childNodes
        for (let node = 0; node < childNodes.length; node++) {
          let child = childNodes[node]
          if (child.nodeName !== 'city') continue
          let attributes = child.attributes
          for (let index = 0; index < attributes.length; index++) {
            let attr = attributes[index]
            if (attr.nodeName === 'id') {
              dispatch(Actions.fetchLocaleWeather())
              const detailResponse = await api.fetchWeatherDetail(attr.nodeValue)
              if (!response.ok) {
                console.log('Weather Detail : Response NG')
                dispatch(Actions.fetchLocaleWeatherFailed(response.statusText))
              } else {
                console.log('Weather Detail : Response OK')
                const detailResult = await detailResponse.json()
                dispatch(Actions.fetchLocaleWeatherSuccess(attr.nodeValue, detailResult))
              }
            }
          }
        }
      }
    }
  },
  initializeRealm: () => {
    dispatch(Actions.initializeRealm())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp)
