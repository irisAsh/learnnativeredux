import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    padding: 4,
  },
  date: {
    fontSize: 10,
    paddingLeft: 8,
    color: '#9B9B9B',
  },
  description: {
    fontSize: 12,
    padding: 4,
  },
})

export default styles
