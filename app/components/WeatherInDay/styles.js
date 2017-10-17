import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  dateLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  dateLabelText: {
    fontSize: 18,
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  dateText: {
    fontSize: 18,
  },
  img: {
    width: 50,
    height: 31,
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  weatherText: {
    fontSize: 18,
  },
  temperatureContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  temperatureLabel: {
    fontSize: 14,
    paddingLeft: 4,
  },
  temperatureNumber: {
    fontSize: 14,
  },
  temperatureDegree: {
    fontSize: 14,
    paddingRight: 4,
  },
})

export default styles
