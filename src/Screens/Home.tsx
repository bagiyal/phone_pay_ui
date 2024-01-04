import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import CommanHeaders from './CommanHeaders';

const Home = () => {
  const [contentHeight, setContentHeight] = useState(0);
  const moneyTransferData = [
    {
      title: 'To Mobile Number',
      icon: require('../../assets/user.png'),
    },
    {
      title: 'To Mobile Number',
      icon: require('../../assets/bank.png'),
    },
    {
      title: 'To Mobile Number',
      icon: require('../../assets/loader.png'),
    },
    {
      title: 'To Mobile Number',
      icon: require('../../assets/bank.png'),
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <CommanHeaders />
        <View style={styles.banner}>
          <View style={styles.bannerInside}>
            <Image source={require('../../assets/png-phone-pe-transparent-png.png')} style={styles.bannerLogo} />
            <Text style={styles.banner_header}> App Update Available </Text>
          </View>
          <Text style={styles.header_para}>We need fixed some issues  and addded some cool features in this update </Text>
          <View style={{ left: 150, flexDirection: 'row', alignContent: 'center', top: -10, }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: 'purple' }}>LATER</Text>
            <TouchableOpacity style={styles.UpdateBtn}>
              <Text style={{ fontSize: 18, marginTop: '5%', color: 'white' }}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image source={require('../../assets/advert_banner.jpg')} style={styles.advertisement} />
        <View style={styles.paymentBanner}>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: '700', margin: 5 }}>Money Transfer</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {moneyTransferData.map((item, index) => (
              <TouchableOpacity style={styles.money_transfer}>
                <Image source={item.icon} style={styles.Money_Transfer_Logo} />
                <Text style={styles.moneyTransfer_Text}>{item.title}</Text>
              </TouchableOpacity>
            ))}

          </View>

        </View>
        <View style={{ flexDirection: 'row', left: 2 }}>
          <TouchableOpacity style={styles.reward}>
            <Image source={require('../../assets/wallet.png')} style={styles.wallet} />
            <Text style={styles.walletText}>To Mobile Number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reward}>
            <Image source={require('../../assets/giftbox.png')} style={styles.wallet} />
            <Text style={styles.walletText}>To Mobile Number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reward}>
            <Image source={require('../../assets/bull-horn.png')} style={styles.wallet} />
            <Text style={styles.walletText}>To Mobile Number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rechargeSection}>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: '600', margin: 5 }}>Recharges & Bill Pay</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/mobile.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'Mobile Recharge'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/satellite-dish.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'DTH'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/lightbulb.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'Electricity'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/bank.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'Credit Card\nPayment'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 40 }}>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/mobile.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'Mobile Recharge'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/satellite-dish.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'DTH'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/lightbulb.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'Electricity'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recharge}>
              <Image source={require('../../assets/bank.png')} style={styles.rechargeLogo} />
              <Text style={styles.rechargeText}>{'Credit Card\nPayment'}</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  banner: {
    width: '92%',
    height: scale(130),
    backgroundColor: 'white',
    marginTop: '4%',
    marginLeft: '4%',
  },
  banner_header: {
    fontSize: scale(17),
    marginTop: scale(5),
    color: 'black',
    // fontStyle:'italic',
    fontWeight: '700',
  },
  bannerLogo: {
    width: scale(35),
    height: scale(35),
  },
  bannerInside: {
    flex: 1,
    flexDirection: 'row',
    marginTop: scale(5),
    marginLeft: scale(8),
  },
  header_para: {
    marginLeft: scale(15),
    marginTop: scale(45),
    position: 'absolute',
  },
  UpdateBtn: {
    width: scale(70),
    height: scale(30),
    marginLeft: scale(39),
    backgroundColor: 'purple',
    alignItems: 'center',
    borderRadius: 30,
  },
  advertisement: {
    width: '94%',
    height: scale(120),
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: '4%',
    borderRadius: 15,
  },
  paymentBanner: {
    width: '94%',
    height: scale(140),
    alignSelf: 'center',
    marginTop: '2%',
    backgroundColor: 'white'
  },
  money_transfer: {
    width: scale(50),
    height: scale(50),
    backgroundColor: 'purple',
    borderRadius: 10,
    marginTop: 6,
  },
  Money_Transfer_Logo: {
    width: scale(30),
    height: scale(30),
    margin: scale(7),
    tintColor: 'white',
  },
  moneyTransfer_Text: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
    marginTop: 8,
  },
  reward: {
    width: scale(100),
    height: scale(70),
    backgroundColor: '#277be8',
    borderRadius: 20,
    margin: scale(7),
  },
  wallet: {
    width: scale(30),
    height: scale(30),
    marginTop: scale(5),
    alignSelf: 'center',
    tintColor: 'white',
  },
  walletText: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: '700',
  },
  recharge: {
    width: scale(50),
    height: scale(50),
    // backgroundColor: 'purple',
    borderRadius: 10,
    marginTop: 6,
  },
  rechargeLogo: {
    width: scale(30),
    height: scale(30),
    margin: scale(7),
    tintColor: 'purple',
  },
  rechargeSection: {
    width: '94%',
    height: scale(220),
    alignSelf: 'center',
    marginTop: '2%',
    // backgroundColor: 'black',
    marginBottom: '40%',
  },
  rechargeText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
    marginTop: moderateScale(5),
    textAlign: 'center',
  },
})