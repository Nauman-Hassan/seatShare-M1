import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Stack, TextInput, Button} from '@react-native-material/core';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SignUpScreenStyle from '../signUp/SignUpScreenStyle';
import {Picker} from '@react-native-picker/picker';
import {useEffect, useState, useRef} from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { UseCreateAd } from './UseCreateAd';
import {useDispatch, useSelector} from 'react-redux';
import { LogoutAction } from '../../store/actions/LogoutAction';


const CreateAd = ({navigation}) => {
  const dispatch =useDispatch()
  const setDate = (event, time) => {
    console.log("EVENT", event);
    console.log("TIME", time);
    setUserSTime(time);
    setT1Open(false)
  };

  const [
    ctaCreateAd,
    userCity,
    setUserCity,
    userSPoint,
    setUserSPoint,
    userEPoint,
    setUserEPoint,
    userSTime,
    setUserSTime,
    userTravelDay,
    setUserTravelDay,
    userVehicle,
    setUserVehicle,
    userImage,
    setUserImage,
    userVehicleNumber,
    setUserVehicleNumber,
    travelCharges,
    setTravelCharges,
  ] = UseCreateAd();



  const [selectedLanguage, setSelectedLanguage] = useState();
  const [t1Open, setT1Open] = useState(false);
  const ctaT1Open = ()=>{
    console.log("cta run");
    setT1Open(true);
  }
  

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Roboto-Medium',
            paddingLeft: 15,
          }}>
          Create Ads
        </Text>

        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={30} color="#1B2635" />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            dispatch(LogoutAction());
          }}>
          <AntDesign name="poweroff" size={25} color="#1B2635" />
        </TouchableOpacity>
      </View>

      <SafeAreaView>
        {/* <KeyboardAvoidingView behavior="padding"> */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%', height: '100%'}}>
          <View style={SignUpScreenStyle.ImageView}>
            <TextInput
              placeholder="Your Start Point"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setUserSPoint(e);
              }}
              defaultValue={userSPoint}
            />
            <TextInput
              placeholder="Your End Point"
              keyboardType="email-address"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setUserEPoint(e);
              }}
              defaultValue={userEPoint}
            />
            <TextInput
              placeholder="Your Vehicle Number"
              variant="outlined"
              placeholderTextColor={'#29AB87'}
              style={SignUpScreenStyle.userinp}
              color={'#29AB87'}
              inputStyle={{color: '#29AB87'}}
              onChangeText={e => {
                setUserVehicleNumber(e);
              }}
              defaultValue={userVehicleNumber}
            />
            <View
              style={SignUpScreenStyle.userinp12}
              onPress={() => {
                ctaT1Open();
              }}>
              <Text
                style={{
                  color: '#29AB87',
                  paddingLeft: 15,
                  paddingTop: 15,
                  fontSize: 16,
                }}
                onPress={() => {
                  ctaT1Open();
                }}>
                Choose Start Time
              </Text>
            </View>
            {t1Open ? (
              <RNDateTimePicker
                mode="time"
                value={new Date()}
                display="spinner"
                onChange={setDate}
                timeZoneOffsetInMinutes={60}
                is24Hour={true}
              />
            ) : null}

            <View style={SignUpScreenStyle.userinp1}>
              <Picker
                style={{color: '#29AB87'}}
                dropdownIconColor={'#29AB87'}
                dropdownIconRippleColor={'#29AB87'}
                selectedValue={travelCharges}
                onValueChange={(itemValue, itemIndex) =>
                  setTravelCharges(itemValue)
                }>
                <Picker.Item label=" - - Select Travel Charges - - " disabled />
                <Picker.Item label="Rs. 10" value="10" />
                <Picker.Item label="Rs. 20" value="20" />
                <Picker.Item label="Rs. 30" value="30" />
                <Picker.Item label="Rs. 40" value="40" />
                <Picker.Item label="Rs. 50" value="50" />
                <Picker.Item label="Rs. 60" value="60" />
                <Picker.Item label="Rs. 70" value="70" />
                <Picker.Item label="Free" value="free" />
              </Picker>
            </View>
            <View style={SignUpScreenStyle.userinp1}>
              <Picker
                style={{color: '#29AB87'}}
                dropdownIconColor={'#29AB87'}
                dropdownIconRippleColor={'#29AB87'}
                selectedValue={userTravelDay}
                onValueChange={(itemValue, itemIndex) =>
                  setUserTravelDay(itemValue)
                }>
                <Picker.Item label=" - - Select Travel Day - - " disabled />
                <Picker.Item label="Friday" value="friday" />
                <Picker.Item label="Saturday" value="saturday" />
                <Picker.Item label="Sunday" value="sunday" />
                <Picker.Item label="Monday" value="monday" />
                <Picker.Item label="Tuesday" value="tuesday" />
                <Picker.Item label="Wednesday" value="wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="All Days" value="alldays" />
              </Picker>
            </View>

            <View style={SignUpScreenStyle.userinp1}>
              <Picker
                style={{color: '#29AB87'}}
                dropdownIconColor={'#29AB87'}
                dropdownIconRippleColor={'#29AB87'}
                selectedValue={userVehicle}
                onValueChange={(itemValue, itemIndex) =>
                  setUserVehicle(itemValue)
                }>
                <Picker.Item label=" - - Select Vehicle Type - - " />
                <Picker.Item label="Bus" value="bus" />
                <Picker.Item label="Car" value="car" />
                <Picker.Item label="Rickshaw" value="rickshaw" />
                <Picker.Item label="Bike" value="bike" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            <View style={SignUpScreenStyle.userinp1}>
              <Picker
                style={{color: '#29AB87'}}
                dropdownIconColor={'#29AB87'}
                dropdownIconRippleColor={'#29AB87'}
                selectedValue={userCity}
                onValueChange={(itemValue, itemIndex) =>
                  setUserCity(itemValue)
                }>
                <Picker.Item label=" - - Select City - - " />
                <Picker.Item label="Islamabad" value="Islamabad" />
                <Picker.Item label="Faisalabad" value="Faisalabad" />
                <Picker.Item label="Gujranwala" value="Gujranwala" />
                <Picker.Item label="Lahore" value="Lahore" />
                <Picker.Item label="Multan" value="Multan" />
                <Picker.Item label="Rawalpindi" value="Rawalpindi" />
              </Picker>
            </View>

            <Button
              title="Create Ad"
              style={SignUpScreenStyle.SignUpBtn1}
              uppercase={true}
              onPress={ctaCreateAd}
            />
          </View>
        </ScrollView>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    </View>
  );
};

export default CreateAd;
