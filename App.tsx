import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/Router'
import BottomNav from './src/BottomNav'
const App = () => {
  return (
    <View style={{flex:1}}>
      <BottomNav />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

})