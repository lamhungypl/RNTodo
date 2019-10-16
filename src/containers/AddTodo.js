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
const AddTodo = props => {
  const [text, setText] = useState('');
  const addTodo = text => {
    props.dispatch({type: 'ADD_TODO', text});
    setText('');
  };
  return (
    <>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={text => setText(text)}
          placeholder="eg create"
          value={text}
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
