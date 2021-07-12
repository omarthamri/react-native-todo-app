import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function AddTodo({submitHandler}) {

	const [text,setText] = useState('')

  const changeHandler = (val) => {
  	setText(val);

  }
  
  return(
  	<View>
  	<TextInput 
  	placeholder = 'new todo...'
  	onChangeText = {changeHandler}
  	style = {styles.input}
  	/>
  	<Button title="add todo" color="coral" onPress={() => submitHandler(text)}/>
  	</View>
  	)






}




  const styles = StyleSheet.create({
  	input: {
  		marginBottom: 10,
  		paddingHorizontal: 8,
  		paddingVertical: 6,
  		borderBottomWidth: 1,
  		borderBottomColor: '#ddd' 

  	}

  })