import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
const PayNow = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        console.log(navigation.canGoBack())
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }
    const [modealOpen,setModalOpen] = useState(false);
    const [money,setMoney] = useState(null);
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
                    <View style={{ marginTop: 10, marginLeft: 5 }}>
                        <Text style={{ fontSize: 22, color: 'black' }}>Aayu</Text>
                        <Text>ineedhelp@ybl</Text>
                    </View>
                    <Text style={{ position: 'absolute', right: 10, marginTop: moderateScale(20), fontSize: 18, color: 'purple' }}>View History</Text>

                </View>
                <View>
                    <Icon name='currency-rupee' size={30} color="black" style={{ left: 20, top: 20 }} />
                    <TextInput
                        placeholderTextColor={'#929292'}
                        placeholder='Enter Amount'
                        // value={money}
                        onChange={() => { setMoney(money)}}
                        keyboardType='number-pad'
                        style={styles.input}
                    />
                    <TextInput
                        placeholderTextColor={'#929292'}
                        placeholder='Add a message (Optional)'
                        style={styles.input2}
                    />
                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'purple', width: '100%', height: verticalScale(60) }}>
                <TouchableOpacity onPress={() => {setModalOpen(true)}}>
                    <Text style={{ fontSize: 22, left: moderateScale(150), color: 'white', marginTop: 15 }}>Pay Now</Text>
                </TouchableOpacity>
            </View>
            <Modal isVisible={modealOpen} backdropOpacity={.2} style={styles.modalView}>
                <View style={styles.mainView}>
                    <View style={{ height: verticalScale(60), borderBottomWidth: 1, borderBottomColor: 'black', margin: 10, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17, color: 'black', margin: 6, fontWeight: '600' }}>Total Payable </Text>
                        <Text style={{ fontSize: 22, color: 'black', margin: 4, marginLeft: 110, }}>₹ {money} </Text>
                        <TouchableOpacity onPress={()=>{setModalOpen(false)}} style={{ position: 'absolute', right: 5, }} >
                        <Icon name='close' size={35} color="black"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bankView}>
                        <Image source={require('../../assets/hdfc.png')} style={{ height: 40, width: 40, margin: 8, }} />
                        <Text style={{ fontStyle: 'italic', color: 'black', top: 20, marginLeft: 20, fontSize: 16 }}>HDFC Bank *****55 </Text>
                        <Image source={require('../../assets/upi.jpg')} style={{ height: 14, width: 60, margin: 8, marginLeft: 30, marginTop: 23 }} />
                        <Image source={require('../../assets/right_tick.jpg')} style={{ height: 30, width: 30, margin: 8, marginLeft: 30, marginTop: 14, }} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f2f2f2',
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
        backgroundColor: 'white',
        height: verticalScale(220),
    },
    subCard: {
        flexDirection: 'row',
    },
    nameCircle: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: scale(50),
        backgroundColor: 'grey',
        margin: '3%',
    },
    input: {
        width: '80%',
        // height: moderateScale(50),
        // margin:30,
        borderColor: 'purple',
        borderWidth: moderateVerticalScale(1),
        marginLeft: '15%',
        marginTop: moderateScale(-20),
        fontSize: 18,
        fontWeight: 'bold',
    },
    input2: {
        width: '80%',
        // height: moderateScale(50),
        // margin:30,
        borderColor: 'purple',
        borderWidth: moderateVerticalScale(1),
        marginLeft: '15%',
        marginTop: moderateScale(20),
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalView: {
        margin: 0,
    },
    mainView: {
        backgroundColor: 'white',
        width: '100%',
        height: verticalScale(200),
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
    },
    bankView: {
        height: verticalScale(50),
        width: '100%',
        backgroundColor: 'grey',
        flexDirection: 'row',
        textAlign: 'center'
    }
});

export default PayNow