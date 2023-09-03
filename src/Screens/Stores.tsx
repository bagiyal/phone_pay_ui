import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommanHeaders from './CommanHeaders'
import { moderateScale, scale } from 'react-native-size-matters'

const Stores = () => {
  return (
    <View style={styles.container}>
      <CommanHeaders />
      <View style={styles.searchBox}>
        <Image source={require('../../assets/loupe.png')} style={styles.searchIcon} />
        <Text style={{ marginTop: 25, position: 'absolute', marginLeft: 70, }}>Search By Store name or phone number </Text>
      </View>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        renderItem={({ item, value }) => {
          return (
            <View style={styles.shopItem}>
              <Text style={styles.transactionTime}> Last Paid 50, 3 months ago</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/shop.png')} style={styles.shopIcon} />
                <Text style={styles.head}> Bagiyal Tent House </Text>
              </View>
              <Text style={styles.headx}>⭐ 4.3 50M  Closest at 10:00 PM </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pay Now</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <FlatList 
      numColumns={4}
      contentContainerStyle={{marginTop:moderateScale(20)}}
      data={[
        {
          icon: require('../../assets/shop.png'),
          title: 'Kirana & General Store',
        },
        {
          icon: require('../../assets/shop.png'),
          title: 'Kirana & General Store',
        },
        {
          icon: require('../../assets/shop.png'),
          title: 'Kirana & General Store',
        },
        {
          icon: require('../../assets/shop.png'),
          title: 'Kirana & General Store',
        },
      ]}
      renderItem={({item,index}) => {
        return (
              <TouchableOpacity style={styles.recharge}>
            <Image source={item.icon} style={styles.rechargeLogo} />
            <Text style={styles.rechargeText}>{item.title}</Text>
          </TouchableOpacity>
        )
      }}
      />

      <View style={styles.rechargeSection}>
        <Text style={{ fontSize: 18, color: 'black', fontWeight: '600', margin: 5 }}>Recharges & Bill Pay</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

        </View>

      </View>
    </View>
  )
}

export default Stores

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  searchBox: {
    backgroundColor: 'white',
    width: '90%',
    height: scale(60),
    margin: 20,
    borderRadius: 18,
  },
  searchIcon: {
    width: scale(30),
    height: scale(30),
    margin: 20,
  },
  shopItem: {
    width: '100%',
    height: scale(130),
    backgroundColor: 'white',
    margin: 10,
  },
  transactionTime: {
    fontSize: 17,
    marginTop: 3,
    marginLeft: 10,
  },
  shopIcon: {
    width: scale(35),
    height: scale(35),
    marginLeft: 15,
    marginTop: 10,
  },
  head: {
    // position:'absolute',
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  headx: {
    marginLeft: 60,
    marginTop: -13,
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    marginLeft: 13,
  },
  buttonText: {
    color: 'purple',
    fontWeight: 'bold',
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
    backgroundColor: 'white',
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