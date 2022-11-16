import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


import Layout  from '../screens/Layout';
import Home from"../screens/Home";

const Stack = createStackNavigator();

function MainStackNavigator(){
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Layout'>
                <Stack.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Stack.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>
            </Stack.Navigator>
            

    </NavigationContainer>
    
);

    }


export default MainStackNavigator;