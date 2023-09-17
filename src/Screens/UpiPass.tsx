import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UpiPass = () => {
  const [pin, setPin] = useState('');
  useEffect(() => {
    console.log('UpiPass',pin);
  },[pin])
  const handleCancel = () => {
    const pinLenght:number = pin.length;
    if (pinLenght>0) {
      setPin(pin.substring(0, pinLenght - 1));
    }
    console.log('ss--',pin);

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{fontSize: 20, color: 'black', opacity: 0.9, marginTop: 8}}>
          Cancel
        </Text>
        <View style={styles.bankView}>
          <Image
            source={require('../../assets/hdfc.png')}
            style={{height: 40, width: 40, margin: 8}}
          />
          <Text
            style={{
              fontStyle: 'italic',
              color: 'black',
              top: 20,
              marginLeft: 20,
              fontSize: 16,
            }}>
            HDFC Bank *****55{' '}
          </Text>
          <Image
            source={require('../../assets/upi.jpg')}
            style={{
              height: 14,
              width: 60,
              margin: 8,
              marginLeft: 90,
              marginTop: 23,
            }}
          />
        </View>
        <View style={styles.sender_recvier}>
          <Text
            style={{
              fontStyle: 'italic',
              color: 'black',
              top: 10,
              marginLeft: 20,
              fontSize: 16,
            }}>
            To
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              color: 'black',
              top: 10,
              marginLeft: 20,
              fontSize: 16,
            }}>
            Sending
          </Text>

          <Text
            style={{
              fontStyle: 'italic',
              color: 'black',
              top: 10,
              right: 20,
              fontSize: 16,
              position: 'absolute',
            }}>
            ineedhelp@ybl
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              color: 'black',
              top: 30,
              right: 20,
              fontSize: 16,
              position: 'absolute',
            }}>
            {'₹ 21'}
          </Text>
        </View>
      </View>
      <View style={styles.pinCode}>
        <Text style={{fontSize: 19, color: 'black', fontWeight: '600'}}>
          Enter 4-Digit Upi Pin
        </Text>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <View style={[styles.pinView,{backgroundColor:(pin.length == 1 || pin.length == 2 || pin.length == 3 || pin.length == 4)?'black':'white'}]}></View>
          <View style={[styles.pinView,{backgroundColor: (pin.length == 2 || pin.length == 3 || pin.length == 4)?'black':'white'}]}></View>
          <View style={[styles.pinView,{backgroundColor: (pin.length == 3 || pin.length == 4)?'black':'white'}]}></View>
          <View style={[styles.pinView,{backgroundColor: (pin.length == 4)?'black':'white'}]}></View>
        </View>
      </View>
      <View style={styles.numpad}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '1');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '2');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '3');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '4');
              }
            }}
            activeOpacity={1}
            style={styles.numberStyle}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '5');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '6');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '7');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '8');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '9');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity style={styles.numberStyle} activeOpacity={1} onPress={handleCancel}>
            <Icon name="close" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberStyle}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '0');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.numberStyle}>
            <Text style={{color: 'black', fontSize: moderateScale(16)}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpiPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 15,
    height: '8%',
    width: '100%',
    borderBottomWidth: 0.5,
  },
  numpad: {
    position: 'absolute',
    bottom: 0,
  },
  numberStyle: {
    width: '33%',
    height: verticalScale(45),
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankView: {
    marginTop: moderateScale(50),
    height: verticalScale(50),
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    textAlign: 'center',
  },
  sender_recvier: {
    marginTop: moderateScale(20),
    height: verticalScale(50),
    width: '100%',
    backgroundColor: 'grey',
    flexDirection: 'column',
    textAlign: 'center',
  },
  pinCode: {
    alignItems: 'center',
    marginTop: scale(160),
  },
  pinView: {
    width: scale(16),
    height: scale(16),
    // backgroundColor: 'black',
    borderRadius: scale(50),
    borderWidth: 0.8,
    margin: scale(7),
  },
});
