import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header2}>
          <View style={styles.headerLeft}>
            <View>
              <Image source={require('../../assets/man.png')} style={styles.user} />
              <Image source={require('../../assets/india.png')} style={styles.flag} />
            </View>
            <View style={{ marginLeft: moderateScale(10) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={styles.home}>Home</Text>
                <Image source={require('../../assets/arrow-down-sign-to-navigate.png')} style={styles.downArrow}/>
              </View>
              <Text>Post Office Chidderwala, Rishikesh </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: 'purple',
    justifyContent: 'flex-end',
  },
  header2: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  headerLeft: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  user: {
    width: scale(40),
    height: scale(40),
  },
  home: {
    fontSize: moderateScale(18),
    color: 'white',
    fontWeight: '700',
  },
  flag: {
    width: scale(30),
    height: scale(30),
    marginTop: scale(22),
    marginLeft: scale(16),
    position: 'absolute',
  },
  downArrow: {
    width: scale(16),
    height: scale(16),
    marginLeft: moderateScale(5),
    tintColor: 'white',
  },
})