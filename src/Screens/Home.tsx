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
                <Image source={require('../../assets/arrow-down-sign-to-navigate.png')} style={styles.downArrow} />
              </View>
              <Text style={styles.address}>Post Office Chidderwala, Rishikesh </Text>
            </View>
          </View>
          <View style={styles.headerRight}>
              <Image source={require('../../assets/qr-code.png')} style={styles.rightLogo} />
              <Image source={require('../../assets/question.png')} style={styles.rightLogo} />
              <Image source={require('../../assets/ringing.png')} style={styles.rightLogo} />
          </View>
        </View>
      </View>
      <View style={styles.banner}>
        <View style={styles.bannerInside}>
        <Image source={require('../../assets/png-phone-pe-transparent-png.png')} style={styles.bannerLogo} />
        <Text style={styles.banner_header}> App Update Available </Text>
        </View>
        <Text style={styles.header_para}>We need fixed some issues  and addded some cool features in this update </Text>
        <View style={{right:0,}}>
          <Text>Later</Text>
          <Text Update ></Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
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
  address: {
    color: 'white',
    fontSize: moderateScale(12),
    marginTop: scale(2),
  },
  headerRight: {
    // flex:1,
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: moderateScale(8),
    marginTop: moderateScale(-2), 
  },
  rightLogo: {
    width: scale(25),
    height: scale(25),
    tintColor:'white',
    margin: moderateScale(4),
  },
  banner:{
    width: '92%',
    height: scale(90),
    backgroundColor:'white',
    marginTop: '4%',
    marginLeft:'4%',
  },
  banner_header: {
    fontSize: scale(17),
    marginTop: scale(5),
    color:'black',
    // fontStyle:'italic',
    fontWeight:'700',
  },
  bannerLogo: {
    width: scale(35),
    height: scale(35),
  },
  bannerInside:{
    flex:1,
    flexDirection:'row',
    marginTop: scale(5),
    marginLeft:scale(8),
  },
  header_para:{
    marginLeft: scale(15),
    marginTop: scale(40),
    position:'absolute',
  }

})