import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Async from '../component/Async';
import Todo from '../component/Todo';


const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return ( 
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name = "Home"
        component = { Async }
        options = {
            {tabBarIcon: ({ color, size }) => ( <MaterialIcons name = "home" color = { color } size = { size }/>
                ),
            }
        }
        />
        <Tab.Screen name = "Todo"
        component = {Todo}
        options = {
            {tabBarIcon: ({ color, size }) => ( <MaterialIcons name = "favorite"color = { color } size = { size }/>
                ),
            }
        }
        />
   

        </Tab.Navigator> 
        </NavigationContainer>
    );
};

export default NavigationTabs;