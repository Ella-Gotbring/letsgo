import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Async from '../screens/Async';
import Favorites from '../screens/Favorites';
import Movies from '../screens/Movies';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return ( <
        NavigationContainer >
        <
        Tab.Navigator >
        <
        Tab.Screen name = "Home"
        component = { Async }
        options = {
            {
                tabBarIcon: ({ color, size }) => ( <
                    MaterialIcons name = "home"
                    color = { color }
                    size = { size }
                    />
                ),
            }
        }
        />

        <
        Tab.Screen name = "Movies"
        component = { Movies }
        options = {
            {
                tabBarIcon: ({ color, size }) => ( <
                    MaterialIcons name = "movie-filter"
                    color = { color }
                    size = { size }
                    />
                ),
            }
        }
        />

        <
        Tab.Screen name = "Favorites"
        component = { Favorites }
        options = {
            {
                tabBarIcon: ({ color, size }) => ( <
                    MaterialIcons name = "favorite"
                    color = { color }
                    size = { size }
                    />
                ),
            }
        }
        />

        <
        /Tab.Navigator> <
        /NavigationContainer>
    );
};

export default NavigationTabs;