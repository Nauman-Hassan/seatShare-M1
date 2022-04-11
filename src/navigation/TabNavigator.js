import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CreateAd from '../screens/createAd/CreateAd';
import FavouriteScreen from '../screens/favourite/FavouriteScreen';
import AdsDetailsScreen from '../screens/AdsDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdsDetails"
        component={AdsDetailsScreen}
        options={({route}) => ({
          title: `Travel With ${route.params?.name}`,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1B2635',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#1B2635'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#29AB87',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#1B2635',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={size}
              style={{marginRight: -10}}
            />
          ),
        })}
      />
      <Tab.Screen
        name="CreateAd"
        component={CreateAd}
        options={{
          // tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: '#29AB87'},
          tabBarIcon: ({color, size}) => (
            <EvilIcons
              name="plus"
              color={color}
              size={35}
              style={{marginRight: -10}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'AdsDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
