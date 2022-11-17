import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/Home';
import Layout from '../screens/Layout';

const Nav= createBottomTabNavigator();

function MainTabNavigator(){
    return (
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

    );

}
export default MainTabNavigator;

