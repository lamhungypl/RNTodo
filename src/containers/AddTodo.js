import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import store from '../store';

const AddTodo = props => {
  const [text, setText] = useState('');
  const addHandler = text => {
    props.dispatch(addTodo(text));
    console.log('got add handler');
    setText('');

    console.log('todoapp props: ', store.getState().todos);
  };
  useEffect(() => {
    console.log('text: ', text);
  }, [text]);
  return (
    <>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={text => setText(text)}
          value={text}
          placeholder="eg create"
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              backgroundColor: '#eaeaea',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button title={'ADD'} onPress={() => addHandler(text)}></Button>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default connect()(AddTodo);
