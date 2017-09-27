import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bookContainer: {
    padding: 16,
    borderWidth: 4,
    borderColor: '#E5973D',
    marginBottom: -1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4C1',
  },
  subtitle: {
    justifyContent: 'center',
    margin: 4,
  },
  bookName: {
    fontSize: 20,
    width: 200,
  },
  bookAuthor: {
    padding: 2,
    fontSize: 16,
  },
  bookGenre: {
    padding: 2,
    fontSize: 12,
  },
})

export default styles
