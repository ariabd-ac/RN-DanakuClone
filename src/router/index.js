import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {Splash,OnBoarding,Login,Home,KirimDanain} from '../pages'



const Stack=createStackNavigator()

export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="KirimDanain">
                <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name='OnBoarding' component={OnBoarding} options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
                <Stack.Screen name='KirimDanain' component={KirimDanain} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}