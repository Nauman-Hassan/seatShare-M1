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
import {useEffect, useState} from 'react';

const FavouriteScreen = ({navigation}) => {

  const [ctaMyWishlist, myAds] = UseFavouriteScreen();
  const dispatch = useDispatch();

  useEffect(() => {
    ctaMyWishlist();
  },[]);

 
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

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={30} color="#1B2635" />
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
            {
              
                myAds.map(item => (
                <ListItem
                  key={item.startPlace}
                  // photo={item.poster}
                  title={item.email}
                  subTitle={item.name}
                  isFree={item.isFree}
                  onPress={() => navigation.navigate('AdsDetails', item)}
                />
                ))
             
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FavouriteScreen;


