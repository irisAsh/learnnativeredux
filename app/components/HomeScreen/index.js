import React from 'react'
import { View, ScrollView } from 'react-native'

import HomeScreenRoutes from '../../navigators/HomeScreenRoutes'
import ScreenList from '../../containers/ScreenListContainer'
import Header from '../Header'
import styles from './styles'

const HomeScreen = () => (
  <View style={styles.container}>
    <Header text='Learn react redux' />
    <ScrollView
      automaticallyAdjustContentInsets={false}
    >
      <ScreenList
        routes={HomeScreenRoutes}
      />
    </ScrollView>
  </View>
)

export default HomeScreen
