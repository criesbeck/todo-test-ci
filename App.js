// source:  https://dev.to/aveb/building-a-react-native-app-w-expo-77l
import React, { useState } from 'react';
import { 
   StyleSheet,
   Text,
   View,
   TextInput,
   Button,
   FlatList
  } from 'react-native';

export default function App() {

  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);

  const pressHandler = () => {
    setTodos([textInput, ...todos]);
  };

  const typingHandler = (value) => {
    setTextInput(value);
  }

  return (
    <View style={styles.container}>
      <Text>Quick and Dirty ToDo</Text>
      <TextInput
        onChangeText={typingHandler}
        onSubmitEditing={pressHandler}
        value={textInput}
        style={{ borderWidth: 1, width: 300 }}
      />
      <Button
        onPress={pressHandler}
        title="Add Todo"
      />
      <FlatList
        data={todos}
        renderItem={todo => <Todo text={todo.item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Todo = props => (
  <View 
    style={{ backgroundColor: "#eaeaea", width: 300, margin: 5 }}>
    <Text>{props.text}</Text>
  </View>
);