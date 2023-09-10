import { View, Text, StyleSheet, FlatList, TouchableOpacity,TextInput,Button } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
const PayNow = () => {
    const navigation = useNavigation();
    const handleBack = () => {
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
                    <Text style={{ color: 'white', fontSize: 17 }}>Pay Now</Text>
                    <Icon name='question-mark-circle-outline' size={30} color="white" />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.subCard}>
                    <View style={styles.nameCircle}>
                        <Text style={{ textAlign: 'center', marginTop: moderateScale(5), fontSize: 25 }}>AB</Text>
                    </View>
                    <View style={{marginTop:10,marginLeft:5}}>
                    <Text style={{fontSize:22,color:'black'}}>Aayu</Text>
                    <Text>ineedhelp@ybl</Text>
                    </View>
                    <Text style={{position:'absolute',right:10,marginTop:moderateScale(20),fontSize:18,color:'purple'}}>View History</Text>
                    
                </View>
                <View>
                    <Icon name='currency-rupee' size={30} color="black" style={{left:20,top:20}} />
                <TextInput 
                placeholderTextColor={'#929292'}
                placeholder='Enter Amount'
                style={styles.input}
                />
                                <TextInput 
                placeholderTextColor={'#929292'}
                placeholder='Add a message (Optional)'
                style={styles.input2}
                />
                </View>

            </View>
            <View style={{position:'absolute',bottom:0,backgroundColor:'purple',width:'100%',height:verticalScale(60)}}>
                <TouchableOpacity>
                    <Text style={{fontSize:22,left:moderateScale(150),color:'white',marginTop:15}}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        width: '100%',
        height: verticalScale(60),
        backgroundColor: 'purple',
    },
    subHeader: {
        marginTop: '5%',
        margin: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor:'white',
        height: verticalScale(220),
    },
    subCard:{
        flexDirection: 'row',
    },
    nameCircle: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: scale(50),
        backgroundColor: 'grey',
        margin: '3%',
    },
    input:{
        width: '80%',
        // height: moderateScale(50),
        // margin:30,
        borderColor:'purple',
        borderWidth: moderateVerticalScale(1),
        marginLeft: '15%',
        marginTop: moderateScale(-20),
        fontSize:18,
        fontWeight: 'bold',
    },
    input2:{
        width: '80%',
        // height: moderateScale(50),
        // margin:30,
        borderColor:'purple',
        borderWidth: moderateVerticalScale(1),
        marginLeft: '15%',
        marginTop: moderateScale(20),
        fontSize:18,
        fontWeight: 'bold',
    },
    btn:{
    }
});

export default PayNow