import { tsConstructorType } from '@babel/types';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';


class Regform extends React.Component() {

 rendor(){
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Registration Form</Text>
      <TextInput style={styles.textinput} placeholder='Your name' underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput} placeholder='Your Email' underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput}
      placeholder='Your Password' keyboardType='numeric' maxLength={5} secureTextEntry={true} underlineColorAndroid={'transparent'}/>
      <Button title='submit' />

    </View>
  );
}
}
const styles = StyleSheet.create({
  regform: {

    alignSelf:'stretch',
  },
  header:{
fontSize:24,
color:'#fff',
paddingBottom:10,
marginBottom:40,
borderBottomColor:'#199187',
borderBottomWidth:1,
  },
  textinput:{
    alignSelf:"stretch",
    height:40,
    color:'#fff',
    marginBottom:30,
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1,
  },
  buton:{
    alignSelf:"stretch",
    alignItems:'center',
    padding:20,
    backgroundColor:'#59cbbd',
    marginTop:30,
  },
  btntext:{
    color:'#fff',
    fontWeight:'bold',
  }
});

export default Regform;