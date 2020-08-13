import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../Authentication/Login/Login';

interface Props {
    
}

const Tab = createBottomTabNavigator();

export const Navigation = (props: Props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Hello" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}