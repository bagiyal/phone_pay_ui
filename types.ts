// import type { NativeStackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import App from './App';
import QrCode from './src/Screens/QrCode';
export type RootStackParamList = {
    App: undefined;
    QrCode: undefined; 
}


export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;