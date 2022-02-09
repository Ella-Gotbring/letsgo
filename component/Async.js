import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

const Async = () => {

    const [name, setName] = useState();

    const save = async() => {
        try {
            await AsyncStorage.setItem("MyName", name);
            console.log("value being saved successfully: " + name);

        } catch (err) {
            console.log(err);
        }
    };

    const load = async() => {
        try {
            let name = await AsyncStorage.getItem("MyName")
            if (name !== null) {
                setName(name);
            }

        } catch (err) {
            console.log(err);

        }
    };

    const remove = async() => {
        try {
            await AsyncStorage.removeItem("MyName")
        } catch (err) {
            console.log(err);
        } finally {
            setName("");
            console.log("value being removed successfully: " + name);
        }
    };


    useEffect(() => {
        load()
    }, [])

    return ( 
        <View style = { styles.container } >
        <Image style = { styles.image }
        source = {
            {
                uri: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__340.jpg",
            }
        }
        /> 
        <Text style = { styles.text } > Hi, { name } </Text> 
        <Text style = { styles.text } > Keep track of your busy days</Text>

        <TextInput placeholder = "What's your name?"
        style = { styles.textInput }
        onChangeText = {
            (text) => setName(text) }
        />

        <TouchableOpacity style = {styles.touchableOpacity1}
        onPress = {
        () => save() } >
        <Text>Save name</Text></TouchableOpacity>

        <TouchableOpacity style = {styles.touchableOpacity}
        onPress = {
        () => remove() } >
        <Text>Delete name</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        ...Platform.select({
            ios: { backgroundColor: 'lightgrey' },
            android: { backgroundColor: 'blue' },
            default: { backgroundColor: 'white' }
        })
    },
    image: {
        width: "100%",
        resizeMode: "contain",
        height: 200,
        marginTop: 60,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        height: 40

    },
    textInput: {
        borderWidth: 2,
        height: 55,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 9,
    },
    touchableOpacity1: {
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 25,
        paddingHorizontal: 32,
        paddingVertical: 10,
        marginHorizontal: 32,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#C6F5D3"
    },
    touchableOpacity: {
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 25,
        paddingHorizontal: 32,
        paddingVertical: 10,
        marginHorizontal: 32,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#Ce4545"
    }
})

export default Async;