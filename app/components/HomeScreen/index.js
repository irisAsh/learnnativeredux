import React from 'react'
import { View, ScrollView } from 'react-native'

import ScreenList from '../ScreenList'
import { screenData } from '../../data/screenData'

const HomeScreen = () => (
  <View>
    <ScrollView
      automaticallyAdjustContentInsets={false}
    >
      <ScreenList
        screenData={screenData}
      />
    </ScrollView>
  </View>
)

HomeScreen.navigationOptions = {
  title: 'Home',
}

export default HomeScreen
