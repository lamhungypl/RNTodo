import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  // useEffect(() => {
  //   console.log('store', store.getState());
  // });
  return (
    <>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
