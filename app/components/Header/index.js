import React from 'react'
import {
  StatusBar,
  Text,
  View,
} from 'react-native'

import styles from './styles'

const Header = () => (
  <View style={styles.container}>
    <StatusBar barStyle='light-content' />
    <Text style={styles.headerTitle}>Learn react redux</Text>
  </View>
)

export default Header
