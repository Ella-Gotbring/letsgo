import { StyleSheet, Platform } from 'react-native';
import NavigationTabs from './navigation/NavigationTabs';
import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

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