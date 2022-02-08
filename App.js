import { StyleSheet, Platform } from 'react-native';
import NavigationTabs from './navigation/NavigationTabs';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';


export default function App() {
    return ( <
        Provider store = { store } >
        <
        NavigationTabs / >
        <
        /Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: { backgroundColor: 'blue' },
            android: { backgroundColor: 'grey' },
            default: { backgroundColor: 'white' }
        })
    },

});