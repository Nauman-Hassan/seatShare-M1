import React from 'react'
import {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { UseMyAdScreen } from './UseMyAdScreen'
import Feather from 'react-native-vector-icons/Feather';
import {freeGames} from "../../model/data"
import ListItem from '../../components/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LogoutAction } from '../../store/actions/LogoutAction';

const MyAdScreen = ({navigation}) => {
  const [ctaMyAd, myAds] = UseMyAdScreen();
  const dispatch = useDispatch();
  useEffect(() => {
    ctaMyAd();
  }, []);
  return (
    <>
      {/* <Text>MyAd Screen</Text> */}
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
            marginTop: 30,
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Roboto-Medium',
              paddingLeft: 15,
            }}>
            My Ads
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
              {myAds.map(item => (
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
    </>
  );
};

export default MyAdScreen