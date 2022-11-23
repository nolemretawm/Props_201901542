import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';
import Weather from '../screens/Weather';

const Nav = createStackNavigator();

function MainStackNavigator(){
    return(
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home' >
                <Nav.Screen 
                    name = "Home" 
                    component = {Home} 
                    options={{ title: '추가 Home'}} 
                />

                <Nav.Screen 
                    name = "Layout" 
                    component = {Layout} 
                    options={{ title: '처음 Layout'}} 
                />

                <Nav.Screen
                    name = "Weather"
                    component={Weather}
                    options={{title:'날씨조회화면'}}
                />
            </Nav.Navigator>
         </NavigationContainer>
         
    )
}
export default MainStackNavigator;