
import React from 'react';
import { AddTodo } from '../redux/AddTodo';
import { TodoList } from '../redux/TodoList';
import {View, StyleSheet, Platform} from 'react-native';

const Todo = () => {
 
  return (
    <View style={styles.container}>
      <AddTodo />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
        ios: { backgroundColor: 'lightgrey' },
        android: { backgroundColor: 'blue' },
        default: { backgroundColor: 'white' }
    })
  },
  title:{
    fontWeight: "bold",
  }

})


export default Todo;