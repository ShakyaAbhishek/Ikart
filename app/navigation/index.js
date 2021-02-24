import React, {useEffect, useState} from 'react';
import {Button, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import MyCart from '../screens/MyCart';
import ProductDetail from '../screens/ProductDetail';
import SplashScreen from '../components/Splash';
import HomeIcon from '../assets/images/home.png';
import CartIcon from '../assets/images/cart.png';
import ProfileIcon from '../assets/images/profile.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Route() {
  const [state, setState] = useState({showSplash: true});

  useEffect(() => {
    setTimeout(() => {
      setState({...state, showSplash: false});
    }, 3000);
  });

  return state.showSplash ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={TabBar}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function TabBar() {
  // bottom tab navigation
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#00c97b',
        inactiveTintColor: 'gray',
        style: {
          borderTopWidth: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      backBehavior="order">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={HomeIcon}
              resizeMode="contain"
              style={[styles.iconStyle, {tintColor: color}]}
              tintColor={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyCart"
        component={MyCart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={CartIcon}
              resizeMode="contain"
              style={[styles.iconStyle, {tintColor: color}]}
              tintColor={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profle"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={ProfileIcon}
              resizeMode="contain"
              style={[styles.iconStyle, {tintColor: color}]}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
  },
});
