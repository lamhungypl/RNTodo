import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const TodoListItem = ({todos, toggleTodo}) => {
  console.log('todolist components ', todos, toggleTodo);
  return (
    <View style={{padding: 20, borderWidth: 1, borderColor: 'black'}}>
      {todos.map((todo, id) => {
        return (
          <TouchableOpacity key={id} onPress={() => toggleTodo(todo.id)}>
            <Text
              style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {`${todo.id} ${todo.text} ${todo.completed}`}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default TodoListItem;
