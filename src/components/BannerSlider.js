import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { CategoryAction } from '../store/actions/CategoryAction';


export default function BannerSlider({data}) {
  const dispatch = useDispatch();
  const ctaCategory=(data)=>{
    console.log("ctaCta fun", data);
    console.log('ctaCta fun state',data.toLocaleLowerCase(), "=");
    dispatch(CategoryAction(data.toLocaleLowerCase()));
  }
  return (
    <View style={{marginLeft: 30}}>
      {/* <Image
        source={data.image}
        style={{height: 100, width: 120, borderRadius: 10, backgroundColor:"red", tintColor:"white"}}
      /> */}
      {/* <View
        style={{
          width: 50 * 2,
          height: 50,
          backgroundColor: 'red',
          borderRadius: 20,
        }}></View> */}
      <Text onPress={()=>{ctaCategory(data.title)}}>{data.title}</Text>
    </View>
  );
}
