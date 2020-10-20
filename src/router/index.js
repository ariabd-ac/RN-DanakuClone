import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {Splash,EnterNumber} from '../pages'


const Stack=createStackNavigator()

export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name='EnterNumber' component={EnterNumber} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}