import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters';
import Stores from './Screens/Stores';
import Insurence from './Screens/Insurence';
import Wealth from './Screens/Wealth';
import History from './Screens/History';
import Home from './Screens/Home';
const BottomNav = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      {selected == 0 ? <Home /> : selected == 1 ? <Stores /> : selected == 2 ? <Insurence /> : selected == 3 ? <Wealth /> : <History />}
      <View style={styles.bottomNav}>
        <View style={styles.BottomNav2}>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(0) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 0 ? 'purple' : '#bdbdbd' }]}>
              <Image source={require('../assets/home.png')} style={[styles.bottomImg, { tintColor: 'white' }]} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(1) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 1 ? 'purple' : '#bdbdbd' }]}>
              <Image source={require('../assets/shopping-bag.png')} style={styles.bottomImg} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(2) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 2 ? 'purple' : '#bdbdbd' }]}>
              <Image source={require('../assets/insurance.png')} style={styles.bottomImg} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(3) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 3 ? 'purple' : '#bdbdbd' }]}>
              <Image source={require('../assets/rupee.png')} style={styles.bottomImg} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => { setSelected(4) }}>
            <View style={[styles.tabIcon, { backgroundColor: selected == 4 ? 'purple' : '#bdbdbd' }]}>
              <Image source={require('../assets/transaction.png')} style={styles.bottomImg} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  bottomNav: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    bottom: 0,
  },
  BottomNav2: {
    width: '100%',
    height: verticalScale(55),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    left: 20,
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  tabIcon: {
    width: scale(34),
    height: scale(34),
    borderRadius: scale(16),
    justifyContent: 'center',
    alignContent: 'center',
  },
  bottomImg: {
    width: scale(25),
    height: scale(25),
    left: scale(4),
    tintColor: 'white'
  },

})