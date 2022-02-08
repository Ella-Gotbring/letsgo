import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

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

    return ( <
        View style = { styles.container } >
        <
        Image style = { styles.image }
        source = {
            {
                uri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            }
        }
        /> <
        Text style = { styles.text } > Hi { name } < /Text> <
        Text style = { styles.text } > Don 't know what to watch tonight? Start browsing movies and save them to your favorites!</Text>

        <
        TextInput placeholder = "What's your name?"
        style = { styles.textInput }
        onChangeText = {
            (text) => setName(text) }
        />

        <
        TouchableOpacity style = { styles.touchableOpacity }
        onPress = {
            () => save() } >
        <
        Text > Save name < /Text> <
        /TouchableOpacity>

        <
        TouchableOpacity style = { styles.touchableOpacity }
        onPress = {
            () => remove() } >
        <
        Text > Delete name < /Text> <
        /TouchableOpacity>


        <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
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
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 20,
        height: 50,
        margin: 25,
    },
    touchableOpacity: {
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius: 5,
        marginTop: 25,
        paddingHorizontal: 32,
        paddingVertical: 10,
        marginHorizontal: 32,
        borderWidth: 2,
        borderColor: "black",


    }
})

export default Async;