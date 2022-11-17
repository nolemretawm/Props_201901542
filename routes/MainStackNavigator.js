import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';

const Nav = createStackNavigator();

function MainStackNavigator(){
    return(
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home' >
                <Nav.Screen 
                    name = "Home" 
                    component = {Home} 
                    options={{ title: 'home Screen'}} 
                />

                <Nav.Screen 
                    name = "Layout" 
                    component = {Layout} 
                    options={{ title: 'layout Screen'}} 
                />
            </Nav.Navigator>
         </NavigationContainer>
         
    )
}
export default MainStackNavigator;