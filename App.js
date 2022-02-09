import React from 'react';
import { StyleSheet } from 'react-native';
import NavigationTabs from './navigation/NavigationTabs';
import { Provider } from 'react-redux';
import { store } from './navigation/store';

export default function App() {
    return ( 
        <Provider store = {store}>
        <NavigationTabs />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});