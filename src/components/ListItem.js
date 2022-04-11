import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ListItem({photo, title, subTitle, isFree, price, onPress}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={require('../assets/photo/adImage.png')}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 220}}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
              fontWeight:"bold"
            }}>
            {subTitle}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Entypo name="location-pin" size={20} color="#29AB87" />
            <Text
              numberOfLines={1}
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 14,
              }}>
              {title}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#29AB87',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
          Detail
        </Text>
      </TouchableOpacity>
    </View>
  );
}
