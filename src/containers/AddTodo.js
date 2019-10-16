import React, {useState} from 'react';
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
const AddTodo = props => {
  const [text, setText] = useState('');
  const addTodo = text => {
    props.dispatch(addTodo(text));
    setText('');
  };
  return (
    <>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={text => setText(text)}
          value={text}
          placeholder="eg create"
          style={{
            borderWidth: 1,
            borderColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => addTodo(text)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#eaeaea',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button title={'ADD'}></Button>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default connect()(AddTodo);
