import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export function TodoList() {
    const todos = useSelector((state) => state.todos);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today I need to:</Text>
      {todos.map((todo) => (
        <Text style={styles.todoText} key={todo.id} >{`${index + 1}. ${
          todo.text
        }`}</Text>
      ))}
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      margin: 15
    },
   todoText:{
       margin: 3
   },
   title:{
    fontSize: 20,
    fontWeight: "bold",
    height: 40
   }
  })
  
