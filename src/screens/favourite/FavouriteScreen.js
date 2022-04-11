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

const FavouriteScreen = ({navigation}) => {
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
    </View>
  );
};

export default FavouriteScreen;
