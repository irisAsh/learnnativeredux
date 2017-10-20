import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 4,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 2,
    borderTopColor: '#B3B7F2',
    borderLeftWidth: 2,
    borderLeftColor: '#B3B7F2',
    borderRightWidth: 2,
    borderRightColor: '#B3B7F2',
  },
  linkContainer: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    fontSize: 16,
    padding: 4,
  },
  city: {
    fontSize: 14,
    paddingLeft: 8,
  },
  link: {
    fontSize: 12,
    paddingLeft: 8,
    color: '#2684FF',
  },
})

export default styles
