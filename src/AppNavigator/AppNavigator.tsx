import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import App from '../../App';
import QrCode from '../Screens/QrCode';
import Main from '../Screens/Main';
import BottomNav from '../BottomNav';
import PayNow from '../Screens/PayNow';
import UpiPass from '../Screens/UpiPass';
export type RootStackParamList = {
  BottomNav: undefined,
  QrCode: undefined,
  PayNow: undefined,
  UpiPass: undefined
}
const stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='BottomNav'>
        <stack.Screen name='BottomNav' component={BottomNav} options={{ headerShown:false }} />
        <stack.Screen name='QrCode' component={QrCode} options={{ headerShown: false}} />
        <stack.Screen name='PayNow' component={PayNow} options={{ headerShown: false}} />
        <stack.Screen name='UpiPass' component={UpiPass} options={{ headerShown: false}} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})