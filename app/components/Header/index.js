import React from 'react'
import PropTypes from 'prop-types'
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

const Header = ({ text, containerColor, navigation }) => (
  <View style={[
    styles.container,
    navigation && {paddingBottom: 4},
    {backgroundColor: containerColor},
  ]}>
    <StatusBar barStyle='light-content' />
    <Text style={styles.headerTitle}>{text}</Text>
    { navigation &&
      <TouchableOpacity
        style={styles.backConatainer}
        onPress={() => navigation.goBack(null)}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    }
  </View>
)

Header.propTypes = {
  text: PropTypes.string,
  navigation: PropTypes.object,
  containerColor: PropTypes.string,
}

Header.defaultProps = {
  text: 'None Title',
  containerColor: '#FF4F7D',
}

export default Header
