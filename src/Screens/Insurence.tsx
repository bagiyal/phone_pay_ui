import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CommanHeaders from './CommanHeaders'
import { FlatList } from 'react-native'
import { TextInput } from 'react-native'

const Insurence = () => {

  const data = [
    {
      title: 'test 1 ',
      color: 'blue',
    },
    {
      title: 'test 2 ',
      color: 'black',
    },
    {
      title: 'test 3 ',
      color: 'green',
    },
    {
      title: 'test 4 ',
      color: 'pink',
    },
    {
      title: 'test 5 ',
      color: 'red',
    },
  ]

  const renderItemss = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      <View style={{ backgroundColor: 'green', width: 120, height: 120, margin: 12, }}>
        <Text style={{ fontSize: 22, color: 'black', margin: 8, justifyContent: 'center', textAlign: 'center', marginTop: 40 }}>{item.title}</Text>
      </View>
    </View>
  );
  const [inputValue, setInputValue] = useState('');

  const newData = [
    {
      title: 'COVID-19 Should u care?',
      commment: ' A small talk about virus Share Your Opinion',
    },
    {
      title: 'COVID-19 Should u care?',
      commment: ' A small talk about virus Share Your Opinion',
    },
    {
      title: 'COVID-19 Should u care?',
      commment: ' A small talk about virus Share Your Opinion',
    },
  ];
  const [check, setCheck] = useState('people');
  const newRender = () => (
    <View style={styles.card}>
      <Text style={{ fontSize: 21, color: 'white', margin: 5, marginTop: 10, marginLeft: 20, }}></Text>
      <Text style={{ color: '#fff', margin: 5, marginLeft: 20, width: '50%' }}></Text>
      <View style={styles.iconOuter}>
        <Image source={require('./../../assets/arrow-down-sign-to-navigate.png')} style={styles.smallIcon} />
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <CommanHeaders />
      <Text style={{ fontSize: 25, margin: 20, color: 'white', fontWeight: '700' }}>Explore</Text>
      <TextInput style={{ color: 'white', borderColor: 'gray', borderWidth: 1, backgroundColor: '#635ed8', marginHorizontal: 20, borderRadius: 8, }}
        placeholder="Type here..."
        onChangeText={(text) => setInputValue(text)}
        value={inputValue} />
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, }}>
        <TouchableOpacity onPress={() => setCheck('people')} style={styles.touchText}><Text style={styles.text}>People</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCheck('rooms')} style={styles.touchText}><Text style={styles.text}>Rooms</Text></TouchableOpacity>
      </View>
      {
        check == 'people' ? (
          newData.map((data) => (
            <TouchableOpacity style={styles.card} onPress={() => { Alert.alert('Heyyy') }}>
              <Text style={{ fontSize: 21, color: 'white', margin: 5, marginTop: 10, marginLeft: 20, }}>{data.title}</Text>
              <Text style={{ color: '#fff', margin: 5, marginLeft: 20, width: '50%' }}>{data.commment}</Text>
              <View style={styles.iconOuter}>
                <Image source={require('./../../assets/arrow-down-sign-to-navigate.png')} style={styles.smallIcon} />
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text> rooms </Text>
          </View>
        )

      }
      {/* <FlatList
        data={newData}
        renderItem={newRender}
        keyExtractor={(item) => item.title}
        numColumns={3}
      /> */}
      {/* <FlatList
        data={data}
        renderItem={renderItemss}
        keyExtractor={(item) => item.title}
        numColumns={2}
      /> */}
      {/* <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={{ backgroundColor: 'green', width: 120, height: 120, margin: 12, }}>
          <Text style={{ fontSize: 22, color: 'black', margin: 8, justifyContent: 'center', textAlign: 'center', marginTop: 40 }}>Insurence</Text>
        </View>
        <View style={{ backgroundColor: 'green', width: 120, height: 120, margin: 12, }}>
          <Text style={{ fontSize: 22, color: 'black', margin: 8, justifyContent: 'center', textAlign: 'center', marginTop: 40 }}>Insurence</Text>
        </View>
        <View style={{ backgroundColor: 'green', width: 120, height: 120, margin: 12, }}>
          <Text style={{ fontSize: 22, color: 'black', margin: 8, justifyContent: 'center', textAlign: 'center', marginTop: 40 }}>Insurence</Text>
        </View>
        <View style={{ backgroundColor: 'green', width: 120, height: 120, margin: 12, }}>
          <Text style={{ fontSize: 22, color: 'black', margin: 8, justifyContent: 'center', textAlign: 'center', marginTop: 40 }}>Insurence</Text>
        </View>
      </View> */}

    </ScrollView>
  )
}

export default Insurence

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#554bc8',
    flex: 6,
    marginBottom: 100,
  },
  text: {
    fontSize: 21,
    fontWeight: '300',
    color: 'white',
  },
  touchText: {
    marginHorizontal: 0,
  },
  card: {
    margin: 20,
    height: 150,
    backgroundColor: '#7f7cff',
    borderRadius: 10,
  },
  iconOuter: {
    width: 50,
    height: 50,
    backgroundColor: '#353dac',
    position: 'absolute',
    right: 20,
    bottom: 15,
    borderRadius: 10,
  },
  smallIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    transform: [{ rotate: '270deg' }],
    margin: 10,
    tintColor: 'white'
  }
})