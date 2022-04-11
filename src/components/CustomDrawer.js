import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import { LogoutAction } from '../store/actions/LogoutAction';


const CustomDrawer = props => {
  const dispatch = useDispatch();
  const activeUser = useSelector(state => state.LoginReducer.activeUser.data);
  console.log('activeUser in App--->', activeUser);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#1B2635'}}>
        <View style={{padding: 20, backgroundColor: '#1B2635'}}>
          <Image
            source={require('../assets/photo/user.png')}
            style={{height: 100, width: 100, marginBottom: 15}}
          />
         
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                marginBottom: 5,
              }}>
              {activeUser.name}
            </Text>
           
          
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#29AB87'}}>
        {/* <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            dispatch(LogoutAction());
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
