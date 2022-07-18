import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { UseFavouriteScreen } from './UseFavouriteScreen';
import ListItem from '../../components/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
import { GetUserWishlistAction } from '../../store/actions/GetUserWishlistAction';
import { LogoutAction } from '../../store/actions/LogoutAction';

const FavouriteScreen = ({navigation}) => {

  const {ctaMyWishlist, myAds} = UseFavouriteScreen();
  const dispatch = useDispatch();

const activeUser = useSelector(state => state.LoginReducer.activeUser.data.id);

  useEffect(() => {
    // ctaMyWishlist();
    dispatch(GetUserWishlistAction(activeUser))

  },[]);

 const myAds1 = useSelector(state => state.WishlistReducer.wishlistAds.data);
 console.log('my own ads in use outer', myAds1);
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
          Favourite Ads
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            {myAds1.map(item => (
              <ListItem
                key={item.cardTime}
                // photo={item.poster}
                title={item.userCity}
                subTitle={item.name}
                isFree={item.isFree}
                onPress={() => navigation.navigate('AdsDetails', item)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FavouriteScreen;


