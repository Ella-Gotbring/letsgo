import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
//import addTodo action from todoSlice
import { addTodo } from './todosSlice';


export function AddTodo() {
    const [text, setText] = useState();
    
    const dispatch = useDispatch();
  
    function handleSumbit(){
      dispatch(addTodo(text));
      setText(''); 
    }
  
    return (
      <View style={styles.container}>
        <TextInput placeholder="Write something.." value={text} onChangeText={setText} style={styles.input} />
        <TouchableOpacity style = {styles.touchableOpacity} 
        onPress ={handleSumbit} >
        <Text>Add</Text></TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      margin:2 
    },
    input: {
      borderWidth: 2,
      height: 55,
      width: 280,
      padding: 30,
      margin: 30,
      alignItems: 'center',
      borderRadius: 9,
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
        backgroundColor: "#C6F5D3"
        
    }
  
  })
  
