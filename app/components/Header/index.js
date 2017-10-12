import React from 'react'
import PropTypes from 'prop-types'
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

const Header = ({ text, navigation }) => (
  <View style={[
    styles.container,
    navigation && {paddingBottom: 4}
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
}

Header.defaultProps = {
  text: 'None Title',
}

export default Header
