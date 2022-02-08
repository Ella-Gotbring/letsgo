import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Movies = () => {
    return ( <
        View style = { styles.container } >
        <
        Text > Movies < /Text>

        <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Movies;