import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';
const TodoApp = () => {
  return (
    <View style={styles.container}>
      <AddTodo />
      <View>
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
