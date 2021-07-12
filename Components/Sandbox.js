import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {

   return (
           <View style={styles.container}>
           <Text style={styles.boxOne}>Box 1</Text>
           <Text style={styles.boxTwo}>Box 2</Text>
           <Text style={styles.boxThree}>Box 3</Text>
           <Text style={styles.boxFour}>Box 4</Text>
           </View>
   	      )


}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  boxOne: {
  	backgroundColor: 'yellow',
  	flex: 1,
  	padding: 10
  },
  boxTwo: {
  	backgroundColor: 'red',
  	flex: 2,
  	padding: 20
  },
  boxThree: {
  	backgroundColor: 'blue',
  	flex:1,
  	padding: 30
  },
  boxFour: {
  	backgroundColor: '#ddd',
  	flex: 3,
  	padding: 40
  }
  
});