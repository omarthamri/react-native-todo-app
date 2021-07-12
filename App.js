import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './Components/Header'
import TodoItem from './Components/TodoItem'
import AddTodo from './Components/AddTodo'

export default function App() {
  
  const [todos,setTodos] = useState([
                                   {text:'coffee drinking',key: '1'},
                                   {text:'tea drinking',key: '2'},
                                   {text:'beer drinking',key: '3'},
                                   {text:'coffee drinking',key: '4'},
                                   {text:'tea drinking',key: '5'},
                                   {text:'beer drinking',key: '6'}
                                   ]);

  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => key!= todo.key);
    });

  }

  const submitHandler = (text) => {
    if (text.length > 3) {
    setTodos((prevTodos) => {
       return [
        {text: text,key: Math.random().toString()},
        ...prevTodos
       ];
    });
  } else {
    Alert.alert('OOPS','text must be 4 chars length at least',[{text: "understood", onPress: ()=>console.log('closed')}]);
  }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
     <Header />
     <View style={styles.content}>
     <AddTodo submitHandler={submitHandler}/>
     <View style={styles.list}>
     <FlatList
    data = {todos}
     renderItem = {({item}) => (
      <TodoItem item={item} pressHandler = {pressHandler}/>
      )}
     />
     </View>
     </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
  
  
});
