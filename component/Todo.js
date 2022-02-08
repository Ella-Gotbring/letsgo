
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../actions/todoActions';

import {Text, View, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Platform} from 'react-native';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;
  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Text>Del</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Add your todo here'}
        value={todoValue}
      />
      <Button title="Add Todo" onPress={addTodo} />

      <Text style={{alignSelf: 'stretch', paddingLeft: 45}}>
        My important todo list for today :
      </Text>
      {renderTodoList()}
    </View>
  );
};

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
  mainInput: {
    borderWidth: 2,
    height: 55,
    width: 200,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 1,
    width: 300,
    height: 40,
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
  removeTodo: {
    backgroundColor: 'red',
    borderRadius: 2,
    width: 50,
    padding: 5,
    alignItems: 'center',
    margin: 8,
  },

})


export default Todo;