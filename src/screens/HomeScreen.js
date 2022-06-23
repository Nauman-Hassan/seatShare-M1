import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {LogoutAction} from "../store/actions/LogoutAction"
import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from '../components/ListItem';
import {color} from 'react-native-reanimated';
import { HomeAdsAction } from '../store/actions/HomeAction';
import { UseHomeScreen } from './home/UseHomeScreen';

export default function HomeScreen({navigation}) {
    const dispatch = useDispatch();
     const [homeAds] = UseHomeScreen();
  // useEffect(() => {
  //   dispatch(HomeAdsAction())
  // }, []);
  const [adCategory, setAdCategory] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setAdCategory(value);
  };

 

  console.log("Home screen ads from redux", homeAds);
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
          Home
        </Text>

        <TouchableOpacity
          onPress={() => {
            dispatch(LogoutAction());
          }}>
          <AntDesign name="poweroff" size={25} color="#1B2635" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderColor: '#29AB87',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
          marginHorizontal: 15,
          marginBottom: 5,
        }}>
        <Feather
          name="search"
          size={25}
          color="#29AB87"
          style={{marginRight: 5, marginTop: 12}}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#29AB87'}
          style={{color: '#29AB87', fontSize: 20}}
        />
      </View>
      <SafeAreaView>
        <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                color: '#1B2635',
              }}>
              CATEGORIES
            </Text>
          </View>

          <Carousel
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 50}
            itemWidth={200}
            loop={true}
            style={{marginLeft: 30, marginTop: 50}}
          />

          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              color: '#1B2635',
              paddingBottom: 20,
              paddingTop: 10,
            }}>
            All Ads
          </Text>
          {homeAds.map(item => (
            <ListItem
              key={item.id}
              // photo={`https://drive.google.com/file/d/1kO8T07AxWIm3H3UM2hBN7d1kMe3qdacD/view?usp=sharing`}
              title={item.email}
              subTitle={item.name}
              isFree={item.isFree}
              onPress={() => navigation.navigate('AdsDetails', item)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
