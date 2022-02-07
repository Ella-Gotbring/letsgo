import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Async from "./src/Async.js";
export default function App() {
    return ( <
        View style = { styles.container } >
        <
        Async / >
        <
        StatusBar style = "auto" / >
        <
        /View>
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