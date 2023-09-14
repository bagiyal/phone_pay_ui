import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons';

const UpiPass = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{fontSize:20,color:'black',opacity:.9,marginTop:8}}>Cancel</Text>
      </View>
      <View style={styles.numpad}>
        <View style={{flexDirection:'row',width:'100%'}}>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',width:'100%'}}>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',width:'100%'}}>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',width:'100%'}}>
          <TouchableOpacity style={styles.numberStyle}>
          <Icon name='close' size={25} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(25)}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberStyle}>
            <Text style={{color:'black',fontSize: moderateScale(16)}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default UpiPass

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    margin: 15,
    height: '8%',
    width: '100%',
    borderBottomWidth:.5,
  },
  numpad: {
    position:'absolute',
    bottom:0,
  },
  numberStyle:{
    width: '33%',
    height: verticalScale(45),
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  }
})