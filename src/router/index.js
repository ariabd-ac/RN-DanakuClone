<<<<<<< HEAD
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Splash, OnBoarding, Login, Home, KirimDanain, IsiSaldo} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {History, Pay, Pocket, Profile} from '../pages/TabNavigator';
import {ButtomNavigation} from '../components';
=======
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {Splash,OnBoarding,Login,Home,KirimDanain, Register} from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {History,Pay,Pocket,Profile} from '../pages/TabNavigator'
import { ButtomNavigation } from '../components';
>>>>>>> 3fdc8a1915ddcd629bb0641115ac268d4b0df435
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  const BerandaIC = () => {
    return (
      <Image source={require('../assets/assets/icons-navi/beranda-icon.png')} />
    );
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#999999',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Beranda',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/assets/icons-navi/beranda-icon.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          title: 'Riwayat',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/assets/icons-navi/riwayat-icon.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          headerShown: false,
          title: 'Pay',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 50, height: 50, marginBottom: 15}}
                source={require('../assets/assets/icons-navi/pay-icon.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Pocket"
        component={Pocket}
        options={{
          headerShown: false,
          title: 'Pocket',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/assets/icons-navi/pocket-icon.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/assets/icons-navi/saya-icon.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IsiSaldo">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="KirimDanain"
          component={KirimDanain}
          options={{
            headerShown: true,
            headerTitle: 'Kirim Dana',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerStyle: {backgroundColor: '#118EEA'},
          }}
        />
        <Stack.Screen
          name="IsiSaldo"
          component={IsiSaldo}
          options={{
            headerShown: true,
            headerTitle: 'Isi Saldo',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerStyle: {backgroundColor: '#118EEA'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
<<<<<<< HEAD
=======


export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name='OnBoarding' component={OnBoarding} options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
                <Stack.Screen name='MainApp' component={MainApp} options={{headerShown:false}}/>
                <Stack.Screen name='KirimDanain' component={KirimDanain} options={{headerShown:true, headerTitle: 'Kirim Dana',headerTitleAlign: 'center' ,headerTitleStyle:{color: 'white'} ,headerStyle:{backgroundColor: '#118EEA',}} }/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
>>>>>>> 3fdc8a1915ddcd629bb0641115ac268d4b0df435
