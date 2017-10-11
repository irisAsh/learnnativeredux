import React from 'react'
import { View, ScrollView } from 'react-native'

import { AppRoutes } from '../../navigators/AppNavigator'
import ScreenList from '../../containers/ScreenListContainer'
import Header from '../Header'
import styles from './styles'

const HomeScreen = () => (
  <View style={styles.container}>
    <Header />
    <ScrollView
      automaticallyAdjustContentInsets={false}
    >
      <ScreenList
        routes={AppRoutes}
      />
    </ScrollView>
  </View>
)

export default HomeScreen
