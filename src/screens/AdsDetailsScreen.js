import React from 'react'
import { View, Text, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { Button} from '@react-native-material/core';
import LoginScreenStyle from './login/LoginScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdsDetailsScreen = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#29AB87',
      }}>
      <View
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#29AB87',
        }}>
        <Image source={require('../assets/images/homescreen/bike.png')} />
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: 20,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          // backgroundColor: 'pink',
          width: '100%',
        }}>
        <Ionicons
          name="heart-outline"
          size={50}
          color="white"
          style={{marginRight: 15}}
        />
      </View>

      <View
        style={{
          flex: 1,

          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 30,
          }}>
          {route.params?.name}
        </Text>
        <View style={{flexDirection: 'row', paddingLeft: 25}}>
          <Entypo name="location-pin" size={30} color="#29AB87" />
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              paddingTop: 5,
            }}>
            {route.params?.email}
          </Text>
        </View>
        <Text style={{paddingLeft: 20}}>
          --------------------------------------------------------------------------------------------------
        </Text>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 30,
              paddingTop: 10,
            }}>
            Start Point
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 30,
              paddingTop: 15,
            }}>
            {route.params?.startPlace}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 30,
              paddingTop: 15,
            }}>
            End Point
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 40,
              paddingTop: 18,
            }}>
            {route.params?.endPlace}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 30,
              paddingTop: 15,
            }}>
            Start Time
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 30,
              paddingTop: 18,
            }}>
            {route.params?.startTime}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 30,
              paddingTop: 15,
            }}>
            Travel Day
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 35,
              paddingTop: 18,
            }}>
            {route.params?.travelDay}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 30,
              paddingTop: 15,
            }}>
            Vehicle Type
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 15,
              paddingTop: 20,
            }}>
            {route.params?.vehicleType}
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button
            title="Contact me"
            style={LoginScreenStyle.loginBtn}
            uppercase={true}
          />
        </View>
      </View>
    </View>
  );
}

export default AdsDetailsScreen


