import React from 'react'
import {useEffect, useState} from 'react';

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import { UseMyAdScreen } from './UseMyAdScreen'
import {freeGames} from "../../model/data"
import ListItem from '../../components/ListItem';
import {useDispatch, useSelector} from 'react-redux';

const MyAdScreen = ({navigation}) => {
  const [ctaMyAd, myAds] = UseMyAdScreen();
  useEffect(() => {
    ctaMyAd();
  }, []);
  return (
    <>
      {/* <Text>MyAd Screen</Text> */}
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
                key={item.startPlace}
                // photo={item.poster}
                title={item.email}
                subTitle={item.name}
                isFree={item.isFree}
                onPress={() => navigation.navigate('AdsDetails', item)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MyAdScreen