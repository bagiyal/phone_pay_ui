import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
const QrCode = () => {
  const navigation = useNavigation();
  const handleBack = () =>{
    console.log(navigation.canGoBack())
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 17 }}>Scan & Pay</Text>
          <Icon name='question-mark-circle-outline' size={30} color="white" />
        </View>
        <View style={styles.options}>
          <Entypo name='images' size={30}  />
          <Entypo name='flash' size={30}  />
        </View>
      </View>
      <View style={styles.recentContent}>
        <Text style={{ fontSize: 19, margin: 5, }}>Recent</Text>
        <View>
          <FlatList
            numColumns={4}
            data={[1, 1, 1, 1]}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 8, marginTop: 4, }}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.recentItem}>
                  <TouchableOpacity style={styles.nameView} onPress={()=>{navigation.navigate('PayNow')}}>
                    <Text style={styles.nameChar}>{index == 0 ? "A" : index == 1 ? "B" : "C"}</Text>
                  </TouchableOpacity>
                  <Text style={{ justifyContent: 'center', fontSize: 18, left: 8, color: 'black' }}>{"Ankit"}</Text>
                </View>
              );
            }
            }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  header: {
    width: '100%',
    height: verticalScale(75),
    backgroundColor: 'purple',
  },
  subHeader: {
    marginTop: '7%',
    margin: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  options: {
    flexDirection: 'row',
    margin: 15,
    alignSelf: 'center',
    marginTop:40,
  },
  recentContent: {
    position: 'absolute',
    bottom: 10,
  },
  nameView: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: 'yellow',
  },
  recentItem: {
    marginLeft: moderateScale(30),
  },
  nameChar: {
    fontSize: 30,
    textAlign: 'center',
    top: 8,
    color: 'black',
  }
});

export default QrCode