


import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Button} from '@react-native-material/core';
// import LoginScreenStyle from './login/LoginScreenStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import { LogoutAction } from '../../store/actions/LogoutAction';


const ProfileScreen = ({navigation}) => {
  const activeUser = useSelector(state => state.LoginReducer.activeUser.data);
  console.log('activeUser in App--->', activeUser);
  const dispatch = useDispatch();
  return (
    <>
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
            Profile
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
        <View
          style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              width: '100%',
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              marginTop: -15            }}>
            <Image
              source={require('../../assets/photo/user.png')}
              style={{height: 90, width: 90}}
            />
          </View>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    paddingTop: 20,
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

                <View
                  style={{flexDirection: 'row', padding: 25, paddingBottom: 5}}>
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

                <View
                  style={{flexDirection: 'row', padding: 25, paddingBottom: 5}}>
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

                <View
                  style={{flexDirection: 'row', padding: 25, paddingBottom: 5}}>
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
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen


