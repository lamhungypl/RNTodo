import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
const TodoListItem = props => {
  const {todos, toggleTodo, deleteTodo} = props;
  console.log('todolist components props', props);
  return (
    <View style={{padding: 20, borderWidth: 1, borderColor: 'black'}}>
      {todos.map((todo, id) => {
        return (
          <View key={id} style={{flexDirection: 'row'}}>
            <Text
              style={{
                flex: 1,
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {`${todo.id} ${todo.text} ${todo.completed}`}
            </Text>
            <Button title={'Done'} onPress={() => toggleTodo(todo.id)}></Button>
            <Button
              title={'Delete'}
              onPress={() =>
                todo.completed === true && deleteTodo(todo.id)
              }></Button>
          </View>
        );
      })}
    </View>
  );
};
export default TodoListItem;
