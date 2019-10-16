import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';
const TodoApp = props => {
  console.log('visible ', VisibleTodos);
  return (
    <View style={styles.container}>
      <Text>Add form</Text>
      <AddTodo />
      <View>
        <Text>Todo value</Text>
        <VisibleTodos />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
export default TodoApp;
