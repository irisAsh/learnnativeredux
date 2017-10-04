import React from 'react'
import { View, ScrollView } from 'react-native'

import ScreenList from './ScreenList'

const HomeScreen = () => (
  <View>
    <ScrollView
      automaticallyAdjustContentInsets={false}
    >
      <ScreenList />
    </ScrollView>
  </View>
)

HomeScreen.navigationOptions = {
  title: 'Home',
}

export default HomeScreen
