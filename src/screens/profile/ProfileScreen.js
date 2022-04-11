


import React from 'react'
import { View, Text, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { Button} from '@react-native-material/core';
// import LoginScreenStyle from './login/LoginScreenStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';


const ProfileScreen = () => {

  const activeUser = useSelector(state => state.LoginReducer.activeUser.data);
  console.log('activeUser in App--->', activeUser);
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
        <Image
          source={require('../../assets/photo/user.png')}
          style={{height: 90, width: 90}}
        />
      </View>

      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 25,
            paddingBottom: 5,
            paddingTop: 90,
          }}>
          <FontAwesome
            name="user"
            size={30}
            color="#29AB87"
            style={{paddingLeft: 10}}
          />
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              paddingTop: 5,
              paddingLeft: 20,
            }}>
            {activeUser.name}
          </Text>
        </View>

        <Text style={{paddingLeft: 20}}>
          --------------------------------------------------------------------------------------------------
        </Text>

        <View style={{flexDirection: 'row', padding: 25, paddingBottom: 5}}>
          <Entypo
            name="mail"
            size={30}
            color="#29AB87"
            style={{paddingLeft: 5}}
          />
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              paddingTop: 5,
              paddingLeft: 15,
            }}>
            {activeUser.email}
          </Text>
        </View>

        <Text style={{paddingLeft: 20}}>
          --------------------------------------------------------------------------------------------------
        </Text>

        <View style={{flexDirection: 'row', padding: 25, paddingBottom: 5}}>
          <Entypo
            name="mobile"
            size={30}
            color="#29AB87"
            style={{paddingLeft: 3}}
          />
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              paddingTop: 5,
              paddingLeft: 15,
            }}>
            0{activeUser.mobile}
          </Text>
        </View>

        <Text style={{paddingLeft: 20}}>
          --------------------------------------------------------------------------------------------------
        </Text>

        <View style={{flexDirection: 'row', padding: 25, paddingBottom: 5}}>
          <Ionicons
            name="shield-checkmark-sharp"
            size={30}
            color="#29AB87"
            style={{paddingLeft: 1}}
          />
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              paddingTop: 5,
              paddingLeft: 15,
            }}>
            You Are {activeUser.userStatus} User
          </Text>
        </View>

        <Text style={{paddingLeft: 20}}>
          --------------------------------------------------------------------------------------------------
        </Text>
      </View>
    </View>
  );
}

export default ProfileScreen


